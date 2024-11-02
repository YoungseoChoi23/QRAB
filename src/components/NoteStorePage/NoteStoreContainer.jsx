import { useEffect, useState } from "react";
import addCategoryImg from "../../assets/storenotepage/add_category.svg";
import addNoteImg from "../../assets/storenotepage/add_note.svg";
import AddButton from "./AddButton";
import RecentNote from "./recentNote";
import icon1 from "../../assets/storenotepage/category_icon1.svg";
import icon2 from "../../assets/storenotepage/category_icon2.svg";
import icon3 from "../../assets/storenotepage/category_icon3.svg";
import StoredNote from "./StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import addNoteHovering from "../../assets/storenotepage/add_note_hovering.svg";
import addCategoryHovering from "../../assets/storenotepage/add_category_hovering.svg";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";
import useIsAddCategoryModal from "../../store/isAddCategoryModalStore";
import useIsAddNotModal from "../../store/isAddNoteModal";

import CategoryTabs from "../Common/CategoryTabs";

const NoteStore = ({ categoryData, noteData }) => {
  const { setIsAddCategoryModal } = useIsAddCategoryModal();
  const { setIsAddNoteModal } = useIsAddNotModal();
  const [selectedNotes, setSelectedNotes] = useState([]); //카테고리 별로 필터링 된 노트들 (카테고리 탭 했을 때 화면에 보이는 노트들)

  useEffect(() => {
    if (noteData) {
      setSelectedNotes(noteData.sixNotesInfo); // noteData가 로드된 후 selectedNotes 업데이트
    }
  }, [noteData]);

  const handleCategoryButtonClick = () => {
    setIsAddCategoryModal(true);
  };

  const handleNoteButtonClick = () => {
    setIsAddNoteModal(true);
  };

  return (
    <>
      <div className="relative flex flex-col items-center overflow-y-hidden">
        <div className="flex justify-center w-full h-[20rem]">
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
                    noteId={it.noteId}
                    noteName={it.title}
                    date={it.createdAt}
                    noteContents={it.shortChatgptContent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full h-screen min-h-[813px] bg-secondary_bg`}>
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
              <CategoryTabs
                categoryData={categoryData}
                noteData={noteData}
                setSelectedNotes={setSelectedNotes}
                editable={true}
              />
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
