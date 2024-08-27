import { BREAKPOINTS } from "../types/types";

export const getColumnCount: () => number = () => {
  let columnCount: number = 1;
  if (window.innerWidth >= BREAKPOINTS.sm) {
    columnCount = 2;
  }
  if (window.innerWidth >= BREAKPOINTS.lg) {
    columnCount = 3;
  }
  if (window.innerWidth >= BREAKPOINTS.xl) {
    columnCount = 4;
  }
  return columnCount;
};
