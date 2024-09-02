const Button = ({ buttonActive, width, height, buttonText }) => {
  return (
    <button
      className={`w-[${width}] h-[${height}] ${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
