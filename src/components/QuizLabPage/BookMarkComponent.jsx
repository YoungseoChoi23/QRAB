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
import BookMarkedQuiz from "./BookMarkedQuiz";

const BookMarkComponent = ({ categoryData }) => {
  const [page, setPage] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState([]);

  const {
    data: noteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["noteData", page],
    queryFn: () => getStoredNote(page),
  });

  useEffect(() => {
    if (noteData) {
      setSelectedNotes(noteData.sixNotesInfo); // noteData가 로드된 후 selectedNotes 업데이트
    }
  }, [noteData]);

  const FilteredNote = async (id) => {
    console.log(id);
    const res = await getCategoryFilterData(id, 0);
    setSelectedNotes(res.sixNotesInfo);
  };
  return (
    <>
      <div className="flex flex-col items-center overflow-y-hidden relative ">
        <BookMarkedQuiz categoryData={categoryData} />
      </div>
    </>
  );
};
export default BookMarkComponent;
