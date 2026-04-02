import { create } from 'zustand';

interface CustomizerState {
  selectedAnimationId: string | null;
  color: string;
  size: number;
  speed: number;
  strokeWidth: number;
  selectAnimation: (id: string | null) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setSpeed: (speed: number) => void;
  setStrokeWidth: (width: number) => void;
  reset: () => void;
}

const defaults = {
  color: '#EB742E',
  size: 48,
  speed: 1,
  strokeWidth: 2,
};

export const useCustomizerStore = create<CustomizerState>((set) => ({
  selectedAnimationId: null,
  ...defaults,
  selectAnimation: (id) => set({ selectedAnimationId: id, ...defaults }),
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setSpeed: (speed) => set({ speed }),
  setStrokeWidth: (strokeWidth) => set({ strokeWidth }),
  reset: () => set(defaults),
}));
