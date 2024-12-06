import React from "react";

function SmallModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/40 backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[40%] bg-[#010A17] rounded-md font-noto border border-white/10"
      >
        {children}
      </div>
    </div>
  );
}

export default SmallModal;
