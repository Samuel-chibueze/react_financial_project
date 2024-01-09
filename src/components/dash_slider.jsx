import React, { useEffect, useState } from 'react';
import image1 from "../images/Screenshot1.png";
import image2 from "../images/Screenshot2.png";
import image3 from "../images/Screenshot3.png";
import image4 from "../images/Screenshot4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

const dash_slider = () => {

    const [currentindex, setcurrentindex] = useState(0)

    const prevslide = () => {
        const fisrtslide = currentindex === 0;
        const newindex = fisrtslide ? slider.length - 1 : currentindex - 1;
        setcurrentindex(newindex)
    }
    const nextslide = () => {
        const lastslide = currentindex === slider.length - 1;
        const newindex = lastslide ? 0 : currentindex + 1;
        setcurrentindex(newindex)
        return newindex
    }

    const setslide = (slideindex) => {
        setcurrentindex(slideindex)
    }


    const slider = [
        {
            url: { image: image1 }
        },
        {
            url: { image: image2 }
        },
        {
            url: { image: image3 }
        },
        {
            url: { image: image4 }
        }

    ]
    return <div className='w-[90%] md:w-[70%] h-[250px]   relative  group mb-[100px] mx-5 shadow-md'>
        <div style={{ backgroundImage: `url(${slider[currentindex].url.image})` }} className='w-full h-full rounded-md bg-cover bg-center duration-300'>
            {/* left icon  */}
            <div className=' hidden group-hover:block bg-black/20 text-white absolute top-[50%] left-5 text-2xl translate-x-0 translate-y-[-50%] p-2 rounded-3xl'
                onClick={prevslide}
            >
                <BsChevronCompactLeft size={30} />
            </div>

            {/* right icon */}
            <div className='hidden group-hover:block bg-black/20 text-white absolute top-[50%] right-5 text-2xl translate-x-0 translate-y-[-50%] p-2 rounded-3xl'
                onClick={nextslide}
            >
                <BsChevronCompactRight size={30} />
            </div>



        </div>
        <div className='flex justify-center py-2  top-4'>
            {slider.map((slides, slideindex) => (
                <div key={slideindex} onClick={() => setslide(slideindex)} className='text-[18px]'>
                    <RxDotFilled />
                </div>


            ))}
        </div>
    </div>;
}


export default dash_slider;