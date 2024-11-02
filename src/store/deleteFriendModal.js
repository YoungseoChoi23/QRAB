import { create } from "zustand";

const useDeleteFriendModal = create((set) => ({
  deleteFriendModal: false,
  setDeleteFriendModal: (newState) => set({ deleteFriendModal: newState }),
}));

export default useDeleteFriendModal;
