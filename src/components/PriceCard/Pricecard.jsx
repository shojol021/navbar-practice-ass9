import React from 'react';
import Features from '../Features/Features';

const Pricecard = ({ details }) => {
    return (
        <div className='bg-sky-700 rounded-md p-5'>
            <h2 className='text-5xl text-white'>{details.price}<span className='text-base'>/Month</span> </h2>
            <h2 className='text-3xl text-white my-2'>{details.name}</h2>
            <h2 className='text-white text-bold'>Features: </h2>
            <div className=''>
                {
                    details.short_features.map((features, index) => <Features
                        key={index}
                        features={features}></Features>)
                }
            </div>
        </div>
    );
};

export default Pricecard;