import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useFocus from "../../hooks/useFocus";
import { keyboardNavigationStore } from "../../store/keyboard-navigation-store";
import { moviesStore } from "../../store/movies-store";
import { IMovieItem } from "../../types/types";
import { formatDate } from "../../utils";
import PrimaryButton from "../buttons/PrimaryButton";

type TCardProps = Omit<IMovieItem, "overview" | "originalTitle"> & {
  index: number;
};

const Card = ({
  id,
  title,
  poster,
  releaseDate,
  rating,
  isSelected,
  isFavorite,
  index,
}: TCardProps) => {
  const { activeItem, setActiveItem } = keyboardNavigationStore();
  const { selectMovie } = moviesStore();
  const itemRef = useFocus(activeItem === index);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  useEffect(() => {
    if (activeItem === index) selectMovie(id);
  }, [activeItem, index, id, selectMovie]);

  return (
    <div
      ref={itemRef}
      className={"flex flex-col relative rounded-md cursor-pointer"}
      onClick={() => {
        selectMovie(id);
        setActiveItem(index);
      }}
    >
      <div className="w-12 h-8 flex justify-center items-center absolute top-0 right-0 bg-yellow text-gray-darkest rounded-bl-md rounded-tr-md z-30">
        {rating.toFixed(1)}
      </div>
      <div
        className={clsx(
          "flex flex-col h-auto w-full rounded-md relative border-2",
          { "border-yellow": isSelected, "border-transparent": !isSelected }
        )}
      >
        {isImageLoading && (
          <span className="h-auto w-full rounded-md bg-gray-darkest aspect-[3/4]" />
        )}
        <img
          alt="Movie poster"
          src={`${poster}`}
          className={`${
            isImageLoading && "hidden"
          } h-auto w-full rounded-md aspect-[3/4]`}
          onLoad={() => setIsImageLoading(false)}
        />
        <PrimaryButton id={id} isFavorite={isFavorite} />
      </div>
      {releaseDate && (
        <p className="text-white text-nl">{formatDate(releaseDate)}</p>
      )}
      <p className="text-white text-xl font-bold">{title}</p>
    </div>
  );
};

export default Card;
