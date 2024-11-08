import { create } from "zustand";

const useIsBrightModeStore = create((set) => {
  const initialBrightMode =
   /^\/(?!$)(solvequiz\/quizset\/\d+\/(solving|marked)\/\d+|mypage)$/..test(
      window.location.pathname
    );

  return {
    isBrightMode: initialBrightMode,
    setIsBrightMode: (newState) => set({ isBrightMode: newState }),
  };
});

export default useIsBrightModeStore;
