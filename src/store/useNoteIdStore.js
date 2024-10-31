import create from "zustand";

const useNoteIdStore = create((set) => ({
  noteId: "",
  setNoteId: (newState) => set({ noteId: newState }),
}));

export default useNoteIdStore;
