import { create } from "zustand";
import { getAllMovies } from "../api";
import { IMovieItem } from "../types/types";
import { transformMovieApiData } from "../utils";

type TMoviesStore = {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: IMovieItem[] | null;
  errorData: any;
  selectMovie: (id: number) => void;
  setFavoriteMovie: (id: number) => void;
  fetchMovies: () => void;
};

const initialState: TMoviesStore = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  selectMovie: () => {},
  setFavoriteMovie: () => {},
  fetchMovies: () => {},
};

export const moviesStore = create<TMoviesStore>((set, get) => ({
  ...initialState,

  fetchMovies: async () => {
    set({ loading: true });

    try {
      const res = await getAllMovies();
      const transformedData = transformMovieApiData(res);

      set({
        loading: false,
        success: true,
        data: transformedData,
      });
    } catch (err) {
      set({ error: true, loading: false, errorData: err });
    }
  },

  selectMovie: (id: number) => {
    set(({ data }) => ({
      data: data?.map(({ isSelected, ...item }: IMovieItem) => ({
        ...item,
        isSelected: item.id === id,
      })),
    }));
  },

  setFavoriteMovie: (id: number) => {
    set(({ data }) => ({
      data: data?.map(({ isFavorite, ...item }: IMovieItem) => ({
        ...item,
        isFavorite: item.id === id ? !isFavorite : isFavorite,
      })),
    }));
  },
}));

export const selectFavoriteMovies = () =>
  moviesStore(({ data }) =>
    data?.filter((item: IMovieItem) => item.isFavorite)
  );

export const selectSelectedMovie = () =>
  moviesStore(({ data }) => data?.find((item: IMovieItem) => item.isSelected));

moviesStore.getState().fetchMovies();
