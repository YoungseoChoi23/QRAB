import check from "../../assets/storenotepage/check.svg";

const SecondCategoryTab = ({
  secondTab,
  tabName,
  index,
  handleTabClick,
  selectTab,
}) => {
  return (
    <div
      onClick={() => handleTabClick(index)}
      className={`cursor-pointer ${
        selectTab === index
          ? "text-primary_blue border-[1px] border-primary_blue"
          : ""
      } hover:text-primary_blue hover:border-[1px] hover:border-primary_blue flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[32px] pl-[16px] pr-[16px] pt-[10px] pb-[10px]`}
    >
      {selectTab === index && (
        <img src={check} alt="Selected" className="mr-[8px]" />
      )}
      {tabName}
    </div>
  );
};
export default SecondCategoryTab;
