import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import Button from "../../Common/Button";
import useIsEditCategoryModal from "../../../store/isEditCategoryModalStore";
import FirstCategoryTab from "../FirstCategoryTab";
import SecondCategoryTab from "../SecondCategoryTab";
import {
  editCategory,
  getCategory,
  getCategoryChild,
} from "../../../services/api/noteStore";
const firstTab = [
  { id: 0, name: "디자인" },
  { id: 1, name: "기획" },
  { id: 2, name: "상품 전략" },
  { id: 3, name: "디자인" },
  { id: 4, name: "기획" },
  { id: 5, name: "상품 전략" },
  { id: 6, name: "디자인" },
  { id: 7, name: "기획" },
  { id: 8, name: "상품 전략" },
  { id: 9, name: "디자인" },
  { id: 10, name: "기획" },
  { id: 11, name: "상품 전략" },
];
const secondTab = [
  { id: 0, name: "디자인" },
  { id: 1, name: "기획" },
  { id: 2, name: "상품 전략" },
  { id: 3, name: "디자인" },
  { id: 4, name: "기획" },
  { id: 5, name: "상품 전략" },
  { id: 6, name: "디자인" },
  { id: 7, name: "기획" },
  { id: 8, name: "상품 전략" },
  { id: 9, name: "디자인" },
  { id: 10, name: "기획" },
  { id: 11, name: "상품 전략" },
];
const EditCategoryModal = ({ setModal, categoryData }) => {
  const { setIsEditCategoryModal } = useIsEditCategoryModal();
  const [EditButton, setEditButton] = useState(false);
  const [selectTab, setSelectTab] = useState();
  const [selectSecondTab, setSelectSecondTab] = useState();
  const [selectedTabName, setSelectedTabName] = useState();
  const [selectedSecondTabName, setSelectedSecondTabName] = useState();
  const [inputValue, setInputValue] = useState("");
  const [secondCategory, setSecondCategory] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleTabClick = (id, tabName) => {
    setSelectSecondTab();
    setSelectedSecondTabName();
    if (selectTab === id) {
      setSelectTab();
      setSelectedTabName();
    } else {
      setSelectTab(id);
      setSelectedTabName(tabName);
      setInputValue(tabName);
      getSecondCategory(id);
    }
  };

  const getSecondCategory = async (id) => {
    try {
      const res = await getCategoryChild(id);
      console.log("2계층 카테고리 가져오기 성공", res);
      setSecondCategory(res.childCategories);
    } catch (error) {
      console.log("2계층 카테고리 가져오기 실패", error);
    }
  };
  const handleSecondTabClick = (id, tabName) => {
    if (selectSecondTab === id) {
      setSelectSecondTab();
      setSelectedSecondTabName();
    } else {
      setSelectSecondTab(id);
      setSelectedSecondTabName(tabName);
      setInputValue(tabName);
    }
  };

  //카테고리 수정 결과 전송
  const handleEdit = () => {
    const updateContents = {
      categoryName: inputValue,
      categoryId: selectSecondTab ? selectSecondTab : selectTab,
    };
    try {
      console.log(updateContents);
      const res = editCategory(updateContents);
      console.log("카테고리 수정 성공", res);
      setIsEditCategoryModal(false);
    } catch (error) {
      console.error("카테고리 수정 실패", error);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
        position:fixed;
        top:-${window.scrollY}px;
        overflow-y:scroll;
        width:100%;
       `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1); //scrollY값이 없으면 기본값으로 0 사용, 10진수 사용
    };
  }, []);

  const handleButton = () => {
    setIsEditCategoryModal(false);
  };

  const handleCategoryParent = (id) => {
    const res = getCategoryChild(id);
    console.log(res);
  };

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer modalName="카테고리 수정하기" setModal={setModal}>
        <>
          {
            <>
              <div className="w-[660px] h-[132px] flex flex-col items-center  rounded-[8px] border-[1px] border-gray_100">
                <div className=" flex gap-[8px] w-[640px] mt-[20px] scrollbarhidden">
                  {categoryData.map((it) => (
                    <FirstCategoryTab
                      index={it.id}
                      firstTab={firstTab}
                      tabName={it.name}
                      handleTabClick={handleTabClick}
                      selectTab={selectTab}
                    />
                  ))}
                </div>
                <div className="w-[604px] border-b-[1px] border-gray_100 mt-[12px] mb-[12px] "></div>
                <div className=" flex gap-[8px] w-[640px] scrollbarhidden">
                  {secondCategory.map((it) => (
                    <SecondCategoryTab
                      secondTab={secondTab}
                      tabName={it.name}
                      index={it.id}
                      handleTabClick={handleSecondTabClick}
                      selectTab={selectSecondTab}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[660px] h-[210px] rounded-[8px] border-[1px] border-gray_100">
                <div className="flex flex-col gap-[8px] ml-[32px]">
                  <div className="flex gap-[5px] mt-[16px]">
                    {selectedSecondTabName ? (
                      <div className="text-[16px] font-semibold text-primary_blue">
                        {selectedSecondTabName}
                      </div>
                    ) : (
                      selectedTabName && (
                        <div className="text-[16px] font-semibold text-primary_blue">
                          {selectedTabName}
                        </div>
                      )
                    )}
                    <div className="text-[16px] font-semibold">
                      카테고리 수정하기
                    </div>
                  </div>
                  <div className="text-[14px] font-medium text-gray_400">
                    변경할 하위 카테고리 이름을 입력해 주세요.
                  </div>
                  <input
                    onChange={handleInputValue}
                    value={inputValue}
                    className="w-[596px] h-[48px] rounded-[4px] mt-[8px] bg-secondary_bg pl-[20px] text-[13px] placeholder:text-gray_300 focus:outline-none focus:border-[3px] focus:border-primary_blue"
                    placeholder="최대 40자까지 입력할 수 있어요."
                  />
                </div>
                <div className="flex justify-center gap-[12px] mt-[18px]">
                  <Button
                    type="secondary"
                    width="96px"
                    height="40px"
                    buttonText="취소"
                    cancleBtn={true}
                    handleButton={handleButton}
                  />
                  <Button
                    disabled={!inputValue}
                    width="96px"
                    height="40px"
                    buttonText="저장"
                    buttonActive={inputValue}
                    handleButton={handleEdit}
                  />
                </div>
              </div>
            </>
          }
        </>
      </ModalContainer>
    </div>
  );
};
export default EditCategoryModal;
