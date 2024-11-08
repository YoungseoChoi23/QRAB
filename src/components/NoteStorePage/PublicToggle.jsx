import { useState } from "react";

const PublicToggle = ({ handleToggle, publicState, setPublicState }) => {
  return (
    <>
      <div
        onClick={handleToggle}
        className={`flex justify-center gap-1 w-[3.3125rem] h-6 p-1 rounded-[1.25rem] ${
          publicState
            ? "bg-secondary_lightblue text-white"
            : "bg-secondary_skyblue text-secondary_lightblue"
        } cursor-pointer`}
      >
        <div
          className={`flex items-center gap-1 transition-transform duration-300 ${
            publicState ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="text-xs">{publicState ? "공개" : "비밀"}</div>
          <div
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${
              publicState
                ? "bg-secondary_skyblue translate-x-1"
                : "bg-secondary_lightblue translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};
export default PublicToggle;
