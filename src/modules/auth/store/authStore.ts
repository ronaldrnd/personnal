import {create} from "zustand";

interface AuthState {
    user: { name: string; isAuthenticated: boolean };
    login: (userName: string, password: string) => Promise<string>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: { name: "", isAuthenticated: false },
    login: (userName, password) =>
        new Promise((resolve, reject) => {
            if (password === "password") {
                set({ user: { name: userName, isAuthenticated: true } });
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        }),
    logout: () => set({ user: { name: "", isAuthenticated: false } }),
}));
