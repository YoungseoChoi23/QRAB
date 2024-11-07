import { create } from "zustand";

const useGeneratedQuizNumStore = create((set) => ({
  generatedQuizNum: 0,
  setGeneratedQuizNum: (newState) => set({ generatedQuizNum: newState }),
}));

export default useGeneratedQuizNumStore;
