import React, { useState, useEffect } from "react";
import right_button from "../../assets/analytics/right_button.svg";
import left_button from "../../assets/analytics/left_button.svg";
import CalendarBody from "./CalendarBody";

const RecordingCalendar = ({ detail = true }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <div className="w-[58.75rem] h-auto px-[1.38rem] py-8 rounded-[0.5rem] bg-white">
        <div className="flex flex-col gap-8">
          <div className={`${detail ? "flex gap-3" : ""} text-2xl font-bold`}>
            {detail && <img src={left_button} />}
            <div>{currentDate.getMonth() + 1}월 학습 기록</div>
            {detail && <img src={right_button} />}
          </div>
          <CalendarBody currentDate={currentDate} />
        </div>
      </div>
    </>
  );
};
export default RecordingCalendar;
