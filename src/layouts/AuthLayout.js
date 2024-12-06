import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";
import { setAuthToken, setToken } from "@/services/GlobalSlice";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

function AuthLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuthToken(getCookie("authToken")));
    dispatch(setToken(getCookie("token")));
  }, [dispatch, getCookie]);
  return (
    <div className="min-h-screen bg-authBackground px-10">
      <div className="absolute">
        <Image
          src={"/images/LeftLine.png"}
          width={400}
          height={400}
          className="h-[400px] w-[400px]"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src={"/images/RightLine.png"}
          width={400}
          height={400}
          className="h-[400px] w-[400px]"
        />
      </div>
      <Toaster />
      <div className="flex flex-col max-w-[1440px] xl:ml-auto xl:mr-auto min-h-screen">
        <div className="flex-grow p-5 font-noto h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default AuthLayout;
