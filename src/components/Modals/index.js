import React from "react";

function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/80 backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[60%] h-[500px] bg-[#010A17] rounded-md font-noto border border-white/10"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
