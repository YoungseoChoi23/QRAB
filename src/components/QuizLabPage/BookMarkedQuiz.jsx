import { useEffect, useState } from "react";
import FirstCategoryTab from "../NoteStorePage/FirstCategoryTab";
import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import {
  getCategoryChild,
  getCategoryFilterData,
  getStoredNote,
} from "../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";
import SecondCategoryTab from "../NoteStorePage/SecondCategoryTab";
import check from "../../assets/storenotepage/check.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const BookMarkedQuiz = ({ categoryData }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
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

  const handleTabClick = (id) => {
    setSelectTab(id);
    getSecondCategory(id);
    setSelectTotalTab(false);
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
  return (
    <>
      <div className="w-full h-screen rounded-t-[40px] bg-neutralwhite">
        <div className="flex justify-center">
          <div
            className={`${
              isBrightMode ? "mt-[30px]" : "mt-[72px]"
            } w-[940px] flex flex-col gap-[8px]`}
          >
            <div className="flex gap-[16px] items-center">
              <div className="font-semibold text-[20px] text-neutralblack">
                북마크
              </div>
            </div>
            <div className="font-mediumtext-[16px] text-gray_400">
              노트별로 북마크한 퀴즈를 확인할 수 있어요
            </div>
            <div className="flex gap-[8px] mt-[16px] w-[920px] scrollbarhidden">
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
            <div className="w-[940px] border-b-[1px] border-gray_100 mt-[8px] mb-[8px]"></div>

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
            <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-8">
              {selectedNotes.length !== 0 &&
                selectedNotes.map((it) => (
                  <StoredNote
                    page="QuizLab"
                    noteIcon={noteIcon1}
                    noteId={it.noteId}
                    noteName={it.title}
                    noteContent={it.chatgptContent}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookMarkedQuiz;
