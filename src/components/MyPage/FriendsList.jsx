import { useState } from "react";
import user_img_ex from "../../assets/mypage/user_img_ex.svg";
import OpenFriendNoteButton from "./Button/OpenFriendNoteButton";
import DefaultButton from "./Button/DefaultButton";

const FriendsList = ({
  friendList = [
    { img: null, nickname: "닉네임" },
    { img: null, nickname: "닉네임2" },
    { img: null, nickname: "닉네임" },
    { img: null, nickname: "닉네임2" },
    { img: null, nickname: "닉네임" },
    { img: null, nickname: "닉네임2" },
    { img: null, nickname: "닉네임" },
    { img: null, nickname: "닉네임2" },
  ],
}) => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-base font-semibold text-neutralBlack">
          친구리스트
        </div>
        <div className="flex justify-between w-[33.75rem] ">
          <div className="text-sm font-medium text-gray_400">
            친구의 노트를 구경해 보세요!
          </div>
          <DefaultButton text="편집" />
        </div>
        {friendList.length === 0 ? (
          <div className="flex justify-center items-center  w-[33.75rem] h-[16rem] text-center text-xl font-semibold text-neutralBlack">
            아직 리스트에 친구가 없어요. <br />
            친구를 추가해보세요!
          </div>
        ) : (
          <div className="h-[24rem] overflow-y-auto custom-scrollbar-skyblue">
            {friendList.map((it, index) => (
              <div
                onMouseEnter={() => setIsHovered(index)}
                onMouseDown={() => setIsHovered(null)}
                className="flex justify-between items-center w-[33.75rem] h-16 px-4 border-b-[0.0625rem] border-gray_100 cursor-pointer hover:bg-secondary_bg"
              >
                <div className="flex items-center gap-10">
                  <img className="w-10 h-10" src={user_img_ex} />
                  <div className="text-base font-medium text-neutralBlack">
                    {it.nickname}
                  </div>
                </div>
                {isHovered === index && <OpenFriendNoteButton />}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default FriendsList;
