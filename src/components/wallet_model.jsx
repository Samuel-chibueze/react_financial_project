import { Container } from 'postcss';
import React, { useState } from 'react';import Transaction_model from './transaction_model';
import { MdAccountBalance } from "react-icons/md"
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';



const wallet_model = ({ visible, onclose,setshow ,setdata}) => {
    const [formerror, setformerror] = useState({
        amount:"",
        payment:"",
        disc:""
    })




    const handlebgclose = (e) => {
        if (e.target.id === "container") {
             onclose(false)  
        }
    }

   

    const {register,handleSubmit}= useForm()
    const onsubmit=(data)=>{
        if(data.amount == 0){
          setformerror({
            ...formerror,["amount"]: "Must be between 10.00 - 10 000.00 USD"
          })
        }else{
             onclose(false)
        setshow()
        console.log(data)
        setdata(data)
        }
       
    }

    return visible && (<div onClick={handlebgclose} id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white w-[400px] h-[auto] py-10 rounded-3xl shadow-xl my-4 mx-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-start px-5 rounded-2xl '>
                <p className='text-3xl'>Fund wallet</p>
                <button onClick={onclose} className='text-3xl'>x</button>
            </div>
            <div className='mx-5 flex flex-col gap-4 '>
                <div className='bg-blue-100 h-10 w-full rounded-md p-10 flex justify-center items-center '>
                    <p className='text-[14px]'>You can deposit up to<span className='font-bold'> 10000 </span>USD. To increase the limit, you should verify your profile.</p>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-5'>
                        <div className='flex flex-col '>
                            <label htmlFor="Amount">Amount</label>
                            <input type="text" className='border-2 border-gray-400 mt w-full h-10 rounded-md' {...register('amount')}/>
                             <p className='text-red-500'>{formerror.amount}</p>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Amount">payment method</label>
                            <select name="payment method" id="" className='w-full h-10 border-2 border-gray-400 rounded-md' {...register('crypto')}>
                                <option value="bitcoin"> BTC</option>
                                <option value="usdt">USDT</option>
                                <option value="litecoin">litecoin</option>
                                <option value="etherium">etherium</option>
                            </select>
                        </div>

                        <div className=' flex flex-col '>
                            <label htmlFor="payment disc.">payment disc.</label>
                            <input className='border-2 h-[70px] rounded-md border-gray-400' name="payment disc." {...register('disc')} />
                          
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                            <button type='submit' className='bg-green-400 px-10 py-3 mx-auto text-white rounded-lg'>continue</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>);
}



export default wallet_model;