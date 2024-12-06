import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from ".";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import ProfileManagement from "../ProfileManagement";
import ChatSetting from "../ChatSetting";
import AccountSetting from "../AccountSetting";

export function ProfileModal({ isOpen, onClose }) {
  const [stage, setStage] = useState(1);
  return (
    <Modal open={isOpen}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="w-full flex items-center justify-between text-white border-b border-[#1b3754] px-4 py-1">
          <h1 className="text-2xl font-[700] font-parsi">Profile</h1>
          <IoMdClose
            className="text-xl cursor-pointer"
            onClick={() => {
              onClose(false);
              setStage(1);
            }}
          />
        </div>
        <div className="w-full h-[455px] flex">
          <div className="w-[35%] py-5 border-r border-[#1b3754] h-full space-y-3 font-parsi">
            <div
              className={`${
                stage === 1 ? "bg-[#0e1623]" : ""
              } py-2 smxx:px-6 px-2 cursor-pointer`}
              onClick={() => setStage(1)}
            >
              <h1
                className={`flex items-center gap-2 ${
                  stage === 1 ? "text-white" : "text-white/60"
                } smxx:text-sm text-xs`}
              >
                <HiOutlineUser
                  className={`text-lg ${stage === 1 ? "text-[#299bf4]" : ""}`}
                />{" "}
                Profile Management
              </h1>
            </div>
            <div
              className={`${
                stage === 2 ? "bg-[#0e1623]" : ""
              } py-2 smxx:px-6 px-2 cursor-pointer`}
              onClick={() => setStage(2)}
            >
              <h1
                className={`flex items-center gap-2 ${
                  stage === 2 ? "text-white" : "text-white/60"
                } smxx:text-sm text-xs`}
              >
                <HiOutlineChatBubbleLeftEllipsis
                  className={`text-lg ${stage === 2 ? "text-[#299bf4]" : ""}`}
                />{" "}
                Chat Settings
              </h1>
            </div>
            <div
              className={`${
                stage === 3 ? "bg-[#0e1623]" : ""
              } py-2 smxx:px-6 px-2 cursor-pointer`}
              onClick={() => setStage(3)}
            >
              <h1
                className={`flex items-center gap-2 ${
                  stage === 3 ? "text-white" : "text-white/60"
                } smxx:text-sm text-xs`}
              >
                <MdOutlineAccountCircle
                  className={`text-lg ${stage === 3 ? "text-[#299bf4]" : ""}`}
                />{" "}
                Account Settings
              </h1>
            </div>
          </div>
          <div className="w-[65%] px-6 py-8 overflow-y-scroll">
            {stage === 1 && <ProfileManagement />}
            {stage === 2 && <ChatSetting />}
            {stage === 3 && <AccountSetting />}
          </div>
        </div>
      </div>
    </Modal>
  );
}
