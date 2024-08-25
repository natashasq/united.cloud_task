import React, { useEffect, useRef } from "react";
import Card from "../components/card/Card";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import { selectFavoriteMovies } from "../store/store";

const Faovites = () => {
  const favoriteMovies = selectFavoriteMovies();
  return (
    <Container>
      <GridWrapper>
        {favoriteMovies?.map(({ overview, originalTitle, ...item }) => (
          <Card key={item.id} {...item} />
        ))}
      </GridWrapper>
    </Container>
  );
};

export default Faovites;
