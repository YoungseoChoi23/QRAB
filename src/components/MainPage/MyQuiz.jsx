import QuizContainer from "../QuizLabPage/QuizContainer";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import RecentQuizContainer from "./RecentQuizContainer";

const quizzes = [
  {
    id: 1,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
  {
    id: 2,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
  {
    id: 3,
    category: ["TISTORY", "프론트엔드", "Java Script"],
    description: "컴포넌트 트리에 데이터 공급",
    status: "completed" | "incomplete",
    total: 17,
  },
];

const MyQuiz = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2 text-xl font-semibold">나의 퀴즈</div>
        <div className="mb-6 text-base font-medium text-gray_499">
          최근 생성한 퀴즈를 풀이해 보세요
        </div>
        <div className="flex gap-5">
          {quizzes.map((it, index) => (
            <>
              <RecentQuizContainer
                noteName={it.description}
                noteId={it.noteId}
                totalQuizNum={it.total}
                noteContent="JavaScript Sec05_4 React에서 LifeCycle 제어하는 방법 use effect하는 방법에 대해서 내"
                noteIcon={noteIcon1}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default MyQuiz;
