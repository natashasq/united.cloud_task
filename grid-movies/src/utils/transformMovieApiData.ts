const filterMovies: (apiData: IMovieReponse) => IMovieReponseItem[] = (apiData) => {
    const filteredIds: number[] = [];
    const filteredData: IMovieReponseItem[] = [];

    apiData.filter((item: IMovieReponseItem) => {
        const isDuplicate = filteredIds.includes(item.id);

        if (!isDuplicate) {
            filteredIds.push(item.id);
            filteredData.push(item);
        }
    });

    return filteredData;
}

export const mapMovies: (apiData: IMovieReponse) => any[] = (apiData) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    return apiData.map((item: Partial<IMovieReponseItem>) => {
        return {
            id: item.id,
            title: item.title,
            originalTitle: item.original_title,
            overview: item.overview,
            poster: `${baseUrl}${item.poster_path}`,
            rating: item?.ratings?.filter((ratingItem: { id: string, rating: number }) => ratingItem.id === "imdb")[0].rating,
            releaseDate: item.release_date,
            isFavorite: false,
            isSelected: false
        }
    });
}

export const sortMovies: (apiData: IMovieItem[]) => any[] = (apiData) => {
    return apiData.sort((item1, item2) => item2.rating - item1.rating); 
}
 
 export const transformMovieApiData: (apiData: IMovieReponse) => any = (apiData) => {
    const filtereMovies = filterMovies(apiData);
    const mappedMovies = mapMovies(filtereMovies);
    const sortedMovies = sortMovies(mappedMovies)

    return sortedMovies;
}