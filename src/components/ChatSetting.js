import React from "react";
import { Switch } from "./ui/switch";

function ChatSetting() {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="w-full">
        <div className="w-full flex items-center font-parsi">
          <h1 className="smxx:text-xl text-sm text-white">Chat Settings</h1>
        </div>
        <div className="w-full my-5 border-b pb-2 border-[#1b3754]">
          <div className="w-full flex items-center justify-between">
            <h1 className="smxx:text-sm text-xs text-white">
              Enable Conversation Tags
            </h1>
            <Switch />
          </div>
          <p className="text-[10px] smxx:w-[220px] w-full text-white/60 py-2">
            Lorem ipsum dolor sit amet consectetur. Nam ac consectetur mauris
            non.{" "}
          </p>
        </div>
        <div className="w-full my-5 border-b pb-2 border-[#1b3754]">
          <div className="w-full flex items-center justify-between">
            <h1 className="smxx:text-sm text-xs text-white">
              Display Chat History
            </h1>
            <Switch />
          </div>
        </div>
        <div className="w-full my-5 border-b pb-2 border-[#1b3754]">
          <div className="w-full flex items-center justify-between">
            <h1 className="smxx:text-sm text-xs text-white">
              Clear Chat History
            </h1>
            <Switch />
          </div>
        </div>
      </div>
      <div className="flex gap-2 font-parsi w-full">
        <button className="flex w-1/2 items-center justify-center gap-2 py-2 px-6 text-sm text-white bg-buttonBg rounded-md">
          Save
        </button>
        <button className="flex w-1/2 items-center justify-center gap-2 py-2 px-6 text-sm text-white border border-[#299bf4] rounded-md">
          Discard
        </button>
      </div>
    </div>
  );
}

export default ChatSetting;
