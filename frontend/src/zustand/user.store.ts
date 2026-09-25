import { create } from "zustand";

type UserAuth = {
  id: number;
  nome: string;
  email: string;
};

interface UserStore {
  user: UserAuth | null;
}

export const useUserStore = create<UserStore>(() => ({
  user: null,
}));
