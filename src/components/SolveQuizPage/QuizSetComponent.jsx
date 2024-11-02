import useIsBrightModeStore from "../../store/isBrightModeStore";
import QuizContainer from "../QuizLabPage/QuizContainer";

const QuizSetComponent = ({ noteId }) => {
  const { isBrightMode } = useIsBrightModeStore();

  return (
    <>
      <div
        className={`flex justify-center w-full rounded-t-[2.5rem] h-screen bg-white`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-[8px]`}
        >
          <div className="flex gap-[16px] items-center">
            <div className="font-semibold text-[20px] text-neutralblack">
              CSS_07 float
            </div>
            <div className="font-semibold text-[14px] text-gray_400">
              {/* 총 {noteData.totalNotesCount}개 */}
            </div>
          </div>
          <div className="font-mediumtext-[16px] text-gray_400">
            퀴즈 세트 n개가 있어요!
          </div>

          <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
            <QuizContainer solveQuiz={true} noteId={noteId} />
            <QuizContainer />
            <QuizContainer />
            <QuizContainer />
            <QuizContainer />
            <QuizContainer />
            <QuizContainer />
            <QuizContainer />
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizSetComponent;
