const Commentary = ({ quizNum, correctNum, correctAnswer, explanation }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-[48.75rem] h-auto p-4 rounded-[0.5rem] bg-secondary_bg">
        <div className="text-base font-semibold text-neutralBlack">
          {quizNum}번 해설
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="text-base font-medium text-gray_400">정답</div>
            <div className="text-base font-semibold text-primary_blue">
              {correctNum + 1}번. {correctAnswer}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-base font-medium text-gray_400">풀이</div>
            <div className="w-[42rem] text-wrap text-base font-medium text-neutralBlack">
              {explanation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Commentary;
