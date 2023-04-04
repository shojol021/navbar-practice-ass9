import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Pricecard from '../PriceCard/Pricecard';

const Prices = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])

    return (
        <div>
               <h1 className='bg-purple-200 text-4xl text-purple-800 text-center my-2'>Awesome Prices</h1>
               <div className='grid md:grid-cols-3 gap-5 mx-5'>
                    {
                        prices.map(price => <Pricecard 
                        key={price.id}
                        details={price}
                        ></Pricecard>)
                    }
               </div>
        </div>
    );
};

export default Prices;