import star_1 from "../../assets/solvequizpage/one_star.svg";
import star_2 from "../../assets/solvequizpage/two_star.svg";
import star_3 from "../../assets/solvequizpage/three_star.svg";
import empty_check from "../../assets/solvequizpage/empty_check.svg";
import check from "../../assets/solvequizpage/checked.svg";
import bookmark_checked from "../../assets/solvequizpage/bookmark_checked.svg";
import bookmark_not_checked from "../../assets/solvequizpage/bookmark_not_checked.svg";

import { useState } from "react";

const QuizComponent = ({
  QuizNum = "1",
  difficultyLevel = 2,
  question = "useReducer Hook을 사용할 때 반환하는 배열의 0번째 인덱스는 무엇을 나타내나요?",
  multipleChoice = [
    { id: 1, name: "dispatch 함수" },
    { id: 2, name: "컴포넌트의 상태" },
    { id: 3, name: "action 객체" },
    { id: 4, name: "reducer 함수" },
  ],
  onAnswered,
}) => {
  const [checked, setChecked] = useState(null);
  const [bookmark, setBookmark] = useState(false);

  const handleClick = (id) => {
    setChecked(id);
    onAnswered(id);
  };

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <>
      <div className="flex flex-col w-[48.75rem] pb-6 border-b-[0.0625rem] border-gray_100">
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold text-neutralBlack">
            {QuizNum}번
          </div>
          {difficultyLevel === 1 && <img src={star_1} />}
          {difficultyLevel === 2 && <img src={star_2} />}
          {difficultyLevel === 3 && <img src={star_3} />}
        </div>
        <div className="mt-[0.73rem] mb-6 text-base font-medium text-neutralBlack">
          {question}
        </div>
        <div className="flex flex-col gap-3">
          {multipleChoice.map((it, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="flex gap-[0.94rem]"
            >
              {checked === index ? (
                <img src={check} />
              ) : (
                <img className="cursor-pointer" src={empty_check} />
              )}
              <div className={`text-base font-medium text-gray_400`}>{it}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default QuizComponent;
