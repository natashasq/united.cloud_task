import React, { useEffect } from 'react';
import { getMovies } from '../api';
import { transformMovieApiData } from '../utils/transformMovieApiData';

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {
            const res = await await getMovies();
            const data = transformMovieApiData(res)
        }
        fetchData().catch(console.error);

    }, [])
    return (
        <div className='w-full h-full px-10 flex justify-between items-center'>
            Home
        </div>

    );
};

export default Home;