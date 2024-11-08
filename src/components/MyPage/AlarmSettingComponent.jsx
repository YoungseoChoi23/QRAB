import { useState } from "react";
import OnOffToggle from "./OnOffToggle";
import TimeSettingBox from "./TimeSettingBox";
import { postAlarmOnOff } from "../../services/api/user";

const AlarmSettingComponent = () => {
  const [publicState, setPublicState] = useState(true);
  const handleToggle = async () => {
    setPublicState(!publicState);
    const res = await postAlarmOnOff();
    console.log(res);
  };
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
          <OnOffToggle publicState={publicState} handleToggle={handleToggle} />
        </div>
        <TimeSettingBox />
      </div>
    </>
  );
};
export default AlarmSettingComponent;
