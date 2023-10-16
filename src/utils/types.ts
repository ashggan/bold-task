import { ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  mousePosition: { x: number; y: number };
  toggleTheme: () => void;
  variants: Object;
};

export type themeContextProps = {
  children: ReactNode;
};

export type Work = {
  title: string;
  discriptopn: string;
  image: string;
};

export interface Item {
  title: string;
  image: string;
}
export interface ItemProb {
  item: Item;
}
