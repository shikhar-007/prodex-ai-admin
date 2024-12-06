import Image from "next/image";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setQrValue } from "@/services/GlobalSlice";
import { Loader } from "lucide-react";
import { useLazySetup2faQuery } from "@/services/admin";
import toast from "react-hot-toast";

const Setup2Fa = ({ setStatus, initialValue }) => {
  const [setup2fa, { isLoading }] = useLazySetup2faQuery();
  const disptach = useDispatch();
  const handler = useCallback(async () => {
    try {
      const response = await setup2fa().unwrap();
      if (response) {
        //   router.push(ROUTES.VERIFY_OTP);
        disptach(
          setQrValue({
            value: response?.data?.secret,
            label: response?.data?.secretKey,
          })
        );
        setStatus({ initialValue, qrStatus: true });
        //   disptach(setQrValue(response?.data?.qrValue));
      }
    } catch (error) {
      console.log("handler error", error);
      toast.error(error?.data?.message);
    }

    // disptach(setQrValue("ndsjkhjakdsa"));
    // setStatus({ initialValue, qrStatus: true });
  }, [disptach, setQrValue, setStatus]);

  return (
    <>
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-lg font-bold">Enable Two-Factor Authentication</h2>
        <p className="text-sm text-gray-300">
          Two-Factor Authentication (2FA) adds an extra layer of security to
          your account by requiring a one-time code in addition to your
          password. This ensures that only you can access your account, even if
          your password is compromised.
        </p>
        <p className="text-sm text-gray-300">
          To set up 2FA, you’ll need a smartphone app such as Google
          Authenticator or Authy. Follow the steps in the next screen to
          complete the process.
        </p>
      </div>
      <Button
        disabled={isLoading}
        type="submit"
        variant="default"
        size="lg"
        onClick={handler}
      >
        Setup 2FA
        {isLoading && <Loader className="animate-spin" />}
      </Button>
      <div className="absolute -left-1 -bottom-2 opacity-20">
        <Image src={"/images/ringDown.svg"} width={200} height={200} alt="" />
      </div>
    </>
  );
};

export default Setup2Fa;
