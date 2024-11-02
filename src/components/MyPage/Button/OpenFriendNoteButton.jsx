import arrow_right from "../../../assets/mypage/arrow-right.svg";
import useShowFriendNoteModal from "../../../store/showFriendNoteModal";

const OpenFriendNoteButton = ({}) => {
  const { setShowFriendNoteModal } = useShowFriendNoteModal();
  return (
    <>
      <button
        onClick={() => setShowFriendNoteModal(true)}
        className="flex items-center gap-2 w-[8.25rem] h-8 rounded-[1rem] px-4 py-2 bg-secondary_skyblue"
      >
        <div className="text-sm font-medium text-gray_400">친구 노트 보기</div>
        <img src={arrow_right} />
      </button>
    </>
  );
};
export default OpenFriendNoteButton;
