import React, { useState } from "react";
import { moviesStore } from "../../store/store";
import { formatDate } from "../../utils";
import PrimaryButton from "../buttons/PrimaryButton";
import { IMovieItem } from "../../types/types";

type TCardProps = Omit<IMovieItem, "overview" | "originalTitle">

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
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div
      className={"flex flex-col relative rounded-md"}
      onClick={() => selectMovie(id)}
    >
      <div className="w-12 h-8 flex justify-center items-center absolute top-0 right-0 bg-yellow text-gray-darkest rounded-bl-md rounded-tr-md z-30">
        {rating.toFixed(1)}
      </div>
      <div
        className={`flex flex-col h-96 w-full rounded-md relative ${
          isSelected && "border-2 border-yellow"
        }`}
      >
        {loading && <span className="h-96 w-full rounded-md bg-gray-darkest" />}
        <img
          src={`${poster}`}
          className={`${loading && "hidden"} h-96 w-full rounded-md`}
          onLoad={() => setLoading(false)}
        />
        <PrimaryButton id={id} isFavorite={isFavorite} />
      </div>
      <p className="text-white text-nl">{formatDate(releaseDate)}</p>
      <p className="text-white text-xl font-bold">{title}</p>
    </div>
  );
};

export default Card;
