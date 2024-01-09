import React from 'react';
const sidebar_tabs = ({ title, icon ,Active}) => {

    
    return <div>

        <div className={Active?`flex justify-center
         items-center
         w-[50%] 
         h-[70px] 
         ml-[12vw]
         text-3xl
          rounded-md
            gap-10 
        text-gray-600 
            transition duration-300
             ease-in-out 
             border-r-[5px] 
             cursor-pointer
             bg-gray-200
              border-gray-600
              `
              :
              `flex justify-center
         items-center
         w-[50%] 
         h-[70px] 
         ml-[12vw]
         text-3xl
          rounded-md
           text-gray-600
            gap-10 
            hover:text-gray-600 
            transition duration-300
             ease-in-out 
             hover:border-r-[5px] 
             cursor-pointer
             hover:bg-gray-200
              hover:border-gray-600
              active:bg-gray-400
              active:border-gray-200` }
              >

            {icon}
            <p className=' text-xl'>{title}</p>
        </div>
    </div>;
}

export default sidebar_tabs;