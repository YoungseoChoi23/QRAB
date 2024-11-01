import { useEffect } from "react";
import useIsCreateQuizModalStore from "../../../store/isCreateQuizModalStore";
import useNoteTitleStore from "../../../store/useNoteTitleStore";
import useNoteIdStore from "../../../store/useNoteIdStore";

const QuizButton = ({ buttonText, noteName, noteId }) => {
  const { setIsCreateQuizModal } = useIsCreateQuizModalStore();
  const { noteTitle, setNoteTitle } = useNoteTitleStore();
  const { setNoteId } = useNoteIdStore();
  const handleCreateQuizButton = () => {
    setNoteTitle(noteName);
    setNoteId(noteId);
    setIsCreateQuizModal(true);
  };
  return (
    <button
      onClick={handleCreateQuizButton}
      className="cursor-pointer bg-transparent border-[1px] border-[1px] border-secondary_skyblue rounded-[4px] w-[124px] h-[41px] text-[14px] font-medium text-secondary_skyblue"
    >
      {buttonText}
    </button>
  );
};

export default QuizButton;
