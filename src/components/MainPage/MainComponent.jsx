import constellation from "../../assets/main/stars/november/full.svg";
import down_arrow from "../../assets/main/down_arrow.svg";
import december from "../../assets/main/stars/december/default.svg";
import MyNote from "./MyNote";
import MyQuiz from "./MyQuiz";
import SolvedQuizComponent from "./SolvedQuizComponent";
import StudyRecordingBox from "./StudyRecordingBox";
import RankingBox from "./RankingBox";
import { useNavigate } from "react-router-dom";
import right_arrow from "../../assets/analysis/right_arrow.svg";

const MainComponent = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("accssToken") ? true : false;

  return (
    <>
      <div className="relative">
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="mb-4 text-2xl font-semibold text-white">
              {isLogin
                ? "학습을 통해 별자리를 완성해 보세요!"
                : "회원가입 후 나만의 별자리를 만들어 보세요! "}
            </div>
            <div className="mb-[6rem] text-base font-medium text-white">
              퀴즈를 풀면 별이 밝혀집니다
            </div>

            <div className=" w-full mb-[6rem]" style={{ maxWidth: "100%" }}>
              <div className="w-full relative " style={{ height: "auto" }}>
                <img
                  src={constellation}
                  style={{ width: "100%", height: "auto" }}
                  alt="constellation"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-center gap-2 w-[8.4375rem] h-[2.125rem] px-3 mb-[3.5rem] py-[0.38rem] rounded-[1.5rem] bg-[#494949]">
                <div className="text-base font-medium text-white">
                  나의 노트보기
                </div>
                <img src={down_arrow} />
              </div>
            )}
            {isLogin && (
              <div className="absolute top-[5rem] right-[-25rem]">
                <div className="flex flex-col gap-6">
                  <StudyRecordingBox />
                  <RankingBox />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-1/4">
          <img src={december} />
        </div>
      </div>
      {isLogin && (
        <>
          <div className="flex flex-col items-center gap-12 w-full h-[45.25rem] pt-[2.5rem] bg-secondary_bg">
            <MyNote />
            <MyQuiz />
          </div>
        </>
      )}
      {isLogin && (
        <div className="flex flex-col items-center gap-8 w-full h-screen px-10 pt-[2.5rem] bg-white">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold text-neutralBlack">
              최근 틀린 퀴즈
            </div>
            <div className="text-base font-medium text-gray_400">
              틀린 문제를 확인하고 다시 도전해 보세요!
            </div>
            <div className="flex flex-col gap-8 mt-6">
              <SolvedQuizComponent />
            </div>
          </div>
        </div>
      )}
      {!isLogin && (
        <div className="relative flex justify-center mb-[11.25rem]">
          <button
            onClick={() => navigate("/signup")}
            className="flex justify-center items-center gap-6 w-[34rem] h-18 px-[3em] py-6 rounded-[2.5rem] bg-primary_blue text-2xl font-medium text-white"
          >
            회원가입 하러 가기
            <img src={right_arrow} />
          </button>
        </div>
      )}
    </>
  );
};
export default MainComponent;
