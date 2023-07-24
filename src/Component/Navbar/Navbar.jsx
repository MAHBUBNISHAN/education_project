import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className=' flex sm:flex-row flex-col justify-between'>
        <div>
            <Link to='/'> <h2 className='text-2xl font-bold text-fuchsia-700'> Educare</h2></Link>
       
        </div>
        <div>
            <input className=' bg-gray-300 p-1 rounded-lg border' type="text" placeholder='search '  />
        </div>
        <div className=''>
            <Link to='/college' className='btn-link m-1 no-underline' >College</Link>
            <Link className='btn-link m-1 no-underline'> Admission</Link>
            <Link className='btn-link m-1 no-underline'> My College</Link>
        </div>
            
        </div>
        </>
    );
};

export default Navbar;