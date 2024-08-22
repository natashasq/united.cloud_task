import axios from "axios";

export const getMovies: () => any = async () => {
  try {
    const response = await axios.get('/movies', { baseURL: "http://localhost:5001/" });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}