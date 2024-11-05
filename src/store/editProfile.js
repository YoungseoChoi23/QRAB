import { create } from "zustand";

const useEditProfileStore = create((set) => ({
  editProfile: false,
  setEditProfile: (newState) => set({ editProfile: newState }),
}));

export default useEditProfileStore;
