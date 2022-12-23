import create from "zustand";
import { RootStore } from "./state.types";

export const store = create<RootStore>()(
    (set) => ({
        characters: [],
        updateCharacters: (newChars) => {
            set((state: RootStore) => ({
                ...state,
                characters: newChars
            }))
        }
    })
)