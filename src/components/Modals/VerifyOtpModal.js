import React, { useEffect, useState } from "react";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";
import OTPInput from "react-otp-input";

function VerifyOtpModal({showModal, setShowModal}) {
  const [otp, setOtp] = useState("");

  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const handleResendCode = () => {
    setTimer(60);
    setIsTimerActive(true);
  };

  return (
    <SmallModal open={showModal}>
      <div className="w-full h-full bg-[url('/images/modalBg.png')] bg-left-bottom bg-no-repeat bg-blend-darken bg-[#010A17]/90">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-end text-white">
            <IoMdClose
              className="text-xl cursor-pointer"
                onClick={() => setShowModal(false)}
            />
          </div>
          <form className="space-y-3 pt-8 px-5">
            <div className="w-full text-center space-y-2">
              <h1 className="font-parsi font-[700] text-white text-xl">
                Confirmation Message
              </h1>
              <p className="text-white/60 text-xs">
                A password reset link has been sent to your email address.
                Please check your inbox (and spam folder, if necessary) for
                further instructions.
              </p>
            </div>
            <div className="py-10 w-full">
              <div className="w-full flex justify-center">
                <OTPInput
                  containerStyle={"otp-container"}
                  inputStyle={"input-container"}
                  value={otp}
                  onChange={(e) => {
                    if (/^\d*$/.test(e)) {
                      setOtp(e);
                    }
                  }}
                  numInputs={6}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div className="pt-10 text-center space-y-2">
                <button className="w-full py-2 text-white/70 font-parsi bg-buttonBg rounded-md">
                  verify
                </button>
                <p className="text-white/60 text-xs">
                  {isTimerActive ? (
                    `Send code again in ${String(
                      Math.floor(timer / 60)
                    ).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`
                  ) : (
                    <span
                      onClick={handleResendCode}
                      className="text-blue-400 cursor-pointer"
                    >
                      Resend code
                    </span>
                  )}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SmallModal>
  );
}

export default VerifyOtpModal;
