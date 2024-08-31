const Button = ({ buttonActive, width, height, buttonText }) => {
  return (
    <button
      className={`w-[${width ? width : "80px"}] h-[${
        height ? height : "36px"
      }] ${
        buttonActive ? "bg-primary_blue" : "bg-neutralgray"
      } rounded-[4px] text-neutralwhite text-[14px] font-semibold`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
