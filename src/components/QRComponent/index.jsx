import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Button } from "../ui/button";
import { useLazySetup2faQuery } from "@/services/admin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setVerifyOtp } from "@/services/GlobalSlice";

const QRComponent = ({ setStatus, initialValue }) => {
  const [setup2fa] = useLazySetup2faQuery();
  const dispatch = useDispatch();
  const { qrValue } = useSelector((state) => state.global);
  const [url, setUrl] = useState("");
  const handler = async () => {
    dispatch(setVerifyOtp(true));
    setStatus({ initialValue, otpStatus: true });
  };
  console.log("qrValue is here", qrValue);
  useEffect(() => {
    QRCode.toDataURL(qrValue?.value)
      .then((url) => {
        console.log(url);
        setUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [QRCode, qrValue]);
  const handleBack = () => {
    setStatus({ ...initialValue, enable2FAStatus: true });
  };
  return (
    <>
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-lg font-bold">Scan the QR Code</h2>
        <p className="text-sm text-gray-300">
          Use your preferred authentication app (e.g., Google Authenticator or
          Authy) to scan the QR code below. This will link your account to the
          app and enable Two-Factor Authentication.
        </p>
      </div>
      <img src={url} className="mx-auto w-[150px] h-[150px]" alt="qr-image" />
      {/* <QRCodeSVG value={qrValue?.value} />, */}
      {/* <div className="flex gap-5">
        <div>Secret Key :</div>
        <div>{qrValue?.label}</div>
      </div> */}
      <div className="flex gap-2  w-full text-center mt-4">
        <Button
          className="w-full"
          variant="default"
          size="lg"
          onClick={handler}
        >
          Next
        </Button>
        <Button
          className="w-full"
          variant="outline"
          size="lg"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default QRComponent;
