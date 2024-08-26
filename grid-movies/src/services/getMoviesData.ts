import { getAllMovies, postFilteredMovies } from "../api";
import { transformMovieApiData } from "../utils";

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
