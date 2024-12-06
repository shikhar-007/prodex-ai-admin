import React, { useEffect, useState } from "react";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useVerifyOtpMutation } from "@/services/auth";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function VerifySignUpEmailModal({showModal, setShowModal}) {
  const [otp, setOtp] = useState("");

  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const router = useRouter();

  const [verifyOtp] = useVerifyOtpMutation();
  const {email} = useSelector((state) => state.global)

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const handleResendCode = () => {
    setTimer(60);
    setIsTimerActive(true);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page.
  
    try {
      // Call the mutation and unwrap the result
      const response = await verifyOtp({
        otp,
        email,
      }).unwrap();
  
      console.log("Verification Response:", response);
  
      // Check for success in the API response
      if (response?.success) {
        toast.success("OTP verified successfully!")
        setShowModal(false);
  
        // Redirect to the login page
        router.push("/login");
      } else {
        // Handle unexpected success response structure
        toast.error("Failed to verify OTP. Please try again.")
      }
    } catch (error) {
      // Handle errors
      console.error("Error verifying OTP:", error);
      toast.error(error?.data?.message || "Failed to verify OTP. Please try again.");
    }
  };
  
  

  return (
    <SmallModal open={showModal}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-end text-white">
            <IoMdClose
              className="text-xl cursor-pointer"
                onClick={() => setShowModal(false)}
            />
          </div>
          <form className="space-y-3 pt-8 px-5">
            <div className="w-full text-center space-y-2">
              <h1 className="font-parsi font-[700] text-white text-xl">
                Confirmation Message
              </h1>
              <p className="text-white/60 text-xs">
                Verify Your Email.
              </p>
            </div>
            <div className="py-10 w-full">
              <div className="w-full flex justify-center">
                <OTPInput
                  containerStyle={"otp-container"}
                  inputStyle={"input-container"}
                  value={otp}
                  onChange={(e) => {
                    if (/^\d*$/.test(e)) {
                      setOtp(e);
                    }
                  }}
                  numInputs={6}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div className="pt-10 text-center space-y-2">
                <button onClick={handleVerifyOtp} className="w-full py-2 text-white/70 font-parsi bg-buttonBg rounded-md">
                  verify
                </button>
                <p className="text-white/60 text-xs">
                  {isTimerActive ? (
                    `Send code again in ${String(
                      Math.floor(timer / 60)
                    ).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`
                  ) : (
                    <span
                      onClick={handleResendCode}
                      className="text-blue-400 cursor-pointer"
                    >
                      Resend code
                    </span>
                  )}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SmallModal>
  );
}

export default VerifySignUpEmailModal;
