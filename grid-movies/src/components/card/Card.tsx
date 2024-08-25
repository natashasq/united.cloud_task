import { click } from "@testing-library/user-event/dist/click";
import PrimaryButton from "../buttons/PrimaryButton";
import React, { useEffect } from "react";
import { formatDate } from "../../utils";
import { moviesStore } from "../../store/store";

type TCardProps = Omit<IMovieItem, "overview" | "originalTitle">;

const Card = ({
  id,
  title,
  poster,
  releaseDate,
  rating,
  isSelected,
  isFavorite,
}: TCardProps) => {
  const { selectMovie } = moviesStore();
  return (
    <div className={"relative rounded-md"} onClick={() => selectMovie(id)}>
      <div className="w-12 h-8 flex justify-center items-center absolute top-0 right-0 bg-yellow text-gray-darkest rounded-bl-md rounded-tr-md z-30">
        {rating.toFixed(1)}
      </div>
      <div
        className={`h-92 w-full rounded-md relative ${
          isSelected && "border-2 border-yellow"
        }`}
      >
        <img src={`${poster}`} className={`h-92 w-full rounded-md`} />
        <PrimaryButton id={id} isFavorite={isFavorite} />
      </div>
      <p className="text-white text-nl">{formatDate(releaseDate)}</p>
      <p className="text-white text-xl font-bold">{title}</p>
    </div>
  );
};

export default Card;
