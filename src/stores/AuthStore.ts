import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
    _id: string;
    name: string;
    firstName?: string;
    email: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    updateUser: (user: User | null) => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            login: (user: User, token: string) => {
                set({ user, token });
            },
            logout: () => {
                set({ user: null, token: null });
            },
            updateUser: (user: User | null) => {
                set({ user });
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
            // Add onRehydrateStorage to handle hydration
            onRehydrateStorage: () => (state) => {
                // This function runs after the store is hydrated
            }
        }
    )
);

export default useAuthStore;
