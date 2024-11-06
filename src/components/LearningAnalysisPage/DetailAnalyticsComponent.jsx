import useIsBrightModeStore from "../../store/isBrightModeStore";
import CategoryChart from "./CategoryChart";
import DetailAnalysisBox from "./DetailAnalysisBox";
import TreeStatisticBox from "./TreeStatisticBox";
import WeakCategoryAnalysis from "./WeakCategoryAnalysis";

const DetailAnalyticsComponent = () => {
  const { isBrightMode } = useIsBrightModeStore();

  return (
    <>
      <div
        className={`flex justify-center w-full ${
          isBrightMode ? "" : "rounded-t-[2.5rem]"
        } bg-secondary_bg`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-6`}
        >
          <div className="text-2xl font-semibold text-neutralblack">
            카테고리별 학습 분석
          </div>
          <CategoryChart />
          <div className="text-2xl font-semibold text-neutralblack">
            취약 카테고리 분석
          </div>
          <div className="flex">
            <span className="text-xl font-medium text-neutralBlack">
              닉네임 님은
            </span>
            <span className="ml-2 text-xl font-semibold text-primary_blue">
              카테고리명
            </span>
            <span className="ml-1 text-xl font-medium text-neutralBlack">
              카테고리에 가장 취약해요
            </span>
          </div>
          <div className="mb-[2.5rem]">
            <WeakCategoryAnalysis />
          </div>
          <div className="mb-[10rem]">
            <div className="text-2xl font-semibold text-neutralblack">
              상세 분석
            </div>
            <DetailAnalysisBox />
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailAnalyticsComponent;
