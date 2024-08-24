import axios from "axios";

export const getMovies: (arg0: number, arg1: number) => any = async (limit, page) => {
  try {
    const response = await axios.get(`/movies?_limit=${limit}&_page=${page}`, { baseURL: "http://localhost:5001/" });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}