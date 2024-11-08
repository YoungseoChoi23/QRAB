import { useState } from "react";

const OnOffToggle = ({ handleToggle, publicState }) => {
  return (
    <>
      <div
        onClick={handleToggle}
        className={`flex justify-center items-centerx w-[3.5rem] h-6 p-1 rounded-[1.25rem] ${
          publicState
            ? "bg-secondary_skyblue text-primary_blue"
            : "bg-gray_100 text-gray_300"
        } cursor-pointer `}
      >
        <div
          className={`flex items-center gap-1 transition-transform duration-300 ${
            publicState ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="text-xs">{publicState ? "ON" : "OFF"}</div>
          <div
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${
              publicState
                ? "bg-primary_blue translate-x-1"
                : "bg-gray_300 translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};
export default OnOffToggle;
