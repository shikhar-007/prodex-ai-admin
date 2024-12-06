import React, { useState } from "react";
import { ProfileModal } from "../Modals/ProfileModal";
import { RiMenu2Fill } from "react-icons/ri";

function Header({ openMenu, setOpenMenu }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between md:justify-end h-[64px] px-10 ">
      <div className="md:hidden block">
        <RiMenu2Fill
          className="text-white text-xl cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <div className="md:hidden block">
        <img src="/images/logo.png" className="w-28" />
      </div>
      <div
        onClick={() => setIsDialogOpen(true)}
        className="rounded-full bg-black md:text-base text-xs text-white h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex items-center cursor-pointer justify-center font-[700] border border-[#2b87f6]"
      >
        <h1>RK</h1>
      </div>
      <ProfileModal isOpen={isDialogOpen} onClose={setIsDialogOpen} />
    </div>
  );
}

export default Header;
