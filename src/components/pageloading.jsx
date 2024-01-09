import React from 'react';
import { Oval } from 'react-loader-spinner'

const pageloading = () => {
    return <div className='h-screen bg-white flex justify-center items-center'>
            <Oval
  height={300}
  width={80}
  color="#5B0888"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="gray"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
    </div>;
}


export default pageloading;