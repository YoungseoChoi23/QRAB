const AddButton = ({ buttonImg, text, detailText }) => {
  return (
    <div className="w-[220px] h-[70px] rounded-[8px] border-[1px] border-gray_100">
      <div className="flex ml-[10px] mt-[11px] gap-[12px]">
        <img src={buttonImg} />
        <div className="flex flex-col justify-center gap-[4px]">
          <div className="font-semibold text-[14px] text-neutralblack">
            {text}
          </div>
          <div className="font-medium text-[12px] text-gray_300">
            {detailText}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddButton;
