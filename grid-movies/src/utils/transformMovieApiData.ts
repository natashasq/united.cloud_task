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

    const data = filterData(apiData);
    const baseUrl = BASE_URL.url;

    return data.map((item: Partial<IMovieReponseItem>) => {
        return {
            id: item.id,
            title: item.title,
            originalTitle: item.original_title,
            overview: item.overview,
            poster: `${baseUrl}${item.poster_path}`,
            rating: item?.ratings?.filter((ratingItem: { id: string, rating: number }) => ratingItem.id === "imdb")[0].rating
        }
    });
}

export const transformMovieApiData: (apiData: IMovieReponse) => any = async (apiData) => {
    const filteredData = filterData(apiData);
    const data = await mapMovieData(filteredData);
}