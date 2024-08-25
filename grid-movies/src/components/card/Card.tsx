import { click } from "@testing-library/user-event/dist/click";
import PrimaryButton from "../buttons/PrimaryButton";
import React, { useEffect } from "react";
import { formatDate } from "../../utils";

type TCardProps = Omit<IMovieItem, "id" | "overview" | "originalTitle"> & {
  measureRef?: any;
};

const Card = ({
  measureRef,
  title,
  poster,
  releaseDate,
  rating,
}: TCardProps) => {
  return (
    <div ref={measureRef} className="relative rounded-md">
      <div className="w-12 h-8 flex justify-center items-center absolute top-0 right-0 bg-yellow text-gray-darkest rounded-bl-md rounded-tr-md z-30">
        {rating?.toFixed(1)}
      </div>
      <div className="h-92 w-full rounded-md relative">
        <img src={`${poster}`} className={`h-92 w-full rounded-md`} />
        <PrimaryButton onClick={() => console.log(click)} />
      </div>
      <p className="text-white text-nl">{formatDate(releaseDate)}</p>
      <p className="text-white text-xl font-bold">{title}</p>
    </div>
  );
};

export default Card;
