import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("VMCall-theme") || "luxury",
  setTheme: (theme) => {
    localStorage.setItem("VMCall-theme", theme);
    set({ theme });
  },
}));