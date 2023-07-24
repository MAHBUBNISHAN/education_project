import React from 'react';
import logo1 from '../../assets/img1.jpeg'
import logo2 from '../../assets/img2.jpg'
import logo3 from '../../assets/img3.jpeg'
import logo4 from '../../assets/img4.jpg'
import logo5 from '../../assets/img5.jpeg'
import logo6 from '../../assets/img6.jpg'
import logo7 from '../../assets/img7.jpeg'
import logo8 from '../../assets/img8.jpeg'
import logo9 from '../../assets/img9.jpeg'
import logo10 from '../../assets/img10.jpeg'
import logo11 from '../../assets/img11.jpeg'
import logo12 from '../../assets/img12.jpeg'
import logo13 from '../../assets/img13.jpeg'

const Gallery = () => {
    return ( 
        <>
        <h2 className='text-5xl m-16 underline font-bold text-violet-700'> Gallery</h2>
        <div className=' grid grid-cols-3 m-6'>
            <img className='h-45 w-50' src={logo1} alt="" />
            <img className='h-50 w-60' src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
            <img src={logo8} alt="" />
            <img src={logo9} alt="" />
            <img src={logo10} alt="" />
            <img src={logo11} alt="" />
            <img src={logo12} alt="" />
            <img src={logo13} alt="" />
            
        </div>
        </>
    );
};

export default Gallery;