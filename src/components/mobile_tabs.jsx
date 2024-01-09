import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";


const mobile_tabs = ({ title, icon }) => {
    return <div>
        <div className='flex
         flex-col
          justify-center
           items-center
            text-[25px]
            text-gray-600
              cursor-pointer
               py-2
                border-b-4
                 border-[#F0ECE3]
                 hover:bg-gray-100
                 hover:gray-blue-400
                 rounded-md
                  px-5 
                  hover:text-gray-800
                  hover:border-gray-700
                  transition duration-300
                   ease-in-out 
                    hover:border-b-4'>
            {/* <FaRegCircleUser /> */}
            {icon}
            <p className='text-[16px]'>{title}</p>
        </div>
    </div>;
}


export default mobile_tabs;