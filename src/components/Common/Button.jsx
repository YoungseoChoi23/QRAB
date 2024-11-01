const Button = ({
  buttonActive,
  width,
  height,
  buttonText,
  handleButton,
  cancleBtn,
}) => {
  return (
    <button
      onClick={handleButton}
      style={{ width: width, height: height }}
      className={`${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
