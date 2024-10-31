import create from "zustand";

const useNoteTitleStore = create((set) => ({
  noteTitle: "",
  setNoteTitle: (newState) => set({ noteTitle: newState }),
}));

export default useNoteTitleStore;
