import { useEffect } from "react";
import close_icon from "../../../assets/common/close_icon.svg";
import CategoryTabs from "../../Common/CategoryTabs";
import FriendNoteBox from "../FriendNoteBox";
import Button from "../../Common/Button";
import useShowFriendNoteModal from "../../../store/showFriendNoteModal";

const FriendNoteModal = () => {
  const { setShowFriendNoteModal } = useShowFriendNoteModal();
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

  const handleAddButton = () => {};

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.6) " }}
        className="flex justify-center items-center fixed inset-0 z-10"
      >
        <div className="relative w-[48.75rem] h-[39.5rem] bg-neutralwhite rounded-[1rem]">
          <button
            className="cursor-pointer absolute right-[-30px]"
            onClick={() => setShowFriendNoteModal(false)}
          >
            <img src={close_icon} alt="close_button" />
          </button>
          <div className="flex flex-col gap-[1.5rem] justify-center items-center ">
            <div className="mb-4 text-base font-semibold mt-8 text-neutralBlack ">
              닉네임님의 노트
            </div>
            <CategoryTabs width="38.3125rem" />
            <div className=" grid grid-cols-2 gap-x-5 gap-y-4 h-[18rem] overflow-y-auto custom-scrollbar-skyblue ">
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
              <FriendNoteBox />
            </div>
            <div className="flex gap-3 mt-[1rem]">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendNoteModal;
