import React, { useEffect, useRef } from "react";
import Card from "../components/card/Card";
import Container from "../components/layout/Container";
import GridWrapper from "../components/layout/GridWrapper";
import Loader from "../components/loader/Loader";
import { moviesStore } from "../store/store";

const Home = () => {
  const {
    loading,
    error,
    data,
    fetchMoviesNextPage,
    currentPage,
    paginationLoading,
  } = moviesStore();
  const bottomRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoviesNextPage(currentPage + 1);
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [bottomRef, currentPage, fetchMoviesNextPage]);

  console.log(bottomRef.current)

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
  return (
    <Container>
      <GridWrapper>
        {data?.map(({ id, overview, originalTitle, ...item }) => (
          <Card key={id} {...item} />
        ))}
      </GridWrapper>
      {paginationLoading && <div>Loading</div>}
      <div ref={bottomRef} className="h-8">
        bottom ref
      </div>
    </Container>
  );
};

export default Home;
