import { useEffect, useRef, useState } from "react";

const RecentNote = ({ icon, categoryName, noteName, date }) => {
  const categoryRef = useRef(null);
  const noteRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [textExceeds, setTextExceeds] = useState(false);
  const [truncatedNote, setTruncatedNote] = useState(noteName);

  useEffect(() => {
    if (categoryRef.current) {
      const scrollWidth = categoryRef.current.scrollWidth;
      const clientWidth = categoryRef.current.clientWidth;
      setTextExceeds(scrollWidth > clientWidth);
    }
  }, [categoryName]);

  useEffect(() => {
    if (noteRef.current) {
      const scrollWidth = noteRef.current.scrollWidth;
      const clientWidth = noteRef.current.clientWidth;
      console.log(scrollWidth);
      console.log(clientWidth);
      if (scrollWidth > clientWidth) {
        const maxLength = Math.floor(
          noteName.length * (clientWidth / scrollWidth)
        );
        const truncated = noteName.slice(0, maxLength - 3) + "...";
        setTruncatedNote(truncated);
      } else {
        setTruncatedNote(noteName);
      }
    }
  }, [noteName]);

  return (
    <div className="bg-gradient">
      <div className="flex flex-col ml-[20px]">
        <div className="mt-[16px]">
          <img src={icon} />
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative overflow-hidden w-[180px] text-[14px] text-primary_blue`}
        >
          <div
            ref={categoryRef}
            className={`mt-[10px] text-[14px] text-primary_blue  ${
              isHovered && textExceeds ? "animate-rotateText" : "animate-none"
            }`}
          >
            {categoryName}
          </div>
          {textExceeds && (
            <div className="absolute w-[21px] h-[21px] bottom-0 right-0 animate-fade"></div>
          )}
        </div>
        <div
          ref={noteRef}
          className="mt-[8px] w-[180px] h-[44px] text-[14px] text-wrap line-clamp-2"
        >
          {truncatedNote}
        </div>
        <div className="mt-[8px] text-[12px] text-gray_400">{date}</div>
      </div>
    </div>
  );
};

export default RecentNote;
