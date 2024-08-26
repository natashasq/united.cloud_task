import React from "react";
import Card from "../components/card/Card";
import InfiniteScroll from "../components/infinite-scroll/InfiniteScroll";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import Loader from "../components/loader/Loader";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";
import { moviesStore, selectSelectedMovie } from "../store/movies-store";

const Home = () => {
  const {
    loading,
    error,
    data,
    paginationLoading,
    totalCount,
    currentPage,
    fetchMoviesNextPage,
  } = moviesStore();
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
    const shouldFetchMoviesNextPage = !!(
      !paginationLoading && totalCount > data?.length
    );

    return (
      <Container>
        <InfiniteScroll
          shouldFetchNextPage={shouldFetchMoviesNextPage}
          fetchNextPageCallback={() => fetchMoviesNextPage(currentPage + 1)}
          isLoading={paginationLoading}
        >
          <GridWrapper>
            {data?.map(({ overview, originalTitle, ...item }, index) => (
              <Card key={item.id} index={index} {...item} />
            ))}
          </GridWrapper>
        </InfiniteScroll>
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
