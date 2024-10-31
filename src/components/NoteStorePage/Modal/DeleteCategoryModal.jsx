import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import Button from "../../Common/Button";
import FirstCategoryTab from "../FirstCategoryTab";
import SecondCategoryTab from "../SecondCategoryTab";
import useIsDeleteCategoryModal from "../../../store/isDeleteCategoryModalStore";
import {
  deleteCategory,
  getCategoryChild,
} from "../../../services/api/noteStore";

const DeleteCategoryModal = ({ setModal, categoryData }) => {
  const [selectTab, setSelectTab] = useState();
  const [selectSecondTab, setSelectSecondTab] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState([]);
  const [selectedSecondTabName, setSelectedSecondTabName] = useState([]);
  const { setIsDeleteCategoryModal } = useIsDeleteCategoryModal();
  const [secondTab, setSecondTab] = useState([]);

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
    setIsDeleteCategoryModal(false);
  }; //모달창 닫기 버튼

  const handleTabClick = (id, tabName) => {
    if (selectTab === id) {
      setSelectTab();
      setSelectedTabName();
      setSecondTab([]);
    } else {
      setSelectTab(id);
      setSelectedTabName(tabName);
      getSecondCategory(id);
    }
  };

  const getSecondCategory = async (id) => {
    try {
      const res = await getCategoryChild(id);
      console.log("2계층 카테고리 가져오기 성공", res);
      setSecondTab(res.childCategories);
    } catch (error) {
      console.log("2계층 카테고리 가져오기 실패", error);
    }
  };

  const handleSecondTabClick = (id, tabName) => {
    setSelectSecondTab((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
    setSelectedSecondTabName((prev) => {
      if (prev.includes(tabName)) {
        // 이미 선택된 탭 이름을 클릭한 경우, 해당 탭 이름 제거
        return prev.filter((name) => name !== tabName);
      } else {
        // 새 탭 이름을 클릭한 경우, 해당 탭 이름 추가
        return [...prev, tabName];
      }
    });
  };

  const handleDeleteButton = async () => {
    console.log(selectTab);
    const res = await deleteCategory(
      setSelectSecondTab.length > 0 ? setSelectSecondTab : [selectTab]
    );
    console.log(res);
  };

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer modalName="카테고리 삭제하기" setModal={setModal}>
        <div className="w-[660px] h-[297px] rounded-[8px] border-[1px] border-gray_100 mt-[10px]">
          <div className="flex flex-col gap-[5px] ml-[32px] mt-[16px]">
            <div className="text-[16px] font-semibold">카테고리 선택</div>
            <div className="text-[14px] font-medium text-gray_400">
              삭제할 카테고리를 선택해 주세요.
            </div>
            <div className=" flex gap-[8px] w-[600px] scrollbarhidden line-clamp-2 mt-[16px]">
              {categoryData.map((it) => (
                <FirstCategoryTab
                  CategoryDelete={true}
                  firstTab={categoryData}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleTabClick}
                  selectTab={selectTab}
                />
              ))}
            </div>
            <div className="w-[604px] border-b-[1px] border-gray_100 mt-[11px] mb-[11px]"></div>
            <div className=" flex gap-[8px] w-[600px] h-[120px] overflow-y-auto custom-scrollbar flex-wrap">
              {secondTab.map((it) => (
                <SecondCategoryTab
                  CategoryDelete={true}
                  secondTab={secondTab}
                  tabName={it.name}
                  index={it.id}
                  handleTabClick={handleSecondTabClick}
                  selectTab={selectSecondTab}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[12px] mt-[5px]">
          <Button
            handleButton={handleButton}
            width="96px"
            height="40px"
            cancleBtn={true}
            buttonText="취소"
          />
          <Button
            width="96px"
            height="40px"
            buttonText="삭제"
            handleButton={handleDeleteButton}
            buttonActive={true}
          />
        </div>
      </ModalContainer>
    </div>
  );
};
export default DeleteCategoryModal;
