import React from "react";
import favorites from "../../assets/icons/favorites.svg";
import favoritesFull from "../../assets/icons/favorites-full.svg";
import { moviesStore } from "../../store/store";

interface IPrimaryButtonProps {
  id: number;
  isFavorite: boolean;
}

const PrimaryButton = ({ isFavorite, id }: IPrimaryButtonProps) => {
  const { markMovieAsFavorite } = moviesStore();

  return (
    <div
      className="flex absolute left-2 bottom-2 justify-between items-center p-4 rounded-xl bg-gray-500/50 cursor-pointer hover:bg-gray-300/50 z-50"
      onClick={() => markMovieAsFavorite(id)}
    >
      {isFavorite ? (
        <img src={favoritesFull} alt="favorites icon" />
      ) : (
        <img src={favorites} alt="favorites icon" />
      )}
    </div>
  );
};

export default PrimaryButton;
