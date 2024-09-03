import { useState } from "react";
import nextButton from "../../assets/storenotepage/next_button.svg";
const StoredNote = ({ noteName, noteContent, noteIcon, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer overflow-hidden rounded-[16px] border-[1px] border-gray_100 w-[300px] h-[200px] relative"
    >
      {isHovered && (
        <div className="flex items-center justify-center absolute w-[300px] h-[200px] rounded-[16px] transparent_black top-0 left-0 z-10">
          <div className="flex flex-col">
            <div className="relative flex justify-center items-center">
              <div className="absolute top-[-36px] left-0 text-[12px] text-gray_200 underline decoration-1">
                원문 보기
              </div>
              <div className="flex items-center leading-6 w-[196px] h-[72px] text-wrap  font-semibold text-neutralwhite text-[20px]">
                {noteName}
              </div>
              <img src={nextButton} />
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col h-full">
        <div className="flex-1 bg-gray_500 relative">
          <div className="mt-[10px] absolute right-[-10px] ">
            <img src={noteIcon} />
          </div>
          {!isHovered && (
            <div className="flex items-center leading-6 ml-[20px] mt-[16px] w-[196px] h-[72px] text-wrap  font-semibold text-neutralwhite text-[20px]">
              {noteName}
            </div>
          )}
        </div>
        <div
          className={`flex-1 ${isHovered ? "bg-gray_500" : "bg-[#F4F6FA]"} `}
        >
          {!isHovered && (
            <div className="ml-[20px] mt-[12px] w-[262px] leading-4 text-wrap font-medium text-gray_400 text-[14px] line-clamp-2">
              {noteContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default StoredNote;
