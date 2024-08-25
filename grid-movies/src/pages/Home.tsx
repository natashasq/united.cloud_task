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
    paginationLoading,
  } = moviesStore();
  const bottomRef = useRef(null);
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
        {data?.map(({ overview, originalTitle, ...item }) => (
          <Card key={item.id} {...item} />
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