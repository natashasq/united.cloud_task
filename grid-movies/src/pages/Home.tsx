import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import { transformMovieApiData } from '../utils/transformMovieApiData';
import Card from '../components/card/Card';
import GridWrapper from '../components/layout/GridWrapper';

const Home = () => {
    const [movieData, setMovieData] = useState<IMovieItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMovies(10, 1);
            const data = transformMovieApiData(res);
            setMovieData(data)
        }
        fetchData().catch(console.error);
    }, [])

    return (
        <div className='px-10 flex justify-center items-center md:ml-48'>
            <GridWrapper>
                {movieData.length && movieData.map(({ id, overview, originalTitle, ...item }) => <Card key={id} {...item} />)}
            </GridWrapper>
        </div>

    );
};

export default Home;