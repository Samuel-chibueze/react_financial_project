import React from 'react';
import { Oval } from 'react-loader-spinner'


const loadingspinner = (prop) => {
    return <div className=' '>
            <button   className={`w-full bg-[#5B0888]  flex justify-center items-center px-4 py-3 mt-4 rounded-md text-[#713ABE] ${
    prop.data ? 'cursor-not-allowed' : 'hover:bg-[#713ABE]'}`}
    disabled
            type='button'>
            
        <Oval
  height={30}
  width={80}
  color="white"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="gray"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
</button>
    </div>;
}


export default loadingspinner;