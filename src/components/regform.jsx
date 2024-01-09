import React, { useContext, useState } from 'react';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigate} from 'react-router-dom'
import * as yup from "yup"
import { AiFillEye, AiFillEyeInvisible,AiOutlineExclamationCircle} from "react-icons/ai";
import Loadingspinner from './loadingspinner';
import Button from './button';
import { AuthContext } from '../context/authcontext';

          const Regform = () => {

          const navigate = useNavigate()
          const {setsuccessmsg,settoken} = useContext(AuthContext)

          const [showPassword, setShowPassword] = useState(true);
          const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
          }; 

          const [isloading, setisloading] = useState(false)

          const [errormessage, seterrormessage] = useState('')
          const [mailerror, setmailerror] = useState('')
          const [nameerror, setnameerror] = useState('')
          const [phoneerror, setphoneerror] = useState('')


          const schema = yup.object().shape({
          name: yup.string().required("Enter your fullname").min(2,'Invalid formart'),
          email: yup.string().email().required("Enter your email address"),
          phonenumber: yup.string().required("Enter your phonenumber").matches(/^[0-9()+\- ]+$/, 'Invalid phone number').min(9).max(15),
          password: yup.string().min(6,"Minimum of 6 characters").required("password is required ").matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
          confirm_password: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required("you have not confirmed your password "),
          });

          const {register,handleSubmit,reset, formState: {errors} } =useForm({
          resolver:yupResolver(schema)
          })

          const Onsubmit = async (data) => {
            setisloading(true)
          data = {
          "username":data.name,
          "email": data.email,
          "phonenumber": data.phonenumber,
          "password": data.password
          };

        

          try {
          const res = await fetch("http://127.0.0.1:8000/api/createuser/", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          });

          const resdata = await res.json()

          if (res.ok) {
          // reset();
          // setsuccessmsg(resdata.message+" "+ resdata.data.username)
          // console.log(resdata)
          // navigate('/signin')

          settoken(true)
          localStorage.setItem('token', resdata.access)
      
          localStorage.setItem('user', resdata.data)
             console.log(localStorage.getItem('user'))
          reset()
         
          setsuccessmsg('welcome to your account')
          setisloading(false)
          navigate('/dashboard') 

          }else if(!res.ok){
          setnameerror(resdata.username)
          setphoneerror(resdata.phonenumber)
          setmailerror(resdata.email) 
          setisloading(false)
          setTimeout(() => {
            setnameerror('')
            setphoneerror('')
             setmailerror('')
         
          }, 3000);
          } else {
            seterrormessage('unexpected network issue try again')
          setTimeout(() => {
          seterrormessage('');
          }, 3000);
          }
          } catch (error) {
          seterrormessage('unexpected network issue try again ');
          setisloading(false)
          setTimeout(() => {
          seterrormessage('');
          }, 5000);
          }
          };


          return<>

          <form className='h-auto mt-[-50px]' onSubmit={handleSubmit(Onsubmit)}>
          <h1 className=' font-normal text-3xl  text-center'>Create your account</h1>
            <p className='text-[17px] mt-4 mb-[20px] text-gray-600 text-center'>start your journey today to build a sustainable future today</p>
            <div className="mb-4 flex flex-col align-start justify-start">
          {/* <label className=" text-gray-500 font-medium mb-2 mr-[60px] mx-6">Name</label> */}

          <input
          className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.name ? 'focus:border-red-400' : ''}`}
            placeholder='input your fullname'
            type="text"
            
          {...register('name')}
              />
              
          {errors.name && <p className='  my-1 text-red-600'>{errors.name.message}</p>}
          {nameerror && <p className='  my-1 text-red-600'>{nameerror}</p>  }
          </div>
          <div className="mb-4 flex flex-col align-start justify-start">
          {/* <label className=" text-gray-500 font-medium mb-2 mr-[60px] mx-6">email</label> */}

          <input   className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.email ? 'focus:border-red-400' : ''}`}
          type="email" 
          placeholder='input your email'   
          {...register('email')}
            />
              {errors.email && <p className='  my-1 text-red-600'>{errors.email.message}</p>}
              {mailerror && <p className='  my-1 text-red-600'>{mailerror}</p>}
            
          </div>

          <div className="mb-4 flex flex-col align-start justify-start">
          {/* <label className=" text-gray-500 font-medium mb-2 mr-[60px] mx-6" >phonenumber</label> */}

          <input  className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.phonenumber ? 'focus:border-red-400' : ''}`}
            type="text"
            placeholder='input your phonenumber'
            {...register('phonenumber')}
              />
          {errors.phonenumber && <p className='  my-1 text-red-600'>{errors.phonenumber.message}</p>}
          {phoneerror && <p className='  my-1 text-red-600'>{phoneerror}</p>  }
          </div>

          <div className="mb-4 flex flex-col align-start justify-start">
          {/* <label className=" text-gray-500 font-medium mb-2 mr-[50px] mx-6 ">confirm password</label> */}
          <input
          className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.password ? 'focus:border-red-400' : ''}`}
          type={showPassword?"password": "text"}
            placeholder='password'
            {...register('password')}
              />  
              <div className="lg:ml-[36.5vw] absolute text-3xl mt-3 md:ml-[45vw] ml-[62vw] sm:ml-[54vw] text-[#A68DAD]">
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

          <input   className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.name ? 'focus:border-red-400' : ''}`}
          type={showPassword?"password": "text"}
            placeholder='confirm Password'
            {...register('confirm_password')}
              />  
          {errors.confirm_password && <p className='  my-1 text-red-600'>{errors.confirm_password.message}</p>}
          </div>

          {errormessage && <div className= 'bg-red-100 py-3 mx-7  px-3 border-solid items-center  border-l-4 border-red-500 flex'>
          <div className='text-2xl mt-2 text-red-700 mr-10'>
              <AiOutlineExclamationCircle/>
          </div>

          <p className='text-center text-red-500 '>{errormessage} </p>
          </div>}
            
            { isloading ? <Loadingspinner Loading={isloading}/> : <Button title={'sign up'}/> }
          
          
        
          </form> 

          </>
          }

          export default Regform;