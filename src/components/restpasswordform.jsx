import React, { useContext, useState } from 'react';
import { useForm, } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { AiFillEye, AiFillEyeInvisible, AiOutlineExclamationCircle } from "react-icons/ai";
import Button from './button';
import Loadingspinner from './loadingspinner';
import { AuthContext } from '../context/authcontext';



const resetpasswordform = (prop) => {
  

  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [successmessage, setsuccessmessage] = useState()
  const [isloading, setisloading] = useState(false)
  const [error, seterror] = useState()
  const Navigate = useNavigate()
  const {setsuccessmsg} = useContext(AuthContext)


  const schema = yup.object().shape({
    password: yup.string().min(6, "Minimum of 6 characters").required("password is required ").matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirm_password: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required("you have not confirmed your password "),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const Onsubmit = async (data) => {
    setisloading(true)
    data = {
      "password": data.password
    }
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/userpassword/${prop.data}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data)
      })
      const resdata = await res.json()
      reset();
      if (res.status == 200) {
        setsuccessmsg(resdata.message)
        console.log(resdata.message)
        setisloading(false)
        Navigate('/signin')
      } else {
        seterror(resdata.message)
        setisloading(false)
      }

    } catch (error) {
      seterror('service error refresh and try again')
      setisloading(false)
      setTimeout(() => {
        seterror()
      }, 3000)
    }

  }


  return <>

     <form onSubmit={handleSubmit((data) => Onsubmit(data))}>


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

      <div className="mb-4 flex flex-col align-start justify-start">
        {/* <label className=" text-gray-500 font-medium mb-2 mr-[50px] mx-6 ">confirm password</label> */}

        <input className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.name ? 'focus:border-red-400' : ''}`}
          type={showPassword ? "password" : "text"}
          placeholder='confirm Password'
          {...register('confirm_password')}
        />
        {errors.confirm_password && <p className='  my-1 text-red-600'>{errors.confirm_password.message}</p>}
      </div>

      {error && <div className='bg-red-100 py-3 mx-7  px-3 border-solid items-center  border-l-4 border-red-500 flex'>
        <div className='text-2xl mt-2 text-red-700 mr-10'>
          <AiOutlineExclamationCircle />
        </div>

        <p className='text-center text-red-500 '>{error} </p>
      </div>}

      {isloading ? <Loadingspinner /> : <Button title={'Reset password'}/>}


    </form> 
   
  </>
}

export default resetpasswordform;