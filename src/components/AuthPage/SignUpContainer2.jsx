import { useEffect, useRef, useState } from "react";
import stagetwo from "../../assets/authpage/stage_two_active.svg";
import stageone from "../../assets/authpage/stage_one_only.svg";
import MajorInput from "./MajorInput";
import LiberalMajor from "./LiberalMajorTab";

const SignUpContainer2 = () => {
  const [tab, setTab] = useState("1");
  const [majorValue, setMajorValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  const handleTab = (tabNum) => {
    setTab(tabNum);
  };

  return (
    <div className="flex flex-col items-center overflow-y-auto">
      <div className="mt-[36.5px] w-[620px] h-[173px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
        <div className="flex flex-col items-center">
          <div className="flex gap-[4px] justify-center mt-[32px] mb-[32px]">
            <img className="" src={stageone} />
            <img className="animate-slideInRight" src={stagetwo} />
          </div>
          <div className="flex gap-[16px]">
            <MajorInput value={majorValue} text="주전공" autoFocus={true} />
            <MajorInput value={secondValue} text="부·복수전공" />
            <MajorInput value={thirdValue} text="부·복수전공" />
          </div>
        </div>
      </div>
      <div className=" w-screen h-[910px] bg-secondary_bg mt-[92px]">
        <div className="flex justify-center relative top-[-27px]">
          <div
            onClick={() => handleTab("1")}
            className={`cursor-pointer flex items-center justify-center ${
              tab === "1"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            }  w-[124px] h-[54px] rounded-l-[8px] bg-neutralwhite border-[1px] border-gray_100`}
          >
            인문·사회·자유
          </div>
          <div
            onClick={() => handleTab("2")}
            className={`cursor-pointer flex items-center justify-center  ${
              tab === "2"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            } w-[124px] h-[54px]  bg-neutralwhite border-[1px] border-gray_100`}
          >
            자연·공학·의약
          </div>
          <div
            onClick={() => handleTab("3")}
            className={`cursor-pointer flex items-center justify-center  ${
              tab === "3"
                ? "text-neutralwhite bg-primary_blue"
                : "text-gray_300"
            } w-[124px] h-[54px] rounded-r-[8px] bg-neutralwhite border-[1px] border-gray_100`}
          >
            예체능
          </div>
        </div>
        {tab === "1" ? (
          <LiberalMajor setMajorValue={setMajorValue} />
        ) : tab === "2" ? (
          <></>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default SignUpContainer2;
