import React, { useCallback, useEffect, useRef, useState } from "react";
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
    fetchMoviesNextPage,
    currentPage,
  } = moviesStore();
  const bottomRef = useRef<HTMLSpanElement | null>(null);
  const [isRefVisible, setIsRefVisible] = useState<boolean>(false);
  // const bottomRef = useCallback(node: any => {
  //   if (node !== null) {
  //       console.log("ref", node); // node = elRef.current
  //   }
  // }, []);
  console.log(isRefVisible);
  useEffect(() => {
    if (!isRefVisible) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !paginationLoading) {
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
  }, [bottomRef, currentPage, fetchMoviesNextPage, isRefVisible]);

  console.log(bottomRef);
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
      <span
        ref={(el) => {
          if (bottomRef) {
            bottomRef.current = el;
          }
          setIsRefVisible?.(!!el);
        }}
      />
    </Container>
  );
};

export default Home;
