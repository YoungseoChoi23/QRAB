import { useEffect, useState } from "react";

import StoredQuiz from "./StoredQuiz";
import {
  getCategoryChild,
  getCategoryFilterData,
  getStoredNote,
} from "../../services/api/noteStore";
import { useQuery } from "@tanstack/react-query";
import StoredQuizNote from "./StoredQuizNote";
import useIsBrightModeStore from "../../store/isBrightModeStore";

const QuizLabContainer = ({
  categoryData,
  createQuizPage = false,
  quizStorage = false,
}) => {
  const { isBrightMode } = useIsBrightModeStore();

  return (
    <>
      <div className="relative flex flex-col items-center overflow-y-hidden">
        {!quizStorage && (
          <StoredQuizNote
            categoryData={categoryData}
            createQuizPage={createQuizPage}
          />
        )}
        {!createQuizPage && (
          <>
            <div
              className={`w-full h-screen min-h-[813px]${
                !isBrightMode && quizStorage ? "rounded-t-[40px]" : ""
              } bg-secondary_bg`}
            >
              <StoredQuiz
                categoryData={categoryData}
                quizStorageURL={quizStorage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default QuizLabContainer;
