import React from "react";
import { moviesStore } from "../../store/movies-store";

interface IPrimaryButtonProps {
  id: number;
  isFavorite: boolean;
}

const PrimaryButton = ({ isFavorite, id }: IPrimaryButtonProps) => {
  const { setFavoriteMovie } = moviesStore();

  return (
    <div
      className="flex absolute left-2 bottom-2 justify-between items-center p-4 rounded-xl bg-gray-500/50 cursor-pointer hover:bg-gray-300/50 z-50"
      onClick={() => setFavoriteMovie(id)}
    >
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill={isFavorite ? "#F8F8F8" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6 1C9.29038 1 10.8323 1.84142 12 2.8C13.1677 1.84142 14.7096 1 16.4 1C20.0451 1 23 3.71049 23 7.05386C23 13.795 15.3274 17.721 12.7981 18.8321C12.2886 19.056 11.7114 19.056 11.2019 18.8321C8.67259 17.721 1 13.7948 1 7.0537C1 3.71033 3.95492 1 7.6 1Z"
          stroke="#F8F8F8"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default PrimaryButton;
