import { useState } from "react";
import {
  getCategoryChild,
  getCategoryFilterData,
} from "../../services/api/noteStore";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import SecondCategoryTab from "../NoteStorePage/SecondCategoryTab";
import check from "../../assets/storenotepage/check.svg";
import edit_category from "../../assets/storenotepage/edit_category_icon.svg";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";

const MyPageCategoryTabs = ({
  categoryData,
  selectTab,
  setSelectTab,
  selectSecondTab,
  setSelectSecondTab,
  width,
}) => {
  const [selectTotalTab, setSelectTotalTab] = useState(true);
  const [selectTotalSecondTab, setSelectTotalSecondTab] = useState(true);
  const [secondCategory, setSecondCategory] = useState([]);
  const [editButtonHovered, setEditButtonHovered] = useState(false);
  const { setIsSelectCategoryModal } = useIsSelectCategoryModal();

  const getSecondCategory = async (id) => {
    try {
      const res = await getCategoryChild(id);
      console.log("2계층 카테고리 가져오기 성공", res);
      setSecondCategory(res.childCategories);
    } catch (error) {
      console.log("2계층 카테고리 가져오기 실패", error);
    }
  };

  const handleTotalTabClick = () => {
    setSelectTotalTab(true);
    setSelectTab();
    setSelectSecondTab();
    setSecondCategory([]);
  };

  const handleTabClick = (id) => {
    setSelectTotalTab(false); //특정 부모 카테고리를 누르면 전체 카테고리 클릭 여부는 false
    setSelectTab(id);
    // setSelectTotalSecondTab(false);
    setSelectSecondTab();
    getSecondCategory(id); //부모 카테고리에 해당하는 자식 카테고리 가져오기 api 연결
  };

  const handleSecondTabClick = (id) => {
    setSelectSecondTab(id);
    // setSelectTotalSecondTab(false);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mt-6">
          <div
            style={{ width: width }}
            className="flex gap-[8px] scrollbarhidden"
          >
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
export default MyPageCategoryTabs;
