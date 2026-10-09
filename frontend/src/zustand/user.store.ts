import { create } from "zustand";

type UserAuth = {
  id: number;
  nome: string;
  email: string;
  token: string;
};

interface UserStore {
  user: UserAuth | null;
  setUser: (user: UserAuth) => void;
  renoveUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: UserAuth) => set({ user }),
  renoveUser: () => set({ user: null }),
}));
