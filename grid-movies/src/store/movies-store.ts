import { create } from "zustand";
import { getTransformedMovies } from "../api";
import { IMovieItem } from "../types/types";

type TMoviesStore = {
  loading: boolean;
  paginationLoading: boolean;
  success: boolean;
  error: boolean;
  data: IMovieItem[] | null;
  errorData: any;
  currentPage: number;
  totalCount: number;
  selectMovie: (id: number) => void;
  setFavoriteMovie: (id: number) => void;
  fetchMovies: () => void;
  fetchMoviesNextPage: (page: number) => void;
};

const initialState: TMoviesStore = {
  loading: false,
  paginationLoading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  currentPage: 1,
  totalCount: 0,
  selectMovie: () => {},
  setFavoriteMovie: () => {},
  fetchMovies: () => {},
  fetchMoviesNextPage: () => {},
};

export const moviesStore = create<TMoviesStore>((set, get) => ({
  ...initialState,

  fetchMovies: async () => {
    set({ loading: true });

    try {
      const { data, totalCount } = await getTransformedMovies(
        get().currentPage
      );

      set({
        loading: false,
        success: true,
        data,
        totalCount: parseInt(totalCount),
      });
    } catch (err) {
      set({ error: true, loading: false, errorData: err });
    }
  },

  fetchMoviesNextPage: async (page: number) => {
    set({ paginationLoading: true });

    try {
      const { data: nextData } = await getTransformedMovies(page);

      set(({ data: prevData }) => ({
        paginationLoading: false,
        success: true,
        data: prevData ? [...prevData, ...nextData] : nextData,
        currentPage: page,
      }));
    } catch (err) {
      set({ error: true, paginationLoading: true, errorData: err });
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
