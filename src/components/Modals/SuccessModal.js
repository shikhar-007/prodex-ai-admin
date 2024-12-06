import { useDispatch, useSelector } from "react-redux";
import SmallModal from "./smallModal";
import { IoMdClose } from "react-icons/io";
import { setOpenSuccessModal } from "@/services/GlobalSlice";
import LogoWithText from "../LogoWithText";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { ROUTES } from "@/utils/routes";

function SuccessModal() {
  const { openSuccessModal } = useSelector((state) => state.global);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpenSuccessModal(false));
    router.push(ROUTES.HOME);
  };
  return (
    <SmallModal open={openSuccessModal}>
      <div className="relative w-full h-full text-standard pb-14 overflow-hidden">
        <div className="p-5 w-full">
          <div className="w-full flex items-center justify-end ">
            <IoMdClose
              className="text-xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="flex flex-col gap-10 items-center">
            <LogoWithText />
            <div className="flex flex-col gap-4 items-center">
              <Image src={"/images/success.svg"} width={70} height={70} />
              <div className="font-bold text-2xl text-center">
                <div>Two-Factor</div>
                <div>Authentication Verified</div>
              </div>
            </div>

            <Button
              className="w-[80%] z-10"
              variant="default"
              size="lg"
              onClick={handleClose}
            >
              close
            </Button>
          </div>
        </div>
        <img
          className="absolute bottom-0 bg-blend-darken bg-[#010A17]/90"
          src={"/images/modalBg.png"}
          width={180}
          height={180}
        />
      </div>
    </SmallModal>
  );
}

export default SuccessModal;
