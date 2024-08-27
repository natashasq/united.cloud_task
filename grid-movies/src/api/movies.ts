import axios from "axios";
import { IMovieReponse } from "../types/types";

export const getAllMovies: () => Promise<IMovieReponse> = async () => {
  try {
    const res = await axios.get(`http://localhost:5001/movies`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
