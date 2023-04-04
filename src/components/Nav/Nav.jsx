import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className='bg-purple-300 p-2'>
            <div onClick={() => setOpen(!open)}>
                <span className='md:hidden'>
                    {open ?
                        <XMarkIcon className="h-6 w-6 text-purple-500 ms-4" /> :
                        <Bars3Icon className="h-6 w-6 text-purple-500 ms-4" />}
                </span>
            </div>

            <ul className={`md:flex absolute md:static duration-200 bg-purple-300 rounded-sm p-2 ml-5 ${open? `top-8`: `-top-64`}`}>
                {
                    routes.map(route => <Link
                        key={routes.id}
                        route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;