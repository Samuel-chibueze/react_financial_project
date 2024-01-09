import React from 'react';
import { Oval } from 'react-loader-spinner'
const walletloader = () => {
    return <div className='bg-white py-10 px-3 mx-10 rounded-2xl w-[500px] h-auto flex justify-center items-cente'>
          <Oval
  height={300}
  width={50}
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



export default walletloader;