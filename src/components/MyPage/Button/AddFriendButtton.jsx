import add_person from "../../../assets/mypage/add_person.svg";
import useAddFriendModalStore from "../../../store/addFriendModal";
const AddFriendButtton = () => {
  const { setAddFriendModal } = useAddFriendModalStore();

  const handleAddFriend = () => {
    setAddFriendModal(true);
  };

  return (
    <>
      <button
        onClick={handleAddFriend}
        className="flex items-center gap-2 w-[6.25rem] h-10 p-3 rounded-[1.25rem] bg-primary_blue hover:shadow-custom"
      >
        <img src={add_person} />
        <div className="text-sm text-medium text-white">친구 추가</div>
      </button>
    </>
  );
};
export default AddFriendButtton;
