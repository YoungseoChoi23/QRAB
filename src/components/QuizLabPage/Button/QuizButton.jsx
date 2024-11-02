import { useEffect } from "react";
import useIsCreateQuizModalStore from "../../../store/isCreateQuizModalStore";
import useNoteTitleStore from "../../../store/useNoteTitleStore";
import useNoteIdStore from "../../../store/useNoteIdStore";
import { useNavigate } from "react-router-dom";

//solveQuiz는 퀴즈 풀기 페이지에서 노트 호버링 시 퀴즈 세트 보기 버튼 눌렀을 때 핸들러를 구분하기 위함
//퀴즈 풀기 페이지에서 들어온 거라면 solveQuiz=true, 퀴즈 연구소에서 퀴즈 생성할 때는 solveQuiz=false
const QuizButton = ({ buttonText, noteName, noteId, solveQuiz = false }) => {
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  const { noteTitle, setNoteTitle } = useNoteTitleStore();
  const { setNoteId } = useNoteIdStore();
  const navigate = useNavigate();
  const handleQuizButton = () => {
    if (solveQuiz) {
      navigate(`/solvequiz/quizset/${noteId}`);
    } else {
      setNoteTitle(noteName);
      setNoteId(noteId);
      setIsCreateQuizModal(true);
    }
  };
  return (
    <button
      onClick={handleQuizButton}
      className="cursor-pointer bg-transparent border-[1px] border-[1px] border-secondary_skyblue rounded-[4px] w-[124px] h-[41px] text-[14px] font-medium text-secondary_skyblue"
    >
      {buttonText}
    </button>
  );
};

export default QuizButton;
