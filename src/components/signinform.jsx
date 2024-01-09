import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { AiFillEye, AiFillEyeInvisible, AiOutlineExclamationCircle } from "react-icons/ai";
import Button from './button';
import Loadingspinner from './loadingspinner';
import { AuthContext } from '../context/authcontext';



const Signinform = () => {

  const navigate = useNavigate()


  const { settoken, authtoken, token, setuser , user,setsuccessmsg} = useContext(AuthContext)


  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [errormessage, seterrormessage] = useState()
  const [isloading, setisloading] = useState(false)




  // const errormessage = location.state && location.state.message;

  setTimeout(() => {
    seterrormessage('')
  }, 6000);

  const schema = yup.object().shape({
    email: yup.string().email().required("Enter your email address"),
    password: yup.string().min(6, "Minimum of 6 characters").required("password is required ").matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),

  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const Onsubmit = async (data) => {
    setisloading(true)

    try {

      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",

        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
      });

      const resdata = await res.json()
      console.log(resdata)

      if (res.status === 200) {
        settoken(true)
        localStorage.setItem('token', resdata.access)
    
        localStorage.setItem('user', resdata.data)
           console.log(localStorage.getItem('user'))
        reset()
       
        setsuccessmsg('welcome to your account')
        setisloading(false)
        navigate('/dashboard') 

     
      
       


      } else {
        seterrormessage(resdata.message)
        reset()
        setisloading(false)
      }


    } catch (error) {
      reset()
      setisloading(false)
      seterrormessage('refresh and try again expirencing network issues')
    }

  }


  return <>

    <form className='h-auto mt-[0px]' onSubmit={handleSubmit(Onsubmit)}>
      <h1 className=' font-normal text-3xl text-center'>Welcome back</h1>
      <p className='text-[17px] mt-4 mb-[20px] text-gray-600 text-center'>Let's get you logged in to get back to building your dollar-denominated investment portfolio.

      </p>

      <div className="mb-4 flex flex-col align-start justify-start">
        {/* <label className=" text-gray-500 font-medium mb-2 mr-[60px] mx-6">email</label> */}

        <input className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.email ? 'focus:border-red-400' : ''}`}
          type="email"
          placeholder='input your email'
          {...register('email')}
        />
        {errors.email && <p className='  my-1 text-red-600'>{errors.email.message}</p>}
      </div>



      <div className="mb-4 flex flex-col align-start justify-start">
        {/* <label className=" text-gray-500 font-medium mb-2 mr-[50px] mx-6 ">confirm password</label> */}
        <input
          className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.password ? 'focus:border-red-400' : ''}`}
          type={showPassword ? "password" : "text"}
          placeholder='password'
          {...register('password')}
        />
        <div className="lg:ml-[36vw] absolute text-3xl mt-3 md:ml-[45vw] ml-[62vw] sm:ml-[54vw] text-[#A68DAD]">
          {showPassword ? (
            <AiFillEye onClick={togglePasswordVisibility} />
          ) : (
            <AiFillEyeInvisible onClick={togglePasswordVisibility} />
          )}
        </div>
        {errors.password && <p className='  my-1 text-red-600'>{errors.password.message}</p>}
      </div>



      {errormessage && <div className='bg-red-100 py-3 mx-7  px-3 border-solid items-center  border-l-4 border-red-500 flex'>
        <div className='text-2xl mt-2 text-red-700 mr-10'>
          <AiOutlineExclamationCircle />
        </div>

        <p className='text-center text-red-500 '>{errormessage} </p>
      </div>}




      {isloading ? <Loadingspinner /> : <Button title={'sign in'} />}
    </form>

  </>
}

export default Signinform;