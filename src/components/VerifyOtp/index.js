import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useVerifyOtpMutation } from "@/services/admin";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import toast from "react-hot-toast";
import { ROUTES } from "@/utils/routes";
import { deleteCookie, setCookie } from "cookies-next";

const VerifyOtp = ({ setStatus, initialValue }) => {
  const handleBack = () => {
    setStatus({ ...initialValue, qrStatus: true });
  };
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpValue, setOtpValue] = useState("");
  const { qrValue, token } = useSelector((state) => state.global);
  const [error, setError] = useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  // Update OTP values
  const handleOtpChange = (value) => {
    if (!/^\d*$/.test(value)) return; // Ensure only numbers are entered
    setOtpValue(value);
    setError("");
  };

  // Validate and submit OTP
  const handleSubmitOtp = async () => {
    try {
      // Replace with your API endpoint and payload structure
      const response = await verifyOtp({
        otp: otpValue,
        secretKey: qrValue?.label,
      }).unwrap();
      if (response?.message) {
        setCookie("authToken", token);
        deleteCookie("token");
        toast?.success(response?.message);
        router.push(ROUTES.HOME);
      }
    } catch (err) {
      console.log("handleSubmitOtp error", err);
      toast?.success(err?.message || err?.data?.message);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-center font-bold text-lg">2FA</div>
      </div>
      <div className="text-fade text-center flex ">
        <div className="text-base">
          Please complete the operation of security authentication. Please
          Confirm your account by entering the authorisation code send to email
          id <span className="text-standard">Alexa.joe @gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* <EnterOtp handleBack={handleBack} /> */}
        <InputOTP
          maxLength={6}
          onChange={(value) => {
            handleOtpChange(value);
          }}
        >
          <InputOTPGroup className="gap-5">
            {otp.map((value, index) => (
              <InputOTPSlot key={index} index={index} value={value} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div className="w-full flex flex-col gap-3 items-center">
          <div className="w-full flex gap-2">
            <Button
              className="w-full"
              variant="default"
              size="lg"
              onClick={handleSubmitOtp}
              disabled={isLoading}
            >
              Submit
            </Button>
            <Button
              className="w-full"
              variant="outline"
              size="lg"
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
          <div className="w-fit text-blue text-[12px] cursor-pointer">
            Resend Code?
          </div>
        </div>
      </div>
      <div className="absolute -left-1 -bottom-2 opacity-20">
        <Image src={"/images/ringDown.svg"} width={200} height={200} />
      </div>
    </>
  );
};

export default VerifyOtp;
