const StatisticBox = ({ boxName, boxSubText, StatisticResult }) => {
  return (
    <>
      <div className="flex flex-col items-center w-[18.75rem] h-[12rem] rounded-[1.25rem] bg-white">
        <div className="mt-8 mb-2 text-base font-semibold text-gray_400">
          {boxName}
        </div>
        <div className="mb-6 text-xs text-gray_400">{boxSubText}</div>
        <div className="text-[2rem] font-bold text-neutralBlack">
          {StatisticResult}
        </div>
      </div>
    </>
  );
};
export default StatisticBox;
