import { IMovieItem, IMovieReponse, IMovieReponseItem } from "../types/types";

const reduceMovies: (apiData: IMovieReponse) => IMovieReponse = (apiData) =>
  apiData.reduce(
    (acc: IMovieReponseItem[], item: IMovieReponseItem) =>
      acc.find(({ id }) => id === item.id) ? acc : [...acc, item],
    []
  );

export const mapMovies: (apiData: IMovieReponse) => IMovieItem[] = (
  apiData
) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return apiData.map(
    ({
      id,
      title,
      original_title,
      overview,
      poster_path,
      ratings,
      release_date,
    }: Omit<
      IMovieReponseItem,
      "backdrop_path" | "genre_ids" | "video" | "adult"
    >) => ({
      id: id,
      title: title,
      originalTitle: original_title,
      overview: overview,
      poster: poster_path ? `${baseImageUrl}${poster_path}` : "",
      rating: ratings?.filter(
        (ratingItem: { id: string; rating: number }) => ratingItem.id === "imdb"
      )[0].rating,
      releaseDate: release_date,
      isFavorite: false,
      isSelected: false,
    })
  );
};

export const sortMovies: (apiData: IMovieItem[]) => IMovieItem[] = (
  apiData
) => {
  return apiData.sort((item1, item2) => item2.rating - item1.rating);
};

export const transformMovieApiData: (apiData: IMovieReponse) => IMovieItem[] = (
  apiData
) => {
  const filteredMovies = reduceMovies(apiData);
  const mappedMovies = mapMovies(filteredMovies);
  const sortedMovies = sortMovies(mappedMovies);

  return sortedMovies;
};
