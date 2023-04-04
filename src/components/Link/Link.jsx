import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='me-5  hover:bg-purple-400'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;