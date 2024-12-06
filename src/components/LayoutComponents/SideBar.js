"use client";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import ShowHistory from "../ShowHistory";
import SettingIcon from "../../../public/svg/SettingIcon";
import LogoutIcon from "../../../public/svg/LogoutIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setToken, toggleSection } from "@/services/GlobalSlice";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

export default function SideBar() {
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    deleteCookie("authToken");
    deleteCookie("userDetails");
    dispatch(setAuthToken(""));
    dispatch(setToken(""));
    router.push(ROUTES.LOGIN);
    // dispatch(setToken(""))
  };
  return (
    <div className="w-full min-w-[260px] h-full bg-sidebarBg flex flex-col justify-between">
      <div className="pt-4 flex flex-col gap-9">
        <img className=" px-3" src="/images/logo.png" />

        <div className=" w-full  flex flex-col gap-4 ">
          <div
            className={` px-4 py-2 flex gap-4 items-center hover:bg-[#FFFFFF0D] ${
              pathName === ROUTES.HOME && "bg-[#FFFFFF0D]"
            } cursor-pointer`}
            onClick={() => {
              router.push(ROUTES.HOME);
            }}
          >
            {pathName === ROUTES.HOME ? (
              <Image
                src={"/svg/user_blue_icon.svg"}
                width={24}
                height={24}
                alt="User Icon"
              />
            ) : (
              <Image
                src={"/svg/user_icon.svg"}
                width={24}
                height={24}
                alt="User Icon"
              />
            )}
            <span className=" text-white font-parsi text-[14px] font-bold leading-[13px]">
              User Management
            </span>
          </div>

          <div
            className={` px-4 py-2 flex gap-4 items-center hover:bg-[#FFFFFF0D] ${
              pathName === ROUTES.CONTENT_MANAGEMENT && "bg-[#FFFFFF0D]"
            } cursor-pointer`}
            onClick={() => {
              router.push(ROUTES.CONTENT_MANAGEMENT);
            }}
          >
            {pathName === ROUTES.CONTENT_MANAGEMENT ? (
              <Image
                src={"/svg/content_blue_icon.svg"}
                width={24}
                height={24}
                alt="Content Icon"
              />
            ) : (
              <Image
                src={"/svg/content_icon.svg"}
                width={24}
                height={24}
                alt="Content Icon"
              />
            )}
            <span className=" text-white font-parsi text-[14px] font-bold leading-[13px]">
              Content Management
            </span>
          </div>

          <div
            className={` px-4 py-2 flex gap-4 items-center hover:bg-[#FFFFFF0D] ${
              pathName === ROUTES.API_MANAGEMENT && "bg-[#FFFFFF0D]"
            } cursor-pointer`}
            onClick={() => {
              router.push(ROUTES.API_MANAGEMENT);
            }}
          >
            {pathName === ROUTES.API_MANAGEMENT ? (
              <Image
                src={"/svg/api_blue_icon.svg"}
                width={24}
                height={24}
                alt="API icon"
              />
            ) : (
              <Image
                src={"/svg/api_icon.svg"}
                width={24}
                height={24}
                alt="API icon"
              />
            )}
            <span className=" text-white font-parsi text-[14px] font-bold leading-[13px]">
              API Management
            </span>
          </div>

          <div
            className={` px-4 py-2 flex gap-4 items-center hover:bg-[#FFFFFF0D] ${
              pathName === ROUTES.AI_QUERY_MANAGEMENT && "bg-[#FFFFFF0D]"
            } cursor-pointer`}
            onClick={() => {
              router.push(ROUTES.AI_QUERY_MANAGEMENT);
            }}
          >
            {pathName === ROUTES.AI_QUERY_MANAGEMENT ? (
              <Image
                src={"/svg/ai_blue_icon.svg"}
                width={24}
                height={24}
                alt="AI icon"
              />
            ) : (
              <Image
                src={"/svg/ai_icon.svg"}
                width={24}
                height={24}
                alt="AI icon"
              />
            )}
            <span className=" text-white font-parsi text-[14px] font-bold leading-[13px]">
              AI Query System Management
            </span>
          </div>

          <div
            className={` px-4 py-2 flex gap-4 items-center hover:bg-[#FFFFFF0D] ${
              pathName === ROUTES.ANALYTICS && "bg-[#FFFFFF0D]"
            } cursor-pointer`}
            onClick={() => {
              router.push(ROUTES.ANALYTICS);
            }}
          >
            {pathName === ROUTES.ANALYTICS ? (
              <Image
                src={"/svg/analytics_blue_icon.svg"}
                width={24}
                height={24}
                alt="Analytics icon"
              />
            ) : (
              <Image
                src={"/svg/analytics_icon.svg"}
                width={24}
                height={24}
                alt="Analytics icon"
              />
            )}
            <span className=" text-white font-parsi text-[14px] font-bold leading-[13px]">
              Analytics and Reporting
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/sidebarFooterBg.png')] font-parsi h-60 bg-cover bg-blend-darken flex flex-col justify-end items-center p-4 space-y-3 opacity-50">
        <div className="text-white flex gap-2 cursor-pointer w-fit">
          <SettingIcon /> Settings
        </div>
        <button
          className="flex items-center justify-center w-full border border-[#3D3D3D] gap-2 rounded-md py-1 bg-[#072657] text-white opacity-90"
          onClick={handleLogout}
        >
          <LogoutIcon /> logout
        </button>
      </div>
    </div>
  );
}
