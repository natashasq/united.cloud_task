const filterData: (apiData: IMovieReponse) => IMovieReponseItem[] = (apiData) => {
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

export const mapMovieData: (apiData: IMovieReponse) => any[] = (apiData) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    return apiData.map((item: Partial<IMovieReponseItem>) => {
        return {
            id: item.id,
            title: item.title,
            originalTitle: item.original_title,
            overview: item.overview,
            poster: `${baseUrl}${item.poster_path}`,
            rating: item?.ratings?.filter((ratingItem: { id: string, rating: number }) => ratingItem.id === "imdb")[0].rating,
            releaseDate: item.release_date
        }
    });
}

export const transformMovieApiData: (apiData: IMovieReponse) => any = (apiData) => {
    const filteredData = filterData(apiData);
    const data = mapMovieData(filteredData);
    return data;
}