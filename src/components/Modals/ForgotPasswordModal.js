import React from "react";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";

function ForgotPasswordModal({ isOpen, onClose }) {
  return (
    <SmallModal open={isOpen}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-end text-white">
            <IoMdClose
              className="text-xl cursor-pointer"
              onClick={() => onClose(false)}
            />
          </div>
          <form className="space-y-3 pt-8 px-5">
            <div className="w-full text-center space-y-2">
              <h1 className="font-parsi font-[700] text-white text-xl">
                Forgot Your Password?
              </h1>
              <p className="text-white/60 text-xs">
                Enter your registered email address below, and we'll send you a
                OTP to reset your password.
              </p>
            </div>
            <div className="py-10">
              <div className="flex flex-col text-white space-y-2">
                <label className="text-sm text-white/60">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
              </div>

              <div className="pt-10 text-center space-y-2">
                <button className="w-full py-2 text-white/70 font-parsi bg-buttonBg rounded-md">
                  Send Code
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SmallModal>
  );
}

export default ForgotPasswordModal;
