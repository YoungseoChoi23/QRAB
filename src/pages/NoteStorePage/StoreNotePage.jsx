import { useQuery } from "@tanstack/react-query";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import NoteStore from "../../components/NoteStorePage/NoteStoreContainer";
import { getCategory, getStoredNote } from "../../services/api/noteStore";
import { useState } from "react";
import useIsSelectCategoryModal from "../../store/isSelectCategoryModalStore";
import useIsEditCategoryModal from "../../store/isEditCategoryModalStore";
import useIsDeleteCategoryModal from "../../store/isDeleteCategoryModalStore";
import useIsAddCategoryModal from "../../store/isAddCategoryModalStore";
import useIsAddNotModal from "../../store/isAddNoteModal";
import useIsAddFileNote from "../../store/isAddFileNote";
import useIsAddLinkNote from "../../store/isAddLinkNote";
import useIsNoteSummaryModalStore from "../../store/isNoteSummaryModalStore";
import NoteSummaryModal from "../../components/NoteStorePage/Modal/NoteSummaryModal";
import AddLinkNoteModal from "../../components/NoteStorePage/Modal/AddLinkNoteModal";
import AddFileNoteModal from "../../components/NoteStorePage/Modal/AddFileNoteModal";
import AddNoteModal from "../../components/NoteStorePage/Modal/AddNoteModal";
import DeleteCategoryModal from "../../components/NoteStorePage/Modal/DeleteCategoryModal";
import EditCategoryModal from "../../components/NoteStorePage/Modal/EditCategoryModal";
import AddCategoryModal from "../../components/NoteStorePage/Modal/AddCategoryModal";
import SelectButtonModal from "../../components/NoteStorePage/Modal/SelectButtonModal";

const StoreNotePage = () => {
  const [page, setPage] = useState(0);
  const { isSelectCategoryModal, setIsSelectCategoryModal } =
    useIsSelectCategoryModal();
  const { isAddCategoryModal, setIsAddCategoryModal } = useIsAddCategoryModal();
  const { isEditCategoryModal, setIsEditCategoryModal } =
    useIsEditCategoryModal();
  const { isDeleteCategoryModal, setIsDeleteCategoryModal } =
    useIsDeleteCategoryModal();
  const { isAddNoteModal, setIsAddNoteModal } = useIsAddNotModal();
  const { isAddFileNote, setIsAddFileNote } = useIsAddFileNote();
  const { isAddLinkNote, setIsAddLinkNote } = useIsAddLinkNote();
  const { isNoteSummaryModal, setIsNoteSummaryModal, isNoteData } =
    useIsNoteSummaryModalStore();
  const {
    isError: isCategoryError,
    data: categoryData,
    error: categoryError,
  } = useQuery({
    queryKey: ["getCategory"],
    queryFn: getCategory,
  });

  const {
    data: noteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["noteData", page],
    queryFn: () => getStoredNote(page),
  });

  if (isCategoryError) {
    console.error("Error fetching categories:", categoryError);
    return <div>오류 발생: {categoryError.message}</div>;
  }

  if (!categoryData) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <>
      <PageDefauleTemplate pageName="노트 저장소">
        <NoteStore categoryData={categoryData} noteData={noteData} />
      </PageDefauleTemplate>

      {isSelectCategoryModal && (
        <SelectButtonModal setModal={setIsSelectCategoryModal} />
      )}
      {isAddCategoryModal && (
        <AddCategoryModal
          setModal={setIsAddCategoryModal}
          categoryData={categoryData}
        />
      )}
      {isEditCategoryModal && (
        <EditCategoryModal
          setModal={setIsEditCategoryModal}
          categoryData={categoryData}
        />
      )}
      {isDeleteCategoryModal && (
        <DeleteCategoryModal
          setModal={setIsDeleteCategoryModal}
          categoryData={categoryData}
        />
      )}
      {isAddNoteModal && <AddNoteModal setModal={setIsAddNoteModal} />}
      {isAddFileNote && <AddFileNoteModal setModal={setIsAddFileNote} />}
      {isAddLinkNote && (
        <AddLinkNoteModal
          setModal={setIsAddLinkNote}
          categoryData={categoryData}
        />
      )}
      {isNoteSummaryModal && (
        <NoteSummaryModal
          title={isNoteData.title}
          contents={isNoteData.chatgptContent}
          category={isNoteData.parentCategoryName}
          childCategory={isNoteData.categoryName}
          setModal={setIsNoteSummaryModal}
        />
      )}
    </>
  );
};
export default StoreNotePage;
