import React, { useState } from "react";
import ChangePasswordModal from "./Modals/ChangePasswordModal";

function AccountSetting() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex items-center">
          <h1 className="smxx:text-xl text-sm text-white font-parsi">
            Account Settings
          </h1>
        </div>
        <div className="smxx:w-[350px] w-full">
          <p className="text-xs text-white/60 py-2">
            Manage your account's security settings to keep your information
            safe and stay in control of your data.
          </p>
        </div>
        <div className="w-full my-1">
          <div className="w-full flex items-center justify-between">
            <h1 className="smxx:text-sm text-xs text-white">Change Password</h1>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="flex font-parsi items-center justify-center gap-2 py-1 px-6 text-sm text-white/60 border border-[#299bf4]/60 rounded-md"
            >
              Change
            </button>
          </div>
          <p className="text-xs text-white/60 smxx:w-[220px] w-full">
            Lorem ipsum dolor sit amet consectetur. Nam ac consectetur mauris
            non.
          </p>
        </div>
        <div className="w-full my-1">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-sm text-white">Delete Account</h1>
            <button className="flex font-parsi items-center justify-center gap-2 py-1 px-6 text-sm text-[#D11919]/60 border border-[#D11919]/60 rounded-md">
              Delete
            </button>
          </div>
          <p className="text-xs text-white/60">
            Permanently Remove Your Account and Data
          </p>
        </div>
        <div className="my-2">
          <h1 className="text-sm text-white">
            If you decide to delete your account, please note the following:
          </h1>
        </div>
        <div className="w-full my-1 space-y-1">
          <h1 className="text-sm text-white">Data Removal</h1>
          <p className="text-xs text-white/60">
            Your account information, chat history, and personal data will be
            permanently deleted from our servers.
          </p>
        </div>
        <div className="w-full my-1 space-y-1">
          <h1 className="text-sm text-white">Irreversible Action</h1>
          <p className="text-xs text-white/60">
            Once deleted, this action cannot be undone, and we will not be able
            to recover any of your data.
          </p>
        </div>
        <p className="text-white text-[10px] py-4">
          <span className="text-[#2C83F6]">
            By clicking "Delete My Account,"
          </span>{" "}
          you agree to the permanent removal of all associated data in
          accordance with our [Data Handling & Privacy Policy].
        </p>
      </div>
      <ChangePasswordModal isOpen={isDialogOpen} onClose={setIsDialogOpen} />
    </div>
  );
}

export default AccountSetting;
