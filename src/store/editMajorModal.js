import { create } from "zustand";

const useEditMajorModal = create((set) => ({
  editMajorModal: false,
  setEditMajorModal: (newState) => set({ editMajorModal: newState }),
}));

export default useEditMajorModal;
