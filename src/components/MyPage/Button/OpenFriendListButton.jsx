import arrow_right from "../../../assets/mypage/arrow-right.svg";
import useShowFriendNoteModal from "../../../store/showFriendNoteModal";
import delete_icon from "../../../assets/mypage/delete_minus_icon.svg";
import useDeleteFriendModal from "../../../store/deleteFriendModal";

const OpenFriendListButton = ({ deleteActive }) => {
  const { setShowFriendNoteModal } = useShowFriendNoteModal();
  const { setDeleteFriendModal } = useDeleteFriendModal();

  const handleClick = () => {
    if (deleteActive) {
      setDeleteFriendModal(true);
    } else {
      setShowFriendNoteModal(true);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center gap-2  h-8 rounded-[1rem] px-4 py-2 ${
          deleteActive ? "bg-neutralred_10" : "bg-secondary_skyblue"
        }`}
      >
        <div
          className={`text-sm font-medium ${
            deleteActive ? "text-neutralred" : "text-gray_400"
          }`}
        >
          {deleteActive ? "친구 삭제" : "친구 노트 보기"}
        </div>
        <img src={deleteActive ? delete_icon : arrow_right} />
      </button>
    </>
  );
};
export default OpenFriendListButton;
