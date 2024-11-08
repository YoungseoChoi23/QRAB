import { useState } from "react";
import CategoryTag from "../QuizLabPage/CategoryTag";

const FriendNoteBox = ({ friendNote, active }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-0 flex flex-col gap-2 w-[20rem] h-[5.3125rem] px-5 py-2 rounded-[0.5rem] border-[1px] border-gray_100"
      >
        <div className="text-base font-semibold overflow-ellipsis white-space-nowrap overflow-hidden text-neutralBlack">
          {friendNote.title}
        </div>
        <div className="flex gap-[8px] mt-[8px] ">
          {!friendNote.parentCategoryName ? (
            <CategoryTag tagText={friendNote.categoryName} />
          ) : (
            <>
              <CategoryTag tagText={friendNote.parentCategoryName} />
              <CategoryTag tagText={friendNote.categoryName} />
            </>
          )}
        </div>
        {(isHovered || active) && (
          <div className="absolute top-0 left-0 z-10 w-[20rem] h-[5.3125rem]  rounded-[0.5rem] bg-gray_400 opacity-50">
            <div
              onClick={() => window.open(friendNote.fileOrUrl, "_blank")}
              className="absolute top-2 right-3 text-[12px] text-gray_200 underline decoration-1 cursor-pointer"
            >
              원문 보기
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FriendNoteBox;
