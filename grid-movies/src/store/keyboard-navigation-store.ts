import { create } from "zustand";

type TKeyboardNavigationStore = {
  activeItem: number;
  setActiveItem: (activeItem: number) => void;
};

const initialState: TKeyboardNavigationStore = {
  activeItem: 0,
  setActiveItem: () => {},
};

export const keyboardNavigationStore = create<TKeyboardNavigationStore>(
  (set, get) => ({
    ...initialState,

    setActiveItem: (activeItem: number) => {
      set({ activeItem });
    },
  })
);
