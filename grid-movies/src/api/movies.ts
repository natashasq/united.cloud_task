import axios from "axios";
import { IMovieItem } from "../types/types";

export const getAllMovies: () => any = async () => {
  try {
    const res = await axios.get(`http://localhost:5001/movies`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFilteredMovies: (data: IMovieItem[]) => any = async (data) => {
  try {
    const transformedMoviesData = await getTransformedMovies(1);
    if (!transformedMoviesData.length) {
      const res = await axios.post("http://localhost:5001/filteredMovies", data);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getTransformedMovies: (page: number) => any = async (page) => {
  try {
    const res = await axios.get(`http://localhost:5001/filteredMovies?_limit=12&_page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
