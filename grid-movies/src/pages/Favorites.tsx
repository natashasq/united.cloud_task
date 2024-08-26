import React from "react";
import Card from "../components/card/Card";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";
import {
  selectFavoriteMovies,
  selectSelectedMovie,
} from "../store/movies-store";

const Favorites = () => {
  const favoriteMovies = selectFavoriteMovies();
  const selectedMovie = selectSelectedMovie();

  useKeyboardNavigation(favoriteMovies?.length ?? 0, selectedMovie?.id ?? 0);

  return (
    <Container>
      <GridWrapper>
        {favoriteMovies?.map(({ overview, originalTitle, ...item }, index) => (
          <Card key={item.id} index={index} {...item} />
        ))}
      </GridWrapper>
    </Container>
  );
};

export default Favorites;
