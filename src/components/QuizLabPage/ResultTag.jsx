const ResultTag = ({ hover, result, num, solveQuiz = false }) => {
  return (
    <div
      className={`flex justify-center items-center w-[68px] h-[22px] rounded-[4px] text-[12px] font-medium ${
        hover
          ? "bg-gray_400 text-gray_100"
          : solveQuiz
          ? "bg-gray_100 text-gray_400"
          : result === "correct"
          ? "bg-secondary_skyblue text-primary_blue"
          : "bg-secondary_red text-neutralred"
      }`}
    >
      {solveQuiz
        ? "미풀이"
        : result === "correct"
        ? `정답 ${num}문제`
        : `오답 ${num}문제`}
    </div>
  );
};
export default ResultTag;
