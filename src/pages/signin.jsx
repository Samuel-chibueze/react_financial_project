import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Signinform from '../components/signinform';
import image from "../images/wallet_4.jpeg";
import Successmsg from '../components/successmsg';
import Errormsg from '../components/errormsg';
import { AuthContext } from '../context/authcontext';

const signin = () => {

    const {successmsg,errormsg} = useContext(AuthContext)
    return (<div className=''>
        <div className='grid lg:grid-cols-3  r m-auto w-[80vw]  h-[60vh] grid-cols-1  '>
            <div className='h-auto ml-[-200px]  hidden lg:block   '>
                <img className='w-[30vw] my-11 mx-[200px] mt-[150px] m-auto' src={image} alt="" />
            </div>

            <div className=' w-[70vw] md:w-[50vw] m-auto lg:mt-[20vh]  lg:w-[40vw] md:col-span-2 sm:w-[60vw] lg:m-auto mt-[15vh] mb-[100px] '>
                <Successmsg message={successmsg} username={''}/>
                <Errormsg message={errormsg}/>
                <Signinform />
                <div className=' my-6 space-y-5 '>
                    <Link className='font-bold text-[#A68DAD]' to='/forgot-password'>
                        I forgot my password
                    </Link>
                    <p className='font-semibold'>Don't have an account? <span>  </span>
                        <Link className='font-bold text-[#A68DAD]' to='/signup'>
                            Sign up
                        </Link></p>
                </div>
            </div>

        </div>



    </div>);
}


export default signin;