import React from 'react';

const Header = () => {
    return (
        <header className='w-full p-4 flex items-center justify-between'>
            <div className='text-xl font-extrabold bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>PAPP - Toamna</div>
            <nav>
                <button className='px-3 py-1 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition'>Explore</button>
            </nav>
        </header>
    );
}

export default Header;
