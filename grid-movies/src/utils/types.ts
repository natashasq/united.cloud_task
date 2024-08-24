enum BASE_URL {
    url = "https://image.tmdb.org/t/p/w500"
}

type IMovieReponse = IMovieReponseItem[];

interface IMovieReponseItem {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string | null,
    title: string,
    video: boolean,
    ratings:
    {
        id: string,
        rating: number
    }[],
    release_date: string
}

interface IMovieItem {
    id: number
    title: string,
    originalTitle: string,
    overview: string,
    poster: BASE_URL.url,
    rating: number,
    releaseDate: string
}