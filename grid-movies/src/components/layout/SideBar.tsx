import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//ASSETS
import home from "../../assets/icons/home.svg";
import homeActive from "../../assets/icons/home-active.svg";
import favorites from "../../assets/icons/favorites.svg";
import favoritesActive from "../../assets/icons/favorites-active.svg";

const SideBar = () => {
    const location = useLocation();

    return (
        <div className="h-fit flex w-full px-8 z-10 absolute left-0 gap-7 md:flex-col md:w-48 md:gap-2">
            <Link to={"/home"}>
                {location.pathname === "/home" ?
                    <div className="w-full h-8 flex justify-between items-center color-gray py-4 border-b-2 border-b-yellow md:border-r-2 md:border-r-yellow md:border-b-0"
                    >
                        <div className='flex justify-between gap-4'>
                            <img src={homeActive} alt="home icon active" />
                            <p className='text-yellow'>Home</p>
                        </div>
                    </div> : <div className="w-full h-8 flex justify-between items-center color-gray py-4">
                        <div className='flex justify-between gap-4'>
                            <img src={home} alt="home icon" />
                            <p className='text-gray'>Home</p>
                        </div>
                    </div>}
            </Link>
            <Link to={"/favorites"}>
                {location.pathname === "/favorites" ?
                    <div className="w-full h-8 flex justify-between items-center color-gray py-4 border-b-2 border-b-yellow md:border-r-2 md:border-r-yellow md:border-b-0"
                    >
                        <div className='flex justify-between gap-4'>
                            <img src={favoritesActive} alt="favorites icon active" />
                            <p className='text-yellow'>Favorites</p>
                        </div>
                    </div> : <div className="w-full h-8 flex justify-between items-center color-gray py-4">
                        <div className='flex justify-between gap-4'>
                            <img src={favorites} alt="favorites icon" />
                            <p className='text-gray'>Favorites</p>
                        </div>
                    </div>}
            </Link>
        </div>
    );
};

export default SideBar;
