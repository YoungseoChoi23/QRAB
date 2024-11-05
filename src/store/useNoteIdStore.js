import create from "zustand";

const useNoteIdStore = create((set) => ({
  currentNoteId: "",
  setCurrentNoteId: (newState) => set({ noteId: newState }),
}));

export default useNoteIdStore;
