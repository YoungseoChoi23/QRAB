const Input = ({ width = "240px" }) => {
  return (
    <input
      className="border-[1px] border-gray_100 p-[10px] w-[240px] h-[40px] rounded-[7px]"
      style={{ width }}
    />
  );
};
export default Input;
