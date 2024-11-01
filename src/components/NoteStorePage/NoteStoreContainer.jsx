import { useEffect, useState } from "react";
import addCategoryImg from "../../assets/storenotepage/add_category.svg";
import addNoteImg from "../../assets/storenotepage/add_note.svg";
import AddButton from "./AddButton";
import RecentNote from "./recentNote";
import icon1 from "../../assets/storenotepage/category_icon1.svg";
import icon2 from "../../assets/storenotepage/category_icon2.svg";
import icon3 from "../../assets/storenotepage/category_icon3.svg";
import edit_category from "../../assets/storenotepage/edit_category_icon.svg";
import edit_category_hover from "../../assets/storenotepage/edit_category_hover.svg";
import FirstCategoryTab from "./FirstCategoryTab";
import SecondCategoryTab from "./SecondCategoryTab";
import StoredNote from "./StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import addNoteHovering from "../../assets/storenotepage/add_note_hovering.svg";
import addCategoryHovering from "../../assets/storenotepage/add_category_hovering.svg";
import AddCategoryModal from "./Modal/SelectButtonModal";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";
import useIsAddCategoryModal from "../../store/isAddCategoryModalStore";
import useIsAddNotModal from "../../store/isAddNoteModal";
import check from "../../assets/storenotepage/check.svg";
import {
  getCategoryChild,
  getCategoryFilterData,
  getStoredNote,
} from "../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const firstTab = [
  { id: 0, name: "전체" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기획" },
  { id: 3, name: "상품 전략" },
];

const secondTab = [
  { id: 0, name: "타이포그래피" },
  { id: 1, name: "영상디자인" },
  { id: 2, name: "Blender" },
  { id: 3, name: "C4D" },
  { id: 4, name: "컴그운" },
  { id: 5, name: "정보처리기사" },
];

const NoteStore = ({ categoryData }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const [editButtonHovered, setEditButtonHovered] = useState(false);
  const { isSelectCategoryModal, setIsSelectCategoryModal } =
    useIsSelectCategoryModal();
  const { setIsAddCategoryModal } = useIsAddCategoryModal();
  const { setIsAddNoteModal } = useIsAddNotModal();
  const [selectTotalTab, setSelectTotalTab] = useState(true);
  const [selectTotalSecondTab, setSelectTotalSecondTab] = useState(true);
  const [secondCategory, setSecondCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const { isBrightMode } = useIsBrightModeStore();
  const {
    data: noteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["noteData", page],
    queryFn: () => getStoredNote(page),
  });

  useEffect(() => {
    if (noteData) {
      setSelectedNotes(noteData.sixNotesInfo); // noteData가 로드된 후 selectedNotes 업데이트
    }
  }, [noteData]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleTabClick = (id) => {
    setSelectTotalTab(false);
    setSelectTab(id);
    getSecondCategory(id);
    FilteredNote(id);
  };

  const FilteredNote = async (id) => {
    console.log(id);
    const res = await getCategoryFilterData(id, 0);
    setSelectedNotes(res.sixNotesInfo);
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

  const handleTotalTabClick = () => {
    setSelectTotalTab(true);
    setSelectTab();
    setSelectSecondTab();
    setSecondCategory([]);
    setSelectedNotes(noteData.sixNotesInfo);
  };

  const handleTotalSecondTabClick = () => {
    setSelectTotalSecondTab(true);
    setSelectSecondTab();
    FilteredNote(selectTab);
  };

  const handleSecondTabClick = (id) => {
    setSelectSecondTab(id);
    setSelectTotalSecondTab(false);
    FilteredNote(id);
  };

  const handleCategoryButtonClick = () => {
    setIsAddCategoryModal(true);
  };

  const handleSelectCategoryTab = () => {
    setIsSelectCategoryModal(true);
  };

  const handleNoteButtonClick = () => {
    setIsAddNoteModal(true);
  };

  return (
    <>
      <div className="relative flex flex-col items-center overflow-y-hidden">
        <div className="w-full h-[320px] rounded-t-[40px] bg-neutralwhite">
          <div className="flex justify-center">
            <div className="mt-[65px] w-[940px] flex flex-col gap-[24px]">
              <div className="font-semibold text-[20px] text-neutralblack">
                최근 추가한 노트
              </div>
              <div className="flex">
                <div className="flex flex-col gap-[11px]">
                  <AddButton
                    handleButtonClick={handleNoteButtonClick}
                    buttonImg={addNoteImg}
                    text="노트 추가하기"
                    detailText="작성한 필기를 저장하세요!"
                    hoveredButtonImg={addNoteHovering}
                  />
                  <AddButton
                    handleButtonClick={handleCategoryButtonClick}
                    buttonImg={addCategoryImg}
                    text="카테고리 추가하기"
                    detailText="노트 카테고리를 추가하세요!"
                    hoveredButtonImg={addCategoryHovering}
                  />
                </div>
                <div className="ml-[16px] flex gap-[16px]">
                  {noteData.threeNoteInfo.map((it) => (
                    <RecentNote
                      icon={icon1}
                      categoryName={it.categoryName}
                      noteName={it.title}
                      date={it.createdAt}
                      noteContents={it.shortChatgptContent}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[320px] h-screen min-h-[813px] bg-secondary_bg`}
        >
          <div className="flex justify-center">
            <div className="mt-[65px] w-[940px] ">
              <div className="flex items-center gap-[16px]">
                <div className="font-semibold text-[20px] text-neutralblack">
                  저장된 노트
                </div>
                <div className="text-[14px] text-gray_400 font-semibold">
                  {/* 총 {noteData && noteData.totalNotesCount}개 */}
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div
                  onMouseEnter={() => {
                    setEditButtonHovered(true);
                  }}
                  onMouseLeave={() => {
                    setEditButtonHovered(false);
                  }}
                  className="cursor-pointer mt-[25px]"
                  onClick={handleSelectCategoryTab}
                >
                  {editButtonHovered ? (
                    <img src={edit_category_hover} />
                  ) : (
                    <img src={edit_category} />
                  )}
                </div>
                <div className="flex gap-[8px] mt-[24px] scrollbarhidden w-[950px]">
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
                  {categoryData.map((it) => (
                    <FirstCategoryTab
                      firstTab={firstTab}
                      tabName={it.name}
                      index={it.id}
                      handleTabClick={handleTabClick}
                      selectTab={selectTab}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[940px] border-b-[1px] border-gray_100 mt-[16px] mb-[16px]"></div>
              <div className="flex gap-[8px]">
                {secondCategory.length != 0 && (
                  <div
                    onClick={handleTotalSecondTabClick}
                    className={`${
                      selectTotalSecondTab &&
                      "cursor-pointer text-primary_blue border-[1px] border-primary_blue border"
                    } flex items-center text-[14px] text-gray_400 bg-neutralwhite border-[1px] border-gray_200 rounded-[40px] h-[32px] pl-[16px] pr-[16px] pt-[10px] pb-[10px] hover:text-primary_blue hover:border-[1px] hover:border-primary_blue`}
                  >
                    {selectTotalSecondTab && (
                      <img src={check} alt="Selected" className="mr-[8px]" />
                    )}
                    전체
                  </div>
                )}
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
              <div className="grid grid-cols-3 gap-[20px] mt-[32px]">
                {selectedNotes.length !== 0 &&
                  selectedNotes.map((it) => (
                    <StoredNote
                      noteIcon={noteIcon1}
                      noteName={it.title}
                      noteContent={it.chatgptContent}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoteStore;
