const DoubleCheckButton = ({ buttonActive, buttonText, handleDoubleCheck }) => {
  return (
    <button
      disabled={!buttonActive}
      onClick={handleDoubleCheck}
      className={`w-[80px] h-[36px] ${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray cursor-not-allowed"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold`}
    >
      {buttonText}
    </button>
  );
};
export default DoubleCheckButton;
