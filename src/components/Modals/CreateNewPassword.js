import React from "react";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";

function CreateNewPassword() {
  return (
    <SmallModal open={false}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-end text-white">
            <IoMdClose
              className="text-xl cursor-pointer"
              //   onClick={() => onClose(false)}
            />
          </div>
          <div className="w-full text-center space-y-2">
            <h1 className="font-parsi font-[700] text-white text-xl">
              Create New Password
            </h1>
          </div>
          <div className="py-5 px-10">
            <form className="space-y-4">
              <div className="flex flex-col text-white space-y-2">
                <label className="text-sm text-white/60">New Password</label>
                <input
                  type=""
                  placeholder="Enter New Password"
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
              </div>
              <div className="flex flex-col text-white space-y-2">
                <label className="text-sm text-white/60">
                  Confirm Password
                </label>
                <input
                  type=""
                  placeholder="Enter Confirm Password"
                  className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
                />
              </div>

              <div className="pt-10 text-center space-y-2">
                <button className="w-full py-2 text-white/70 font-parsi bg-buttonBg rounded-md">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SmallModal>
  );
}

export default CreateNewPassword;
