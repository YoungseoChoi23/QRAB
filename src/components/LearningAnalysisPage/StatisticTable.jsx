import StatisticElement from "./StatisticElement";

const categoryAnalysisData = [
  {
    parentCategoryName: "카테고리명카테고리명카테고리명카테고리명",
    categoryName: "2계층 카테고리명카테고리명카테고리명카테고리명",
    solvedQuizCount: 18,
    categoryAccuracy: 100,
  },
  {
    parentCategoryName: "컴퓨터공학",
    categoryName: null,
    solvedQuizCount: 27,
    categoryAccuracy: 92,
  },
  {
    parentCategoryName: "디자인",
    categoryName: "타이포그래피",
    solvedQuizCount: 18,
    categoryAccuracy: 60.8,
  },
  {
    parentCategoryName: "디자인",
    categoryName: "블렌더",
    solvedQuizCount: 80,
    categoryAccuracy: 50,
  },
  {
    parentCategoryName: "경영학",
    categoryName: null,
    solvedQuizCount: 12,
    categoryAccuracy: 100,
  },
];
const StatisticTable = () => {
  return (
    <>
      <StatisticElement />
      {categoryAnalysisData.map((it, index) => (
        <StatisticElement
          categoryName={it.parentCategoryName}
          subCategoryName={it.categoryName ? it.categoryName : ""}
          quizNum={it.solvedQuizCount}
          avgCorrectRate={it.categoryAccuracy}
          index={index + 1}
        />
      ))}
    </>
  );
};
export default StatisticTable;
