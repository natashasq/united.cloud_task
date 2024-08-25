import { getAllMovies, getTransformedMovies, postFilteredMovies } from "../api";
import { transformMovieApiData } from "../utils";
import { IMovieItem } from "../types/types";

export const transformDbMoviesData: () => void = async () => {
  try {
    let transformedData;

    const res = await getAllMovies();

    if (res) {
      transformedData = transformMovieApiData(res);
      await postFilteredMovies(transformedData);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMovies: (page: number) => Promise<IMovieItem[]> = async (page) => {
  try {
    const data = await getTransformedMovies(page);
    return data;
  } catch (err) {
    console.log(err);
  }
};
