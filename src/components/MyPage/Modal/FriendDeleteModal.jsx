import { useEffect } from "react";
import Button from "../../Common/Button";
import close_icon from "../../../assets/common/close_icon.svg";
import useDeleteFriendModal from "../../../store/deleteFriendModal";
import user_img_ex from "../../../assets/mypage/user_img_ex.svg";
const FriendDeleteModal = () => {
  const { setDeleteFriendModal } = useDeleteFriendModal();
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
    setDeleteFriendModal(false);
  };

  const handleDeleteButton = () => {};

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.6) " }}
        className="flex justify-center items-center fixed inset-0 z-10"
      >
        <div className="relative w-[38.75rem] h-[19.375rem] bg-neutralwhite rounded-[1rem]">
          <button
            className="cursor-pointer absolute right-[-30px]"
            onClick={() => setDeleteFriendModal(false)}
          >
            <img src={close_icon} alt="close_button" />
          </button>
          <div className="flex flex-col gap-6 justify-center items-center ">
            <div className="text-base font-semibold mt-8 text-neutralBlack ">
              친구 삭제
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 mb-2">
                <img src={user_img_ex} />
              </div>
              <div className="text-base font-medium text-neutralBlack">
                닉네임 님을 친구 리스트에서 삭제하시겠습니까?
              </div>
              <div className="text-xs font-medium text-gray_400">
                친구를 삭제하더라도 언제든지 다시 친구를 맺을 수 있어요.
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                buttonActive={false}
                handleButton={handleCancelButton}
                width="6rem"
                height="2.5rem"
                buttonText="취소"
              />
              <Button
                buttonActive={true}
                handleButton={handleDeleteButton}
                width="6rem"
                height="2.5rem"
                buttonText="삭제"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendDeleteModal;
