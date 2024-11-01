import { create } from "zustand";

const useIsNoteSummaryModalStore = create((set) => ({
  isNoteSummaryModal: false,
  isNoteData: {},
  setIsNoteSummaryModal: (newState) => set({ isNoteSummaryModal: newState }),
  setIsNoteData: (newState) => set({ isNoteData: newState }),
}));

export default useIsNoteSummaryModalStore;
