import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";
import SideBar from "@/components/LayoutComponents/SideBar";
import { setAuthToken } from "@/services/GlobalSlice";
import useOutsideClick from "@/utils/Common";
import { getCookie } from "cookies-next";
import React, { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

function AdminLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  const divRef = useRef(null);

  useOutsideClick(divRef, () => setOpenMenu(false));
  return (
    <div className="w-full flex">
      <Toaster />
      <div
        ref={divRef}
        className={`md:block ${
          openMenu ? "visible transition-all h-screen" : "hidden"
        } fixed md:static z-50`}
      >
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      <div
        className={`min-h-screen w-full flex flex-col bg-appLayoutBg ${
          openMenu ? "blur-[8px] md:blur-0" : ""
        } bg-cover `}
      >
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="h-[2px] header-gradient w-full"></div>
        <div className="flex-grow p-5 font-noto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
