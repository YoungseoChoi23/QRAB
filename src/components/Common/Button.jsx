const Button = ({
  type = "primary",
  buttonActive = true,
  width,
  height,
  buttonText,
  handleButton,
  disabled = false,
}) => {
  return (
    <button
      disabled={!buttonActive}
      onClick={handleButton}
      style={{ width: width, height: height }}
      className={`${
        buttonActive
          ? type === "primary"
            ? "bg-primary_blue text-neutralwhite"
            : "bg-white text-gray_300 border-[1px] border-gray_100"
          : "bg-neutralgray text-neutralwhite"
      } rounded-[4px]  text-[14px] font-semibold ${
        !buttonActive ? "cursor-not-allowed" : ""
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
