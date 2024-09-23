import React from "react";
import Card from "../components/card/Card";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import Loader from "../components/loader/Loader";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";
import { moviesStore, selectSelectedMovie } from "../store/movies-store";

const Home = () => {
  const { loading, error, data } = moviesStore();
  const selectedMovie = selectSelectedMovie();

  useKeyboardNavigation(data?.length ?? 0, selectedMovie?.id ?? 0);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Something went wrong...</p>
      </Container>
    );
  }

  if (data?.length) {
    return (
      <Container>
        <GridWrapper>
          {data?.map(({ id }, index) => (
            <Card key={id} index={index} id={id}/>
          ))}
        </GridWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default Home;
