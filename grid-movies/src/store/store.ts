import { create } from "zustand";
import { getMovies } from "../api";
import { transformMovieApiData } from "../utils";

type TMoviesStore = {
  loading: boolean;
  paginationLoading: boolean;
  success: boolean;
  error: boolean;
  data: IMovieItem[] | null;
  errorData: any;
  fetchMovies: () => void;
  fetchMoviesNextPage: (page: number) => void;
  currentPage: number;
};

const initialState: TMoviesStore = {
  loading: false,
  paginationLoading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  fetchMovies: () => {},
  fetchMoviesNextPage: () => {},
  currentPage: 1,
};

export const moviesStore = create<TMoviesStore>((set, get) => ({
  ...initialState,

  fetchMovies: async () => {
    set({ loading: true });
    try {
      const res = await getMovies(12, get().currentPage);

      set({
        loading: false,
        success: true,
        data: transformMovieApiData(res),
      });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, loading: false, errorData: err });
    }
  },

  fetchMoviesNextPage: async (page: number) => {
    set({ paginationLoading: true });

    try {
      const prevData = get().data || [];
      const res = await getMovies(12, page);

      set({
        paginationLoading: true,
        success: true,
        data: [...prevData, ...transformMovieApiData(res)],
        currentPage: page,
      });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, paginationLoading: true, errorData: err });
    }
  },
}));

console.log("INIT");

moviesStore.getState().fetchMovies();
