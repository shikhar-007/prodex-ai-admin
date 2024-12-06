import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import EditProfileModal from "./Modals/EditProfileModal";

function ProfileManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex smxx:flex-row flex-col gap-2 items-center justify-start smxx:justify-between font-parsi">
        <h1 className="smxx:text-xl text-base text-white">
          Profile Management
        </h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center justify-center gap-2 py-2 px-6 smxx:text-sm text-xs text-white bg-buttonBg rounded-md"
        >
          <LuPencil />
          Edit Profile
        </button>
      </div>
      <div className="space-y-4 py-2">
        <div className="space-y-2">
          <label className="text-xs text-white/60">Name</label>
          <p className="text-white text-xs">Alexa Joe</p>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-white/60">Email Id</label>
          <p className="text-white text-xs">Alexa_joe@gmail.com</p>
        </div>
      </div>
      <EditProfileModal isOpen={isDialogOpen} onClose={setIsDialogOpen} />
    </div>
  );
}

export default ProfileManagement;
