const Button = ({
  buttonActive,
  width,
  height,
  buttonText,
  handleButton,
  cancleBtn,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleButton}
      style={{ width: width, height: height }}
      className={`${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold ${
        disabled ? "cursor-not-allowed" : ""
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
