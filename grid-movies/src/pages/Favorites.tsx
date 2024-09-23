import React from "react";
import Card from "../components/card/Card";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";
import {
  selectFavoriteMovies,
  selectSelectedMovie,
} from "../store/movies-store";
import EmptyState from "../components/empty-state/EmptyState";

const Favorites = () => {
  const favoriteMovies = selectFavoriteMovies();
  const selectedMovie = selectSelectedMovie();

  useKeyboardNavigation(favoriteMovies?.length ?? 0, selectedMovie?.id ?? 0);

  return (
    <Container>
      {favoriteMovies?.length ? (
        <GridWrapper>
             {favoriteMovies?.map(({ id }, index) => (
            <Card key={id} index={index} id={id}/>
          ))}
        </GridWrapper>
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};

export default Favorites;
