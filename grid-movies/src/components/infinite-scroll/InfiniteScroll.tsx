import React, { ReactNode, useEffect, useRef } from "react";
import Loader from "../../components/loader/Loader";

const InfiniteScroll = ({
  children,
  shouldFetchNextPage,
  isLoading,
  fetchNextPageCallback,
}: {
  children: ReactNode;
  shouldFetchNextPage: boolean;
  isLoading: boolean;
  fetchNextPageCallback: () => void;
}) => {
  const intersectionRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const intersectionRefElement = intersectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && shouldFetchNextPage) {
        fetchNextPageCallback();
      }
    });

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRefElement) {
        observer.unobserve(intersectionRefElement);
      }
    };
  }, [intersectionRef, shouldFetchNextPage, fetchNextPageCallback]);

  return (
    <>
      {children}
      <span ref={intersectionRef}>
        {isLoading && <Loader className="h-20 flex items-center" />}
      </span>
    </>
  );
};

export default InfiniteScroll;
