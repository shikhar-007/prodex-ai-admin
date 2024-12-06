import AuthLayout from "@/layouts/AuthLayout";
import Setup2Fa from "@/components/Setup2FA";
import VerifyOtp from "@/components/VerifyOtp";
import QRComponent from "@/components/QRComponent";
import LogoWithText from "@/components/LogoWithText";
import { useEffect, useState } from "react";
import useAuthHook from "@/hooks/useAuthHook";

const INITIAL_VALUE = {
  enable2FAStatus: false,
  qrStatus: false,
  otpStatus: false,
};
const DEFAULT_VALUE = {
  enable2FAStatus: true,
  qrStatus: false,
  otpStatus: false,
};
const Enable2FA = () => {
  const [status, setStatus] = useState(DEFAULT_VALUE);
  const hook = useAuthHook();
  return (
    <AuthLayout>
      <div className="min-h-[calc(100vh-100px)] flex text-white text-sm font-noto justify-center items-center">
        <div className="w-[450px] border border-white/10 relative flex rounded-lg flex-col pb-14 gap-6 bg-black/30 overflow-hidden backdrop-blur-[5px] sm:w-[70%] lg:w-[40%] px-20 py-10 my-auto">
          <div className="flex text-2xl justify-center gap-2 items-center">
            <LogoWithText />
          </div>
          {status?.enable2FAStatus && (
            <Setup2Fa setStatus={setStatus} initialValue={INITIAL_VALUE} />
          )}
          {status?.qrStatus && (
            <QRComponent setStatus={setStatus} initialValue={INITIAL_VALUE} />
          )}
          {status?.otpStatus && (
            <VerifyOtp setStatus={setStatus} initialValue={INITIAL_VALUE} />
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Enable2FA;
