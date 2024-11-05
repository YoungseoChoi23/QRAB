import useIsBrightModeStore from "../../store/isBrightModeStore";
import RecordingCalendar from "./RecordingCalendar";
import StatisticBox from "./StatisticBox";

const TotalView = () => {
  const { isBrightMode } = useIsBrightModeStore();
  return (
    <>
      <div
        className={`flex justify-center w-full ${
          isBrightMode ? "" : "rounded-t-[2.5rem]"
        } h-screen bg-secondary_bg`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-6`}
        >
          <div className="font-semibold text-[20px] text-neutralblack">
            이번 달 통계
          </div>
          <div className="flex gap-6 mb-4">
            <StatisticBox
              boxName="이번 달 학습일"
              boxSubText="퀴즈를 풀이한 날짜를 기준으로 측정됩니다."
              StatisticResult="17일"
            />
            <StatisticBox
              boxName="풀이한 퀴즈 문제 수"
              boxSubText="이번 달 풀이한 퀴즈 문제 수를 확인하세요."
              StatisticResult="89문제"
            />
            <StatisticBox
              boxName="평균 정답률"
              boxSubText="이번 달 풀이한 퀴즈의 평균 정답률이에요."
              StatisticResult="83.7%"
            />
          </div>
          <RecordingCalendar />
        </div>
      </div>
    </>
  );
};
export default TotalView;
