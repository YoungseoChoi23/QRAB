import { useState } from "react";
import Button from "../Common/Button";
import QuizButtonComponent from "./Button/QuizButtonComponent";
import NoteTitleComponent from "./NoteTitleComponent";
import QuizComponent from "./QuizComponent";
import { useNavigate } from "react-router-dom";

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
const SolveQuizComponent = () => {
  const navigate = useNavigate();

  // 각 퀴즈가 답변되었는지 상태 관리
  const [answeredQuizzes, setAnsweredQuizzes] = useState(
    new Array(quizSet.length).fill(false)
  );

  // 답변 상태 업데이트 함수
  const handleQuizAnswered = (index, isAnswered) => {
    const updatedAnsweredQuizzes = [...answeredQuizzes];
    updatedAnsweredQuizzes[index] = isAnswered;
    setAnsweredQuizzes(updatedAnsweredQuizzes);
  };

  // 모든 퀴즈가 답변되었는지 확인
  const allAnswered = answeredQuizzes.every((answered) => answered);

  const handleMarking = () => {
    navigate("/solvequiz/quizset/13/marked");
  };

  return (
    <>
      <div className="flex justify-center w-full h-auto bg-neutralwhite">
        <div className="flex flex-col mt-10 w-[48.75rem] gap-2">
          <div className="flex items-center gap-6">
            <div className="text-xl font-semibold text-neutralBlack">
              퀴즈 풀기
            </div>
            <div className="text-sm font-semibold text-gray_400">총 3개</div>
          </div>
          <div className="text-base text-gray_400 text-medium">
            생성된 퀴즈를 풀이하고 북마크에 저장할 수 있어요
          </div>
          <div className="mt-2 mb-3">
            <NoteTitleComponent noteTitle="JavaScript Sec05_12 컴포넌트 트리에 데이터 공급(Context API)" />
          </div>
          <div className="flex flex-col gap-6">
            {quizSet.map((it, index) => (
              <QuizComponent
                key={index}
                QuizNum={it.id}
                difficultyLevel={it.difficulty}
                question={it.question}
                multipleChoice={it.multipleChoice}
                onAnswered={(isAnswered) =>
                  handleQuizAnswered(index, isAnswered)
                }
              />
            ))}
          </div>
          <div className="flex justify-center my-16">
            <QuizButtonComponent
              text="채점하기"
              disabled={!allAnswered}
              onClick={handleMarking}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SolveQuizComponent;
