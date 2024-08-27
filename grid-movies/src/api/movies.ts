import axios from "axios";
import { IMovieItem, IMovieReponse } from "../types/types";

export const getAllMovies: () => Promise<IMovieReponse> = async () => {
  try {
    const res = await axios.get(`http://localhost:5001/movies`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFilteredMovies: (data: IMovieItem[]) => Promise<IMovieItem[]> = async (data) => {
  try {
    //@ts-ignore
    const { data } = await getTransformedMovies(1);
    if (!data.length) {
      const res = await axios.post(
        "http://localhost:5001/filteredMovies",
        data
      );
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

//@ts-ignore
export const getTransformedMovies: (page: number) => Promise<{data: IMovieItem[], totalCount: string}> = async (page) => {
  try {
    const res = await axios.get(
      `http://localhost:5001/filteredMovies?_limit=12&_page=${page}`
    );
    return { data: res.data, totalCount: res.headers["x-total-count"] };
  } catch (error) {
    console.error(error);
  }
};
