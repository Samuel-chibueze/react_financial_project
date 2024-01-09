
import React from 'react';
import Regform from '../components/regform';
import { Link } from 'react-router-dom';
import image from "../images/wallet_4.jpeg";

const signup = () => {
  
    return (<div className=''> 
    <div className='grid lg:grid-cols-3  r m-auto w-[80vw]  h-[100vh] grid-cols-1  '>
        <div className='h-auto ml-[-200px]  hidden lg:block   '>
             <img className='w-[30vw] my-11 mx-[200px] mt-[150px] m-auto' src={image} alt="" />
        </div>

        <div className=' w-[70vw] md:w-[50vw] m-auto lg:mt-[20vh]  lg:w-[40vw] md:col-span-2 sm:w-[60vw] lg:m-auto mt-[15vh] mb-[100px] '>
   
         <Regform/>
         <div className=' my-6 '>
            <p className='font-semibold'>Already have an account? <span>  </span> 
            <Link className='font-bold text-[#A68DAD]' to='/signin'>
                 Sign in
            </Link></p>
         </div>
        </div>
    
</div>
    
        
     
    </div>);
}

export default signup;