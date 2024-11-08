import { useEffect, useState } from "react";
import { getUnsolvedQuiz } from "../../services/api/solveQuiz";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import QuizContainer from "../QuizLabPage/QuizContainer";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import noteIcon2 from "../../assets/storenotepage/note_icon2.svg";

const QuizSetComponent = () => {
  const [page, setPage] = useState(0);
  const { isBrightMode } = useIsBrightModeStore();
  const { id } = useParams(); //노트 아이디

  const {
    isError: isUnsolvedQuizDataError,
    data: unsolvedQuizData,
    error: unsolvedQuizDataError,
  } = useQuery({
    queryKey: ["UnsolvedQuizData", id, page],
    queryFn: () => getUnsolvedQuiz(id, page),
  });

  const QuizSetData = unsolvedQuizData.content;
  console.log(unsolvedQuizData);

  // const noteTitle = unsolvedQuizData.noteTitle;

  // useEffect(() => {
  //   const showUnsolvedQuiz = async () => {
  //     const res = await getUnsolvedQuiz(id, page);
  //     console.log(res);
  //   };
  //   showUnsolvedQuiz();
  // }, []);

  return (
    <>
      <div
        className={`flex justify-center w-full rounded-t-[2.5rem] h-screen bg-white pb-[2.5rem]`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-[8px]`}
        >
          <div className="flex gap-[16px] items-center">
            <div className="font-semibold text-[20px] text-neutralblack">
              {unsolvedQuizData.noteTitle}
            </div>
            {/* <div className="font-semibold text-[14px] text-gray_400">
              총 {QuizSetData.length}개
            </div> */}
          </div>
          <div className="font-mediumtext-[16px] text-gray_400">
            퀴즈 세트 {QuizSetData.length}개가 있어요!
          </div>

          <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
            {QuizSetData &&
              QuizSetData.map((it, index) => (
                <QuizContainer
                  key={index}
                  solveQuiz={true}
                  noteName={unsolvedQuizData.noteTitle}
                  noteId={it.id}
                  totalQuizNum={it.totalQuestions}
                  createdAt={it.createdAt}
                  noteIcon={noteIcon2}
                  quizsetId={it.quizSetId}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizSetComponent;
