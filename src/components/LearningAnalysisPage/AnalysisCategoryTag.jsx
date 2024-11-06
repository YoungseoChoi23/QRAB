import { useState } from "react";

const AnalysisCategoryTag = ({
  isActive,
  setSelectedCategory,
  categoryName,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setSelectedCategory(categoryName)}
        className={`flex items-center h-8 px-3 py-2 rounded-[2.5rem] font-medium ${
          isHovered
            ? "border-[1px] border-secondary_lightblue bg-secondary_skyblue text-primary_blue"
            : isActive
            ? "bg-primary_blue text-white"
            : "border-[1px] border-gray_100 bg-white text-neutralBlack"
        } cursor-pointer`}
      >
        {categoryName}
      </div>
    </>
  );
};
export default AnalysisCategoryTag;
