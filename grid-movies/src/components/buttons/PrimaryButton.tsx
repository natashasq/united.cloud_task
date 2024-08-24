import React from 'react';
import favorites from "../../assets/icons/favorites.svg";
import favoritesFull from "../../assets/icons/favorites-full.svg";

interface IPrimaryButtonProps {
    favorite?: boolean
    onClick: React.MouseEventHandler<HTMLInputElement> 
}

const PrimaryButton = ({ favorite, onClick }: IPrimaryButtonProps) => {
    return (
        <div className='flex absolute left-2 bottom-2 justify-between items-center p-4 rounded-xl bg-gray-500/50 cursor-pointer hover:bg-gray-300/50 z-50'>
            {favorite ? <img src={favoritesFull} alt="favorites icon" /> : <img src={favorites} alt="favorites icon" />}
        </div>

    );
};

export default PrimaryButton;
