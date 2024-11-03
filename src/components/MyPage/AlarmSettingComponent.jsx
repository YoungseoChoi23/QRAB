import OnOffToggle from "./OnOffToggle";
import TimeSettingBox from "./TimeSettingBox";

const AlarmSettingComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-[29rem]">
        <div className="text-base font-semibold text-neutralBlack">
          알림 설정
        </div>
        <div className="flex justify-between">
          <div className="text-sm font-medium text-gray_400">
            설정한 시간대에 알림을 이메일로 전송해 드려요.
          </div>
          <OnOffToggle />
        </div>
        <TimeSettingBox />
      </div>
    </>
  );
};
export default AlarmSettingComponent;
