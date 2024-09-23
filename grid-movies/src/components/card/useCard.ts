import { moviesStore, selectMovieItem } from "../../store/movies-store";
import { keyboardNavigationStore } from "../../store/keyboard-navigation-store";
import useFocus from "../../hooks/useFocus";
import { IMovieItem } from "../../types/types";
import { useCallback, useEffect } from "react";

export const useCard = ({ id, index }: { id: number; index: number }) => {
  const { activeItem, setActiveItem } = keyboardNavigationStore();
  const { selectMovie } = moviesStore();
  const movie: IMovieItem | undefined = selectMovieItem(id);
  const cardRef = useFocus(activeItem === index);

  const handleClick = useCallback(() => {
    selectMovie(id);
    setActiveItem(index);
  }, [id, index, selectMovie, setActiveItem]);

  useEffect(() => {
    if (activeItem === index) selectMovie(id);
  }, [activeItem, index, id, selectMovie]);

  return { movie, cardRef, handleClick };
};
