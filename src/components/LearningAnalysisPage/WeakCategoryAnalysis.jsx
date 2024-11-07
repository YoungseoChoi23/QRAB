import TreeStatisticBox from "./TreeStatisticBox";
import WordStatisticAnalysis from "./WordStatisticAnalysis";

const WeakCategoryAnalysis = () => {
  return (
    <>
      <div className="flex gap-5">
        <TreeStatisticBox />
        <WordStatisticAnalysis />
      </div>
    </>
  );
};
export default WeakCategoryAnalysis;
