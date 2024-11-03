import { useEffect, useState } from "react";
import close_icon from "../../../assets/common/close_icon.svg";
import CategoryTabs from "../../Common/CategoryTabs";
import FriendNoteBox from "../FriendNoteBox";
import Button from "../../Common/Button";
import useAddFriendModalStore from "../../../store/addFriendModal";

const FriendAddModal = () => {
  const [inputValue, setInputValue] = useState("");
  const { addFriendModal, setAddFriendModal } = useAddFriendModalStore();

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
    setAddFriendModal(false);
  };

  const handleAddButton = () => {};

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.6) " }}
        className="flex justify-center items-center fixed inset-0 z-10"
      >
        <div className="relative w-[38.75rem] h-[17.4375rem] bg-neutralwhite rounded-[1rem]">
          <button
            className="cursor-pointer absolute right-[-30px]"
            onClick={() => setAddFriendModal(false)}
          >
            <img src={close_icon} alt="close_button" />
          </button>
          <div className="flex flex-col gap-8 justify-center items-center ">
            <div className="mb-4 text-base font-semibold mt-8 text-neutralBlack ">
              친구 추가
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="text-sm font-medium text-neutralBlack">
                추가할 친구의 닉네임을 입력해 주세요
              </div>
              <input
                placeholder="닉네임은 2~10자로 구성되어 있어요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-[33.75rem] h-12 rounded-[0.25rem] px-5 py-4 bg-secondary_bg text-[0.8125rem] focus:border-primary_blue focus:border-[2px] focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
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
export default FriendAddModal;
