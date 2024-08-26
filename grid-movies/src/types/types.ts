export enum BASE_URL {
    url = "https://image.tmdb.org/t/p/w500"
}

export enum BASE_DB_URL {
    url = "http://localhost:5001/"
}

export enum BREAKPOINTS {
    sm = 640,
    md = 768,
    lg = 1024,
    xl = 1280,
    "2xl" = 1536
}

export type IMovieReponse = IMovieReponseItem[];

export interface IMovieReponseItem {
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

export interface IMovieItem {
    id: number
    title: string,
    originalTitle: string,
    overview: string,
    poster: BASE_URL.url,
    rating: number,
    releaseDate: string
    isFavorite: boolean,
    isSelected: boolean
}