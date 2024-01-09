import React from 'react';
import image from "../images/wallet_3.jpeg"
import { useNavigate } from 'react-router-dom';

const home_section_3 = () => {
const navigate = useNavigate()

    return <div className='flex flex-col md:gap-[200px] gap-9 md:flex md:flex-row justify-center items-center py-10 px-6 '>
        <div className='md:order-2 '>
      <img className='w-[400px]' src={image} alt="" />
        </div>

        <div className='md:order-1 flex gap-4 flex-col  justify-center items-center  py-10 w-[400px]'>
            <h1  className='text-3xl font-semibold w-full text-center'>Invest your money in dollars</h1>
            <p className='w-[320px] text-center'>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
            <button className='text-blue-500 font-bold' onClick={()=>navigate('/signin')}>Start investing now</button>
        </div>
    </div>;
}

export default home_section_3;