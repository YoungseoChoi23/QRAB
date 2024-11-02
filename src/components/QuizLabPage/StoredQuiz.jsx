import { useState } from "react";
import CreateQuizBtn from "./Button/CreateQuizBtn";
import sorting_icon from "../../assets/quizlabpage/sorting_icon.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryTabs from "../Common/CategoryTabs";

const StoredQuiz = ({ categoryData, quizStorageURL }) => {
  const [sorting, setSorting] = useState("최신순");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNotes, setSelectedNotes] = useState([]); //카테고리 별로 필터링 된 노트들 (카테고리 탭 했을 때 화면에 보이는 노트들)
  const { isBrightMode } = useIsBrightModeStore();

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

  return (
    <div className="flex justify-center">
      <div
        className={`${
          isBrightMode ? "mt-[30px]" : "mt-[72px]"
        } w-[940px] flex flex-col gap-[8px]`}
      >
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold">퀴즈 보관소</div>
          <CreateQuizBtn quizStorageURL={quizStorageURL} />
        </div>
        <div className="text-[16px] font-medium text-gray_400">
          새로운 퀴즈를 생성하거나 오답을 다시 풀어보세요
        </div>
        <div className="flex justify-between">
          <CategoryTabs
            categoryData={categoryData}
            noteData={[]}
            setSelectedNotes={setSelectedNotes}
          />
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
