import { useLocation } from "react-router-dom";
import MarkedResultComponent from "./MarkedResultComponent";
import QuizComponent from "./QuizComponent";
import Commentary from "./Commentary";
import QuizButtonComponent from "./Button/QuizButtonComponent";
import MarkedQuizComponent from "./MarkedQuizComponent";

const quizSet = [
  {
    id: 1,
    difficulty: 1,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
  {
    id: 2,
    difficulty: 3,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
  {
    id: 3,
    difficulty: 2,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
  {
    id: 4,
    difficulty: 1,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
  {
    id: 5,
    difficulty: 3,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
  {
    id: 6,
    difficulty: 2,
    question:
      "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
    multipleChoice: [
      { id: 1, name: "dispatch 함수" },
      { id: 2, name: "컴포넌트의 상태" },
      { id: 3, name: "action 객체" },
      { id: 4, name: "reducer 함수" },
    ],
  },
];

const MarkingComponent = () => {
  const location = useLocation();
  const resultData = location.state?.resultData;
  return (
    <>
      <div className="flex justify-center w-full h-auto bg-neutralwhite">
        <div className="flex flex-col mt-10 w-[48.75rem] gap-2">
          <div className="flex items-center gap-6">
            <div className="text-xl font-semibold text-neutralBlack">
              채점 결과
            </div>
            <div className="text-sm font-semibold text-gray_400">총 3개</div>
          </div>
          <div className="text-base text-gray_400 text-medium">
            틀린 문제를 북마크에 저장하고 오답을 다시 풀어보세요!{" "}
          </div>
          <div className="mt-2 mb-3">
            <MarkedResultComponent resultData={resultData} />
          </div>
          <div className="flex flex-col gap-6">
            {quizSet.map((it, index) => (
              <div className="flex flex-col gap-2">
                <MarkedQuizComponent
                  key={index}
                  QuizNum={it.id}
                  difficultyLevel={it.difficulty}
                  question={it.question}
                  multipleChoice={it.multipleChoice}
                />
                <Commentary />
              </div>
            ))}
          </div>
          <div className="flex justify-center my-16">
            <QuizButtonComponent text="오답 다시 풀기" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkingComponent;
