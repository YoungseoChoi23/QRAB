import React, { useState, useEffect } from "react";
import right_button from "../../assets/analysis/right_button.svg";
import left_button from "../../assets/analysis/left_button.svg";
import CalendarBody from "./CalendarBody";

const RecordingCalendar = ({ detail = false }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleMonth = (direction) => {
    const newDate = new Date(currentDate); // 기존 날짜 복사
    if (direction === "left") {
      newDate.setMonth(currentDate.getMonth() - 1); // 한 달 전
    } else if (direction === "right") {
      newDate.setMonth(currentDate.getMonth() + 1); // 한 달 후
    }
    setCurrentDate(newDate); // 상태 업데이트
  };

  return (
    <>
      <div className="w-[58.75rem] h-auto px-[1.38rem] py-8 rounded-[0.5rem] bg-white">
        <div className="flex flex-col gap-8">
          <div className={`${detail ? "flex gap-3" : ""} text-2xl font-bold`}>
            {detail && (
              <img onClick={() => handleMonth("left")} src={left_button} />
            )}
            <div>{currentDate.getMonth() + 1}월 학습 기록</div>
            {detail && (
              <img onClick={() => handleMonth("right")} src={right_button} />
            )}
          </div>
          <CalendarBody currentDate={currentDate} />
        </div>
      </div>
    </>
  );
};
export default RecordingCalendar;
