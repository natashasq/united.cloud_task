import React from 'react';
import { Link } from 'react-router-dom';
//ASSETS
import logo from "../../assets/icons/logo.svg";
import sort from "../../assets/icons/sort.svg";

const Header = () => {
    return (
        <div className='w-full h-24 px-10 flex justify-center items-center mb-10 md:justify-start'>
            <Link to={"/home"}>
                <div className="flex flexi-col gap-0 ml-[-62px]">
                    <img src={logo} alt="home icon" className='h-[120px]' />
                    <div className='w-20 flex flex-col'>
                        <p className='text-xl text-yellow'>Grid</p>
                        <p className='text-3xl text-yellow'>Movies</p>
                    </div>
                </div>
            </Link>
            {/* <div className='max-h-full flex gap-2  py-2 px-4 items-center'>
                <p className='text-gray text-lg hover:border-b-2 border-gray'>Sort by</p>
                <img src={sort} alt="home icon" className='h-6' />
            </div> */}
        </div>

    );
};

export default Header;
