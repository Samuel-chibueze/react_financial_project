import React from 'react';
import { RiHomeLine, RiFolderTransferLine, RiMessageLine } from "react-icons/ri"
import { AiFillPlayCircle } from "react-icons/ai"
import {FaGreaterThan} from "react-icons/fa6"
import Dash_slider from './dash_slider';


const advert_section = () => {
    return <div className='flex flex-col justify-center items-start h-screen xl:col-span-1 lg:col-span-2  w-[100%] px-5 '>
        
     
        <div className='w-[100%] hidden xl:block'>
            <Dash_slider  />    
        </div>
           
        
        <div className=' w-[100%]  flex flex-col justify-start items-start px-5'>
            <h1 className='text-2xl mx-6'>Customer Corner</h1>
            <br />
            <div className='flex justify-around w-[100%] items-center gap-5 p-6 text-gray-500 border-t-2'>

                <div className='bg-blue-300 p-3 rounded-3xl text-white'>
                    <AiFillPlayCircle />
                </div>


                <div className='flex flex-col gap-1'>
                    <h1 className='text-[19px] font-semibold'>Contact Corner</h1>
                    <p>Contact your AGF Account manager </p>
                </div>

                  <FaGreaterThan/>
            </div>
            <div className='flex  w-[100%] justify-around items-center gap-5 p-6 text-gray-500 border-t-2'>

                <div className='bg-blue-300 p-3 rounded-3xl text-white'>
                    <RiMessageLine />
                </div>


                <div className='flex flex-col gap-1'>
                    <h1 className='text-[19px] font-semibold'>Contact Corner</h1>
                    <p>Contact your AGF Account manager </p>
                </div>
              
                <FaGreaterThan/>
            </div>
        </div>
       
    </div>;
}

export default advert_section;