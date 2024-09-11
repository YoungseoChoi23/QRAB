import check from "../../assets/storenotepage/check.svg";
const FirstCategoryTab = ({
  selectTab,
  firstTab,
  index,
  tabName,
  handleTabClick,
}) => {
  return (
    <div
      onClick={() => handleTabClick(index, tabName)}
      className={`flex justify-center cursor-pointer ${
        selectTab === index
          ? "text-primary_blue border-[1px] border-primary_blue"
          : ""
      } hover:text-primary_blue hover:border-[1px] hover:border-primary_blue flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[37px] pl-[16px] pr-[16px] pt-[10px] pb-[10px]`}
    >
      {selectTab === index && (
        <img src={check} alt="Selected" className="mr-[8px]" />
      )}
      {tabName}
    </div>
  );
};
export default FirstCategoryTab;
