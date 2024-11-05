import { create } from "zustand";

const useAddFriendModalStore = create((set) => ({
  addFriendModal: false,
  setAddFriendModal: (newState) => set({ addFriendModal: newState }),
}));

export default useAddFriendModalStore;
