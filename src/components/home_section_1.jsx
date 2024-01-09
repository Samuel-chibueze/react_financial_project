import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import fund_wallet_image from "../images/wallet_1.jpeg"

const home_section_1 = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/signup')
  }

  return <div className='md:flex  gap-10 mt-[150px] md:mt-[10px]'>
    <div className='md:w-[50vw] text-center my-10 md:my-60 lg:px-[100px]'>
      <h1 className='w-full text-4xl md:text-5xl md:w-[30vw] text-[#A68DAD] font-semibold'>Dollar investments that help you grow</h1>
      <p className=' md:w-[30vw] my-10'>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
      <div className='flex justify-center h-[120px] gap-10 md:w-[30vw]'>
        <button className='border px-2 border-black rounded-xl mt-10 md:w-[15vw] h-[50px] flex justify-center items-center gap-2' onClick={() => alert("this app is not available on the Google play store")}>                      <div className=' text-2xl'>
          <FcGoogle />
        </div>
          Download App
        </button>

        <button className='bg-black font-bold text-white rounded-md mt-10 w-[25vw] md:w-[10vw] h-[50px]' onClick={handleclick}>
          sign up →
        </button>
      </div>

    </div>


    <div className='md:my-[200px] '>
      <img src={fund_wallet_image} alt="" />
    </div>





  </div>;
}


export default home_section_1;