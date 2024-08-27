import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { keyboardNavigationStore } from "../store/keyboard-navigation-store";
import { moviesStore } from "../store/movies-store";
import { getColumnCount } from "../utils/getColumnCount";

const useKeyboardNavigation = (size: number, id: number) => {
  const location = useLocation();
  const { setFavoriteMovie } = moviesStore();
  const { activeItem, setActiveItem } = keyboardNavigationStore();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
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
          activeItem < size - getColumnCount()
            ? activeItem + getColumnCount()
            : activeItem
        );
      }

      if (event.key === "ArrowUp") {
        setActiveItem(
          activeItem >= getColumnCount()
            ? activeItem - getColumnCount()
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
