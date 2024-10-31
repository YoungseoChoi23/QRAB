const SnackBar = ({ text }) => {
  return (
    <div className="flex justify-center items-center bg-[#232323b3] text-[20px] fixed z-[10px] w-[460px] h-[44px]">
      {text}
    </div>
  );
};
export default SnackBar;
