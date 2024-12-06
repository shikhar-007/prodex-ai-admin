import LoginComponent from "@/components/LoginComponent";
import LogoWithText from "@/components/LogoWithText";
import SuccessModal from "@/components/Modals/SuccessModal";
import ValidateOtp from "@/components/ValidateOtp";
import OtpComponent from "@/components/VerifyOtp";
import useAuthHook from "@/hooks/useAuthHook";
import AuthLayout from "@/layouts/AuthLayout";
import { ROUTES } from "@/utils/routes";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Login() {
  const { canEnterOtp } = useSelector((state) => state.global);
  const hook = useAuthHook();
  return (
    <AuthLayout>
      <div className="min-h-[calc(100vh-100px)] flex text-white text-sm font-noto justify-center items-center">
        <div className="w-[450px] border border-white/10 relative flex rounded-lg flex-col pb-14 gap-6 bg-black/30 overflow-hidden backdrop-blur-[5px] sm:w-[70%] lg:w-[40%] px-20 py-10 my-auto">
          <LogoWithText />

          {!canEnterOtp && <LoginComponent />}
          {canEnterOtp && <ValidateOtp />}
          <div className="absolute -left-1 -bottom-2 opacity-20">
            <Image
              src={"/images/ringDown.svg"}
              width={200}
              height={200}
              alt=""
            />
          </div>
        </div>
      </div>

      <SuccessModal />
    </AuthLayout>
  );
}

export default Login;
