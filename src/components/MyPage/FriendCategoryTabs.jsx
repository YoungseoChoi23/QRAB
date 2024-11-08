import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import check from "../../assets/storenotepage/check.svg";
import SecondCategoryTab from "../NoteStorePage/SecondCategoryTab";
import { useState } from "react";
const FriendCategoryTabs = ({ categoryData, secondCategory, width }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const [selectTotalTab, setSelectTotalTab] = useState(true);
  const [selectTotalSecondTab, setSelectTotalSecondTab] = useState(true);
  const [selectedNotes, setSelectedNotes] = useState();

  console.log(categoryData, secondCategory);

  const handleTotalTabClick = () => {
    setSelectTotalTab(true);
    setSelectTab();
    setSelectSecondTab();
    setSelectedNotes();
  };

  // const handleTotalSecondTabClick = () => {
  //   // setSelectTotalSecondTab(true);
  //   setSelectSecondTab();
  //   FilteredNote(selectTab);
  // };

  const handleTabClick = (id) => {
    setSelectTotalTab(false); //특정 부모 카테고리를 누르면 전체 카테고리 클릭 여부는 false
    setSelectTab(id);
    // setSelectTotalSecondTab(false);
    setSelectSecondTab();
    // FilteredNote(id); //카테고리 별 노트 조회 api 연결
  };

  //   const FilteredNote = async (id) => {
  //     console.log(id);
  //     const res = await getCategoryFilterData(id, 0);
  // if (selectTotalSecondTab) {
  //   const childNotesPromises = res.childCategories.map(async (it) => {
  //     const childNotes = await getCategoryFilterData(it.id, 0);
  //     return childNotes.sixNotesInfo; // 반환된 값을 배열에 저장
  //   });

  //   // 모든 비동기 작업을 기다림
  //   const allChildNotes = await Promise.all(childNotesPromises);

  //   // selectedNotes를 업데이트
  //   const selectedNotes = allChildNotes.flat(); // 다차원 배열을 평탄화
  //   setSelectedNotes(selectedNotes);
  // } else {
  //     setSelectedNotes(res.sixNotesInfo); // 선택된 카테고리 별로 필터링 된 노트들
  //   };

  const handleSecondTabClick = (id) => {
    setSelectSecondTab(id);
    // setSelectTotalSecondTab(false);
    // FilteredNote(id);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mt-6">
          <div
            style={{ width: width }}
            className="flex gap-[8px] scrollbarhidden"
          >
            <div
              onClick={handleTotalTabClick}
              className={`${
                selectTotalTab &&
                "text-primary_blue border-[1px] border-primary_blue border"
              }flex justify-center cursor-pointer flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[37px] pl-[16px] pr-[16px] pt-[10px] pb-[10px] hover:text-primary_blue hover:border-[1px] hover:border-primary_blue`}
            >
              {selectTotalTab && (
                <img src={check} alt="Selected" className="mr-[8px]" />
              )}
              전체
            </div>
            {categoryData &&
              categoryData.map((it) => (
                <FirstCategoryTab
                  firstTab={categoryData}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleTabClick}
                  selectTab={selectTab}
                />
              ))}
          </div>
        </div>
        <div
          style={{ width: width }}
          className="border-b-[1px] border-gray_100 my-4"
        ></div>

        <div className="flex gap-[8px]">
          {secondCategory.map((it) => (
            <SecondCategoryTab
              secondTab={secondCategory}
              tabName={it.name}
              index={it.id}
              handleTabClick={handleSecondTabClick}
              selectTab={selectSecondTab}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default FriendCategoryTabs;
