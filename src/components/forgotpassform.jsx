import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { AiFillEye, AiFillEyeInvisible,AiOutlineExclamationCircle} from "react-icons/ai";
import Button from './button';
import Loadingspinner from './loadingspinner';

const Forgotpassform = ({ submitdata }) => {

  const [error, seterror] = useState('')
  const[isloading, setisloading ]= useState(false)


const schema = yup.object().shape({
    email: yup.string().email().required("Enter your email address"),   
});

const {register,handleSubmit, formState: {errors} } =useForm({
    resolver:yupResolver(schema)
})

const Onsubmit=async(data)=>{
  setisloading(true)
   seterror('')
  setTimeout( async()=>{
     try{
    const res = await fetch('http://127.0.0.1:8000/api/emailverification',{
      method: "POST",
      headers: {"Content-Type":"application/json",},
      body:JSON.stringify(data)
    });
   
    const resdata = await res.json()

    if(res.status === 404){
     seterror(resdata) 
     setisloading(false)
    }else{
submitdata({"boolean":false, "id":resdata.id})
    }
   
    
  }catch(error){
    setisloading(false)
    console.log(error.message)
  }
  },2000)
 
  
}


return<>

<form onSubmit={handleSubmit(Onsubmit)}>
      <h1 className=' font-normal text-3xl text-center'>Reset your password</h1>
             <p className='text-[17px] mt-4 mb-[20px] text-gray-600 text-center'>Enter your email address, and we will send you a link to reset your password.</p>
         
          <div className="mb-4 flex flex-col align-start justify-start">
            {/* <label className=" text-gray-500 font-medium mb-2 mr-[60px] mx-6">email</label> */}

            <input   className={`w-full px-4 py-3 border shadow-sm rounded-md focus:outline-none focus:border-blue-500 ${errors.email ? 'focus:border-red-400' : ''}`}
            type="email" 
            placeholder='input your email'   
            {...register('email')}
              />
               {errors.email && <p className='  my-1 text-red-600'>{errors.email.message}</p>}
          </div>


          {error && (<div className= 'bg-red-100 py-3 mx-7  px-3 border-solid items-center  border-l-4 border-red-500 flex'>
            <div className='text-2xl mt-2 text-red-700 mr-10'>
                <AiOutlineExclamationCircle/>
            </div>
          
            <p className='text-center text-red-500 '> {error.message}</p>
          </div>)}

             {isloading? <Loadingspinner/>:<Button title={'Submit Email'}/>}
</form> 
    
 </>
}

export default Forgotpassform;