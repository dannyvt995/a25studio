import { create } from "zustand";

interface IStoreZustand {
  canvasTrack: {
    hero: {
      w: number;
      h: number;
      t: number;
      l: number;
    };
    clent: {
      w: number;
      h: number;
      t: number;
      l: number;
    };
  };
  setHeroDimensions: (w: number, h: number, t: number, l: number) => void;
  setClentDimensions: (w: number, h: number, t: number, l: number) => void;
}

const useStoreZustand = create<IStoreZustand>((set) => ({
  canvasTrack: {
    hero: { w: 0, h: 0, t: 0, l: 0 },
    clent: { w: 0, h: 0, t: 0, l: 0 },
  },
  setHeroDimensions: (w, h, t, l) =>
    set((state) => ({
      canvasTrack: {
        ...state.canvasTrack,
        hero: { w, h, t, l },
      },
    })),
  setClentDimensions: (w, h, t, l) =>
    set((state) => ({
      canvasTrack: {
        ...state.canvasTrack,
        clent: { w, h, t, l },
      },
    })),
}));

export default useStoreZustand;
