import React from "react";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";

function EditProfileModal({ isOpen, onClose }) {
  return (
    <SmallModal open={isOpen}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-between text-white">
            <h1 className="text-2xl font-[700] font-parsi">Edit Profile</h1>
            <IoMdClose
              className="text-xl cursor-pointer"
              onClick={() => onClose(false)}
            />
          </div>
          <form className="space-y-3 pt-8">
            <div className="flex flex-col text-white space-y-2">
              <label className="text-sm text-white/60">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="inputfield-border bg-white/5 rounded-md py-2 px-4 placeholder-white font-[16px]"
              />
            </div>
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
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </SmallModal>
  );
}

export default EditProfileModal;
