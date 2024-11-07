import { useEffect, useRef, useState } from "react";
import ModalContainer from "./ModalContainer";
import FirstCategoryTab from "../FirstCategoryTab";
import SecondCategoryTab from "../SecondCategoryTab";
import file from "../../../assets/storenotepage/file_icon.svg";
import CheckButton from "../Button/CheckButton";
import useIsAddFileNote from "../../../store/isAddFileNote";
import LoadingSpinner from "../../Common/LoadingSpinner";
import {
  getCategoryChild,
  postNoteFile,
} from "../../../services/api/noteStore";
import Button from "../../Common/Button";

const AddFileNoteModal = ({ setModal, categoryData }) => {
  const [selectTab, setSelectTab] = useState(); //category 번호
  const [selectSecondTab, setSelectSecondTab] = useState(); //2계층 category 번호
  const [selectedTabName, setSelectedTabName] = useState();
  const [selectedSecondTabName, setSelectedSecondTabName] = useState();
  const [secondCategory, setSecondCategory] = useState([]);
  const [fileValue, setFileValue] = useState(null);
  const { isAddFileNote, setIsAddFileNote } = useIsAddFileNote();
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileValue(file); // 파일 이름을 설정
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click(); // 파일 입력 요소 클릭
  };

  const handleTabClick = (id, tabName) => {
    if (selectTab === id) {
      setSelectTab();
      setSelectedTabName();
      setSelectSecondTab();
    } else {
      setSelectTab(id);
      setSelectedTabName(tabName);
      getSecondCategory(id);
    }
  };
  const handleSecondTabClick = (id, tabName) => {
    if (selectSecondTab === id) {
      setSelectSecondTab();
      setSelectedSecondTabName();
    } else {
      setSelectSecondTab(id);
      setSelectedSecondTabName(tabName);
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

  const handleFileData = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append(
      "categoryId",
      String(selectSecondTab ? selectSecondTab : selectTab)
    );
    console.log(formData.get("file"));
    console.log(formData.get("categoryId"));

    try {
      const res = await postNoteFile(formData);
      console.log("파일 노트 저장 완료", res);
      setLoading(false);
      setIsAddFileNote(false);
    } catch (error) {
      console.log("파일 노트 저장 실패", error);
    }
  };

  const closeModalButton = () => {
    setIsAddFileNote(false);
  };

  return (
    <div
      style={{ background: "rgba(13, 13, 13, 0.6) " }}
      className="flex justify-center items-center fixed inset-0 z-10"
    >
      <ModalContainer setModal={setModal} modalName="노트 추가하기">
        {loading && <LoadingSpinner loadingText="노트를 생성 중이에요" />}
        {!loading && (
          <>
            <div className="w-[660px] h-[132px] rounded-[8px] border-[1px] border-gray_100 flex flex-col items-center">
              <div className="flex gap-[8px] w-[604px] mt-[20px] scrollbarhidden">
                {categoryData.map((it) => (
                  <FirstCategoryTab
                    index={it.id}
                    firstTab={categoryData}
                    tabName={it.name}
                    handleTabClick={handleTabClick}
                    selectTab={selectTab}
                  />
                ))}
              </div>
              <div className="w-[604px] border-b-[1px] border-gray_100 mt-[12px] mb-[12px]"></div>
              <div className="flex gap-[8px] w-[604px] scrollbarhidden">
                {secondCategory.map((it) => (
                  <SecondCategoryTab
                    selectTab={selectSecondTab}
                    firstTab={secondCategory}
                    index={it.id}
                    tabName={it.name}
                    handleTabClick={handleSecondTabClick}
                  />
                ))}
              </div>
            </div>
            <div className="w-[660px] h-[210px] rounded-[8px] border-[1px] border-gray_100">
              <div className="flex flex-col gap-[8px] ml-[32px] mt-[16px]">
                <div className="text-base font-semibold">파일 불러오기</div>
                <div className="text-sm font-medium text-gray_400">
                  파일은 10MB까지 첨부 가능합니다.
                </div>
                <div className="flex gap-[8px] mt-[4px]">
                  <button
                    onClick={handleFileButtonClick}
                    className="flex items-center w-[76px] h-[37px] rounded-[4px] text-sm font-medium text-gray_400 pl-[12px] pt-[10px] pr-[12px] pb-[10px] border-[1px] border-gray_100"
                  >
                    파일 선택
                  </button>
                  <div className="flex items-center gap-2 w-[504px] h-[37px] bg-secondary_bg rounded-[4px]">
                    <div className="ml-2">
                      <img src={file} />
                    </div>
                    <span
                      className={`text-sm ${
                        fileValue ? "text-neutralBlack" : "text-gray_300"
                      }`}
                    >
                      {fileValue ? fileValue.name : "파일을 선택하세요"}
                    </span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
                </div>
                <div className="text-xs text-gray_400 font-medium">
                  ✓ 등록 가능한 파일 형식 및 확장자 : PDF, PNG, JPG, JPEG
                </div>
              </div>
              <div className="flex gap-[12px] justify-center  mt-[8px]">
                <Button
                  type="secondary"
                  width="96px"
                  height="40px"
                  buttonText="취소"
                />
                <Button
                  handleButton={handleFileData}
                  width="96px"
                  height="40px"
                  buttonText="추가"
                  buttonActive={(!!selectTab || !!selectSecondTab) && fileValue}
                />
              </div>
            </div>
          </>
        )}
      </ModalContainer>
    </div>
  );
};
export default AddFileNoteModal;
