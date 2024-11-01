import { useEffect, useState } from "react";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import QuizContainer from "./QuizContainer";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import CreateQuizBtn from "./Button/CreateQuizBtn";
import sorting_icon from "../../assets/quizlabpage/sorting_icon.svg";
import check from "../../assets/storenotepage/check.svg";
import { getStoredQuiz } from "../../services/api/quizLab";
import { useQuery } from "@tanstack/react-query";

const StoredQuiz = ({ categoryData }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [sorting, setSorting] = useState("최신순");
  const [isHovered, setIsHovered] = useState(false);
  const [selectTotalTab, setSelectTotalTab] = useState(true);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const [editButtonHovered, setEditButtonHovered] = useState(false);
  const [selectTotalSecondTab, setSelectTotalSecondTab] = useState(true);
  const [secondCategory, setSecondCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState([]);
  // const [storedQuizData, setStoredQuizData] = useState([]);
  // const {
  //   data: storedQuizData = { content: [] },
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["storedQuizData", page],
  //   queryFn: () => getStoredQuiz(page),
  // });

  // useEffect(() => {
  //   const getStoredQuizData = async () => {
  //     const res = await getStoredQuiz(0);
  //     console.log(res);
  //     setStoredQuizData(res);
  //   };
  //   getStoredQuizData();
  // }, []);

  const handleSorting = () => {
    if (sorting === "최신순") setSorting("오래된순");
    else setSorting("최신순");
  };
  const handleTabClick = (id) => {
    setSelectTotalTab(false);
    setSelectTab(id);
  };

  const handleTotalTabClick = () => {
    setSelectTotalTab(true);
    setSelectTab();
    setSelectSecondTab();
    setSecondCategory([]);
  };
  return (
    <div className="flex justify-center">
      <div className="mt-[30px] w-[940px] flex flex-col gap-[8px]">
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold">퀴즈 보관소</div>
          <CreateQuizBtn />
        </div>
        <div className="text-[16px] font-medium text-gray_400">
          새로운 퀴즈를 생성하거나 오답을 다시 풀어보세요
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[8px] mt-[16px] w-[800px] scrollbarhidden">
            <div
              onClick={handleTotalTabClick}
              className={`${
                selectTotalTab &&
                "text-primary_blue border-[1px] border-primary_blue border"
              }flex justify-center cursor-pointer flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[37px] pl-[16px] pr-[16px] pt-[10px] pb-[10px] hover:text-primary_blue hover:border-[1px] hover:border-primary_blue`}
            >
              {selectTotalTab && (
                <img src={check} alt="Selected" className="mr-[8px]" />
              )}
              전체
            </div>
            {categoryData.map((it) => (
              <FirstCategoryTab
                firstTab={categoryData}
                tabName={it.name}
                index={it.id}
                handleTabClick={handleTabClick}
                selectTab={selectTab}
              />
            ))}
          </div>
          <div
            onClick={handleSorting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`cursor-pointer flex items-center gap-[8px]`}
          >
            <div>
              <img src={sorting_icon} />
            </div>
            <div
              className={`text-[14px] font-medium text-gray_400 ${
                isHovered ? "underline" : ""
              }`}
            >
              {sorting}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
          {/* {storedQuizData.length > 0 ? (
            storedQuizData.content.map((it) => (
              <QuizContainer
                key={it.id} // 각 퀴즈에 고유한 key 추가
                noteIcon={noteIcon1}
                noteName={it.noteTitle}
                totalQuizNum={it.totalQuestions}
                majorityNum="8"
                result="correct"
              />
            ))
          ) : (
            <div className="text-center col-span-3">
              저장된 퀴즈가 없습니다.
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default StoredQuiz;
