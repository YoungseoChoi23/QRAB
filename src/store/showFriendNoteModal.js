import { create } from "zustand";

const useShowFriendNoteModal = create((set) => ({
  showFriendNoteModal: false,
  setShowFriendNoteModal: (newState) => set({ showFriendNoteModal: newState }),
}));

export default useShowFriendNoteModal;
