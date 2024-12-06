import React, { useRef } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import DeleteIcon from "../../public/svg/DeleteIcon";
import useOutsideClick from "@/utils/Common";
import { RiDeleteBinLine } from "react-icons/ri";

function HistoryFeatures({ openFeature, setOpenFeature }) {
  const divRef = useRef(null);

  useOutsideClick(divRef, () => setOpenFeature(false));
  return (
    <>
      {openFeature && (
        <div
          ref={divRef}
          className="absolute md:-right-[70%] -right-[45%] z-20 bg-inputBg -top-1 rounded-md px-2 md:px-4 py-2 space-y-2 box-border"
        >
          <div className="text-white flex items-center gap-2 cursor-pointer text-xs md:text-sm hover:bg-[#364759] py-1 px-2 rounded-md w-full">
            <IoShareSocialOutline /> Share
          </div>
          <div className="text-white flex items-center gap-2 cursor-pointer text-xs md:text-sm hover:bg-[#364759] py-1 px-2 rounded-md w-full">
            <LuPencil /> Rename
          </div>
          <div className="text-[#D11919] flex items-center gap-2 cursor-pointer text-xs md:text-sm hover:bg-[#364759] py-1 px-2 rounded-md w-full">
            <RiDeleteBinLine /> Delete
          </div>
        </div>
      )}
    </>
  );
}

export default HistoryFeatures;
