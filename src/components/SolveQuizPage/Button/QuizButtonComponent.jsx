const QuizButtonComponent = ({ text, disabled }) => {
  return (
    <>
      <button
        className={`px-10 py-3 rounded-[0.5rem] ${
          disabled ? "bg-gray_200" : "bg-primary_blue"
        } text-base font-semibold text-white`}
      >
        {text}
      </button>
    </>
  );
};
export default QuizButtonComponent;
