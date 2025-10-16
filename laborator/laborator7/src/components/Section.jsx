import React from 'react';

const Section = ({title, children}) => {
    return (
                <section className='text-center p-8 font-bold bg-white/60 backdrop-blur-sm rounded-lg shadow-sm'>
                        <h2 className='text-3xl pb-6 bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text'>{title}</h2>
                        <div className='text-orange-700'>
                            {children}
                        </div>
                </section>
    );
}

export default Section;
