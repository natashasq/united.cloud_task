import React from 'react';
import favorites from "../../assets/icons/favorites.svg";
import favoritesFull from "../../assets/icons/favorites-full.svg";

interface IPrimaryButtonProps {
    favorite?: boolean
    onClick: React.MouseEventHandler<HTMLInputElement> 
}

const PrimaryButton = ({ favorite, onClick }: IPrimaryButtonProps) => {
    return (
        <div className='flex justify-between items-center p-4 rounded-xl bg-gray-700/35 cursor-pointer hover:bg-gray-700'>
            {favorite ? <img src={favoritesFull} alt="favorites icon" /> : <img src={favorites} alt="favorites icon" />}
        </div>

    );
};

export default PrimaryButton;
