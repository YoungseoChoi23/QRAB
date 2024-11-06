import React, { useEffect } from "react";
import tag_bgimg from "../../assets/analytics/tab_background.svg";

const CalendarBody = ({ currentDate }) => {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  //각 달에 해당하는 day를 가져옴
  const getDaysInMonth = (year, month) => {
    return new Array(31)
      .fill("")
      .map((_, index) => new Date(year, month, index + 1)) //Date객체는 지정된 day가 해당 month의 일 수를 초과하면 자동으로 다음 달로 넘어감
      .filter((date) => date.getMonth() === month); //다음 달 1일을 없애도록 필터링
  };

  const generateCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayIndex = daysInMonth[0].getDay() || 7; // 월요일 시작
    console.log(firstDayIndex); //만약 11월이 금요일에 시작하면 출력값은 5
    const weeks = [];
    let week = new Array(7).fill({ label: "", task: "", completion: "" });
    let dayCounter = 0;

    // 첫 번째 주의 빈 칸 채우기
    for (let i = 0; i < firstDayIndex - 1; i++) {
      week[i] = { label: "", task: "", completion: "" };
    }

    // 날짜 채우기
    daysInMonth.forEach((date) => {
      week[(firstDayIndex - 1 + dayCounter) % 7] = {
        label: date.getDate().toString(),
        task: "n문제 풀이",
        completion: `${Math.floor(Math.random() * 101)}%`, // 임의 완료율
      };
      dayCounter++;

      // 주가 채워지거나 해당 월의 전체 날짜를 다 채웠으면 weeks에 추가하고 초기화
      if (
        (firstDayIndex - 1 + dayCounter) % 7 === 0 ||
        dayCounter === daysInMonth.length
      ) {
        weeks.push(week);
        week = new Array(7).fill({ label: "", task: "", completion: "" });
      }
    });

    return weeks;
  };

  const calendarData = generateCalendarData();

  return (
    <>
      <div>
        <div className="flex items-center w-[56rem] h-[2.6rem] rounded-t-[0.75rem] bg-[#F1F4F9] ">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="flex-1 text-sm font-semibold text-gray_400 text-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="relative grid grid-cols-7">
          {calendarData.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {week.map((day, dayIndex) => (
                <div key={dayIndex} className=" border text-center">
                  <div className="flex flex-col gap-4 mb-2">
                    <div className="flex justify-end w-[l.25rem] pr-3 pt-3 text-sm font-medium">
                      {day.label}
                    </div>

                    {day.task && day.label && (
                      <div
                        className="flex justify-center items-center gap-2 h-7 px-2 py-1"
                        style={{ backgroundImage: `url(${tag_bgimg})` }}
                      >
                        <div
                          className={`text-sm font-semibold text-primary_blue`}
                        >
                          {day.task}
                        </div>
                        <div
                          className={`flex justify-center items-center w-10 h-4 rounded-[0.5rem] ${
                            parseInt(day.completion.replace("%", "")) >= 80
                              ? "bg-[#EDFFFC]"
                              : parseInt(day.completion.replace("%", "")) >= 50
                              ? "bg-[#FFFDF8]"
                              : "bg-[#FFECEC]"
                          } text-xs font-medium ${
                            parseInt(day.completion.replace("%", "")) >= 80
                              ? "text-secondary_green"
                              : parseInt(day.completion.replace("%", "")) >= 50
                              ? "text-secondary_yellow"
                              : "text-neutralred"
                          }`}
                        >
                          {day.completion}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default CalendarBody;
