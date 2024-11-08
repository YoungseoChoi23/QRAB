import { useEffect, useState } from "react";
import close_icon from "../../../assets/common/close_icon.svg";
import CategoryTabs from "../../Common/CategoryTabs";
import FriendNoteBox from "../FriendNoteBox";
import Button from "../../Common/Button";
import useShowFriendNoteModal from "../../../store/showFriendNoteModal";
import {
  getFriendNotes,
  postAddFriendNote,
} from "../../../services/api/social";
import { useQuery } from "@tanstack/react-query";
import FriendCategoryTabs from "../FriendCategoryTabs";
import { getCategory } from "../../../services/api/noteStore";
import MyPageCategoryTabs from "../MyPageCategoryTab";

const FriendNoteModal = ({ friendId, friendName }) => {
  const { setShowFriendNoteModal } = useShowFriendNoteModal();
  const [page, setPage] = useState(0);
  const [friendNoteId, setFriendNoteId] = useState();
  const [selectTab, setSelectTab] = useState(0);
  const [selectSecondTab, setSelectSecondTab] = useState(0);
  const {
    data: friendNotesData,
    isError,
    error,
  } = useQuery({
    queryKey: ["friendNotesData", friendId, page],
    queryFn: () => getFriendNotes(friendId, page),
  });

  const {
    isError: isCategoryError,
    data: categoryData,
    error: categoryError,
  } = useQuery({
    queryKey: ["getCategory"],
    queryFn: getCategory,
  });

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

  const handleCancelButton = () => {
    setShowFriendNoteModal(false);
  };

  const handleAddButton = async () => {
    const myCategory = selectSecondTab ? selectSecondTab : selectTab;
    const formData = new FormData();
    formData.append("categoryId", myCategory);
    console.log(formData.get("categoryId"));

    const res = await postAddFriendNote(friendNoteId, formData);
    console.log(res);
    window.location.reload();
  };

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.6) " }}
        className="flex justify-center items-center fixed inset-0 z-10"
      >
        <div className="relative w-[48.75rem] h-[45rem] bg-neutralwhite rounded-[1rem]">
          <button
            className="cursor-pointer absolute right-[-30px]"
            onClick={() => setShowFriendNoteModal(false)}
          >
            <img src={close_icon} alt="close_button" />
          </button>
          <div className="flex flex-col gap-[1.5rem] justify-center items-center ">
            <div className="mb-4 text-base font-semibold mt-8 text-neutralBlack ">
              {friendName}님의 노트
            </div>
            {/* <FriendCategoryTabs
              categoryData={friendNotesData.parentCategories}
              secondCategory={friendNotesData.childCategories}
              setSelectedNotes={setSelectedNotes}
              width="42rem"
            /> */}

            {friendNotesData.sixFriendsNotesInfo.length === 0 ? (
              <div className="flex justify-center items-center mt-[8rem] text-xl font-semibold">
                공개된 노트가 없어요!
              </div>
            ) : (
              <div className="h-[24.5rem]">
                <div className=" grid grid-cols-2 gap-x-5 gap-y-4 max-h-[24.5rem] overflow-y-auto custom-scrollbar-skyblue ">
                  {friendNotesData.sixFriendsNotesInfo.map(
                    (friendNote, index) => (
                      <>
                        <div onClick={() => setFriendNoteId(friendNote.noteId)}>
                          <FriendNoteBox
                            friendNote={friendNote}
                            active={friendNoteId === friendNote.noteId}
                          />
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>
            )}
            <MyPageCategoryTabs
              categoryData={categoryData}
              setSelectTab={setSelectTab}
              setSelectSecondTab={setSelectSecondTab}
              selectTab={selectTab}
              selectSecondTab={selectSecondTab}
              width="40rem"
            />
            {friendNotesData.sixFriendsNotesInfo.length !== 0 && (
              <div className="absolute bottom-7 flex gap-3 mt-[1rem]">
                <Button
                  type="secondary"
                  handleButton={handleCancelButton}
                  width="6rem"
                  height="2.5rem"
                  buttonText="취소"
                />
                <Button
                  buttonActive={true}
                  handleButton={handleAddButton}
                  width="6rem"
                  height="2.5rem"
                  buttonText="추가"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendNoteModal;
