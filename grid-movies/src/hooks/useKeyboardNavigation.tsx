import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { keyboardNavigationStore } from "../store/keyboard-navigation-store";
import { moviesStore } from "../store/movies-store";
import { BREAKPOINTS } from "../types/types";

const getActiveItemDifference: () => number = () => {
  let activeItemDifference: number = 1;
  if (window.innerWidth >= BREAKPOINTS.sm) {
    activeItemDifference = 2;
  }
  if (window.innerWidth >= BREAKPOINTS.lg) {
    activeItemDifference = 3;
  }
  if (window.innerWidth >= BREAKPOINTS.xl) {
    activeItemDifference = 4;
  }
  return activeItemDifference;
};

const useKeyboardNavigation = (size: number, id: number) => {
  const location = useLocation();
  const { setFavoriteMovie } = moviesStore();
  const { activeItem, setActiveItem } = keyboardNavigationStore();

  const handleKeyPress = useCallback(
    (event: any) => {
      event.preventDefault();
      event.stopPropagation();

      if (event.key === "ArrowRight") {
        setActiveItem(activeItem < size - 1 ? activeItem + 1 : 0);
      }

      if (event.key === "ArrowLeft") {
        setActiveItem(activeItem > 0 ? activeItem - 1 : 0);
      }

      if (event.key === "ArrowDown") {
        setActiveItem(
          activeItem < size - getActiveItemDifference()
            ? activeItem + getActiveItemDifference()
            : activeItem
        );
      }

      if (event.key === "ArrowUp") {
        setActiveItem(
          activeItem >= getActiveItemDifference()
            ? activeItem - getActiveItemDifference()
            : activeItem
        );
      }

      if (event.key === "Enter") {
        if (location.pathname === "/favorites") {
          setActiveItem(activeItem > 0 ? activeItem - 1 : 0);
        }
        setFavoriteMovie(id);
      }
    },
    [activeItem, id, location.pathname, setActiveItem, setFavoriteMovie, size]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [size, id, activeItem, handleKeyPress, setFavoriteMovie, setActiveItem]);

  return { activeItem };
};

export default useKeyboardNavigation;
