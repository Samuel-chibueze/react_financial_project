import { Container } from 'postcss';
import React, { useState } from 'react';import Transaction_model from './transaction_model';
import { MdAccountBalance } from "react-icons/md"
import { yupResolver } from '@hookform/resolvers/yup';

// import * as yup from "yup"
import { useForm } from 'react-hook-form';


const choose_plan_model = ({ visible, onclose,setshow ,setdata ,account})=> {
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

    const handleinputchange=(e)=>{
        const {name,value} = e.target;
        setformdata({
            ...formdata,[name]: value
        })

    }

    // const schema = yup.object().shape({
    //     amount: yup.number().positive().integer().min(10,"from 10-1000").required('you have not inputted an amount'),
    //     disc: yup.string()
    // })

    const {register,handleSubmit}= useForm()
    const onsubmit= async(data)=>{
        if(data.amount < 10){
            setformerror({
                ...formerror,["amount"]: "Must be between 10.00 - 10 000.00 USD"
            })
        }else if(data.disc==="" && data.disc.lenght<5){
            setformerror({
                ...formerror,["disc"]: "you have not added your wallet address"
            })   
        }else{
            if(data.amount<account.Account_balance){
                alert(`you dont have upto ${data.amount} in your account`)
            }else{
                alert("withdrawal in process")
            }
          console.log({"formdata":data})

        // onclose(false)

        const file = {
            amount:data.amount,
            Transaction:"Withdrawal",
            payment: data.payment,
            disc: data.disc
        }

        const user = localStorage.getItem('user')
        try{
        const res = await fetch(`http://127.0.0.1:8000/api/createhistory/${user}/`, {
            method:"POST",
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(file),
        })
        const resdata = await res.json()
        console.log(resdata)
        }catch(error){

        }
        
        
        }
        
       
    }  
    return visible && (<div onClick={handlebgclose} id='container' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white w-[400px] h-[auto] py-10 rounded-3xl shadow-xl my-4 mx-4 flex flex-col gap-4'>
            <div className=' flex justify-between items-start px-5 rounded-2xl '>
                <p className='text-3xl'>WITHDRAWAL</p>

                <button onClick={onclose} className='text-3xl'>x</button>
            </div>
            <div className='mx-5 flex flex-col gap-4 '>
                <div className='bg-blue-100 h-10 w-full rounded-md p-10 flex justify-center items-center '>
                    <p className='text-[14px]'><span className='font-bold text-xl'>{account.Account_balance} </span>USD. is the maximum ammount you can withdrawal.</p>
                </div>

                {/* <div>
                    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-5'>
                        <div className='flex flex-col '>
                            <label htmlFor="Amount">Amount</label>
                            <input type="text" className='border-2 border-gray-400 mt w-full h-10 rounded-md' name='amount' {...register('amount')} />
                            <p className='text-red-500'>{formerror.amount}</p>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Amount">payment method</label>
                            <select name="payment"  id="" className='w-full h-10 border-2 border-gray-400 rounded-md' {...register('payment')} >
                                <option value="bitcoin"> BTC</option>
                                <option value="usdt">USDT</option>
                                <option value="litecoin">litecoin</option>
                                <option value="etherium">etherium</option>
                            </select>
                        </div>

                        <div className=' flex flex-col '>
                            <label htmlFor="payment disc.">Add wallet address.</label>
                            <input type='text' className='border-2 h-10 rounded-md border-gray-400' name="payment" {...register('disc')} />
                            <p className='text-red-500'>{formerror.disc}</p>
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                            <button type='submit' className='bg-green-400 px-10 py-3 mx-auto text-white rounded-lg'>continue</button>
                        </div>
                    </form>
                </div> */}
            </div>

        </div>
    </div>);
}

export default choose_plan_model;