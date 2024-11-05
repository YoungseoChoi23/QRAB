import { useLocation } from "react-router-dom";
import page_icon from "../../assets/solvequizpage/page_icon.svg";

const MarkedResultComponent = ({
  noteName = "JavaScript Sec05_12 컴포넌트 트리에 데이터 공급(Context API)",
}) => {
  return (
    <>
      <div className="w-[48.75rem] h-[8.625rem] px-10 pt-[1.31rem] pb-[1.56rem] rounded-[0.5rem] bg-secondary_bg">
        <div className="flex items-center gap-[1.41rem]">
          <img src={page_icon} />
          <div className="text-base font-medium text-gray_400">{noteName}</div>
        </div>
        <div className="border-t-[0.0625rem] border-gray_100 mt-4 mb-5"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <div className="text-sm font-medium text-gray_300">점수</div>
            <div className="flex gap-8 text-2xl text-neutralBlack">
              <div className="font-bold">33</div>
              <div className="font-semibold">점</div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-sm font-medium text-gray_300">
              맞힌 문항/문항수
            </div>
            <div className="flex gap-[0.63rem]">
              <div className="text-2xl font-bold text-neutralBlack">1</div>
              <div className="text-2xl font-semibold text-gray_400">/3</div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-sm font-medium text-gray_300">응시시간</div>
            <div className="text-sm font-medium text-neutralBlack">
              2023-08-22 11:40:35
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkedResultComponent;
