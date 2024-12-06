import Image from "next/image";
import React from "react";

const LogoWithText = () => {
  return (
    <div className="flex text-2xl text-standard justify-center gap-2 items-center">
      <Image
        src={"/images/appLogo.png"}
        width={100}
        height={50}
        className="w-[30px] h-[30px]"
      />
      <div>OLYMPUS AI</div>
    </div>
  );
};

export default LogoWithText;
