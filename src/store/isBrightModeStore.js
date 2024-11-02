import { create } from "zustand";

const useIsBrightModeStore = create((set) => {
  const initialBrightMode = /^\/solvequiz\/\d+$/.test(window.location.pathname);

  return {
    isBrightMode: initialBrightMode,
    setIsBrightMode: (newState) => set({ isBrightMode: newState }),
  };
});

export default useIsBrightModeStore;
