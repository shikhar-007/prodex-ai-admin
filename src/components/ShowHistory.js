import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import HistoryFeatures from "./HistoryFeatures";

function ShowHistory({ val }) {
  const [openFeature, setOpenFeature] = useState(false);
  return (
    <div className="bg-[#020E1D] rounded-md p-2 text-white flex items-center justify-between relative">
      <h1 className="text-xs">{val.history}</h1>
      <BsThreeDots
        className="cursor-pointer"
        onClick={() => setOpenFeature(true)}
      />
      <HistoryFeatures
        openFeature={openFeature}
        setOpenFeature={setOpenFeature}
      />
    </div>
  );
}

export default ShowHistory;
