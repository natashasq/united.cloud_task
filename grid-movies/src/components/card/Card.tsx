import React from "react";
import CardMemo from "./CardMemo";
import { useCard } from "./useCard";

type TCardProps = {
  id: number;
  index: number;
};

const Card = ({ id, index }: TCardProps) => {
  const { movie, cardRef, handleClick } = useCard({ id, index });

  if (movie) {
    return <CardMemo {...movie} handleClick={handleClick} ref={cardRef} />;
  }

  return null;
};

export default Card;
