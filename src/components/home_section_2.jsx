import React from 'react';
import image1 from "../images/arm.png"
import image2 from "../images/venture.png"
import image3 from "../images/western-union.png"
import image4 from "../images/techstars.png"

const home_section_2 = () => {
    return <div className=' flex flex-col gap-9 h-50
     md:flex md:gap-10 md:flex-row justify-center items-center  m-auto mt-20 w-auto  md:mt-[-150px] md:h-6 py-20'>
        <img src={image1} alt="" className='w-25 h-12' />
        <img src={image2} alt="" className='w-25 h-12'  />
        <img src={image3} alt="" className='w-25 h-12' />
        <img src={image4} alt="" className='w-25 h-12'  />

    </div>;
}



export default home_section_2;