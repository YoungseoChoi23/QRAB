import { useEffect, useState } from "react";
import Button from "../../Common/Button";
import close_icon from "../../../assets/common/close_icon.svg";
import useEditMajorModal from "../../../store/editMajorModal";
import MajorInput from "../../AuthPage/MajorInput";
import LiberalMajor from "../../AuthPage/LiberalMajorTab";
import {
  ArtsEducationMajor,
  ArtsMajor,
  EducationMajor,
  EngineeringMajor,
  HumanitiesMajor,
  MedicalMajor,
  naturalScienceMajor,
  ScienceEducationMajor,
  SocialMajor,
} from "../../../constants/MajorList";
import { putMajorEdit } from "../../../services/api/user";

const EditMajorModal = ({ setUpdatedMajor }) => {
  const { setEditMajorModal } = useEditMajorModal();
  const [majorValue, setMajorValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [tab, setTab] = useState("1");
  const [major, setMajor] = useState();

  const handleTab = (tabNum) => {
    setTab(tabNum);
  };

  const handleMajorSelection = (majorName) => {
    if (focusedInput === 1) {
      setMajorValue(majorName);
    } else if (focusedInput === 2) {
      setSecondValue(majorName);
    } else if (focusedInput === 3) {
      setThirdValue(majorName);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
            position:fixed;
            top:-${window.scrollY}px;
            overflow-y:scroll;
            width:100%;
           `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); //scrollY값이 없으면 기본값으로 0 사용, 10진수 사용
    };
  }, []);

  const handleCancelButton = () => {
    setEditMajorModal(false);
  };
  const handleEditButton = async () => {
    const editedMajor = {
      majorNames: [
        majorValue,
        secondValue && secondValue,
        thirdValue && thirdValue,
      ],
    };
    const res = await putMajorEdit(editedMajor);
    console.log(res);

    if (res) {
      setUpdatedMajor(editedMajor.majorNames);
      setEditMajorModal(false);
    }
  };

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.6) " }}
        className="flex justify-center items-center fixed inset-0 z-10"
      >
        <div className="relative w-[60rem] h-[40rem] bg-neutralwhite rounded-[1rem]">
          <button
            className="cursor-pointer absolute right-[-30px]"
            onClick={() => setEditMajorModal(false)}
          >
            <img src={close_icon} alt="close_button" />
          </button>
          <div className="flex flex-col  justify-center items-center ">
            <div className=" text-base font-semibold mt-8 text-neutralBlack ">
              학과 편집하기
            </div>
            <div className="flex justify-center flex-col">
              <div className=" flex justify-center gap-3 transform scale-75">
                <MajorInput
                  value={majorValue}
                  text="주전공"
                  autoFocus={true}
                  onFocus={() => setFocusedInput(1)}
                />
                <MajorInput
                  value={secondValue}
                  text="부·복수전공"
                  onFocus={() => setFocusedInput(2)}
                />
                <MajorInput
                  value={thirdValue}
                  text="부·복수전공"
                  onFocus={() => setFocusedInput(3)}
                />
              </div>
              <div
                className={` w-full ${
                  tab === "1"
                    ? "h-[909px]"
                    : tab === "2"
                    ? "h-[1108px]"
                    : "h-[600px]"
                } bg- mt-[92px]`}
              >
                <div className="relative top-[-80px] flex justify-center  transform scale-75">
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
                  <div className="relative top-[-120px] flex flex-col gap-[48px] h-[28rem] overflow-y-auto custom-scrollbar-skyblue transform scale-75">
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="인문계열(17)"
                      sortingList={HumanitiesMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="사회계열(18)"
                      sortingList={SocialMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="교육계열(8)"
                      sortingList={EducationMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                  </div>
                ) : tab === "2" ? (
                  <div className="relative top-[-120px] flex flex-col gap-[48px] h-[28rem] overflow-y-auto custom-scrollbar-skyblue transform scale-75">
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="교육계열(4)"
                      sortingList={ScienceEducationMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="공학계열(24)"
                      sortingList={EngineeringMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="자연계열(16)"
                      sortingList={naturalScienceMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="의약계열(10)"
                      sortingList={MedicalMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                  </div>
                ) : (
                  <div className="relative top-[-120px] flex flex-col gap-[48px] h-[28rem] overflow-y-auto custom-scrollbar-skyblue transform scale-75">
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="교육계열(8)"
                      sortingList={ArtsEducationMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                    <LiberalMajor
                      setMajorValue={handleMajorSelection}
                      sortingName="예체능계열(16)"
                      sortingList={ArtsMajor}
                      setMajor={setMajor}
                      major={major}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-[2rem] flex gap-3">
              <Button
                type="secondary"
                handleButton={handleCancelButton}
                width="6rem"
                height="2.5rem"
                buttonText="취소"
              />
              <Button
                buttonActive={true}
                handleButton={handleEditButton}
                width="6rem"
                height="2.5rem"
                buttonText="편집"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditMajorModal;
