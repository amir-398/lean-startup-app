import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
