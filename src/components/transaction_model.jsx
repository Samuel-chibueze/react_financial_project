import React, { useEffect, useState,useContext } from 'react';
import Walletloader from './walletloader';
import { AuthContext } from '../context/authcontext';

const transaction_model = ({ visible, setclose, data }) => {
    const [info, setinfo] = useState("")
    const [cryptoname, setcryptoname] = useState()
    const [amount, setamount] = useState()
    const {loadstate,setloadstate} = useContext(AuthContext)
  

    const handlesubmit = async () => {
        
        const file = {
            Amount:data.amount,
            Transaction:"Deposit",
            crypto: data.crypto
           
        }
        console.log(file)
        try {
            const res = await fetch('http://127.0.0.1:8000/api/getcrypto/', {
                method: "POST",
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(file),
            });

            const resdata = await res.json()


            if (res.ok) {
            
             setloadstate(false)
               setinfo(resdata.data[0].bitcoin)
                setamount(file.Amount)
                setcryptoname(file.crypto)
            } else {

            }


        } catch (error) {

        }
    }

    useEffect(()=>{
      if (visible) {
        handlesubmit()
    } else {
      
    }   
    },[visible])
   

    const handlehistory = async() => {
        const file = {
            amount:data.amount,
            Transaction:"Deposit",
            payment: data.crypto,
            disc:"deposit no data"
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

    const closewallet=()=>{
        setclose()
        setloadstate(true)
      
    }



    return visible && <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex  justify-center items-center'>
        {loadstate?  <Walletloader/>:<div className='bg-white py-10 px-3  flex flex-col justify-between mx-6 rounded-2xl items-center w-[500px] h-auto '>
            <div className='flex justify-between w-full items-center text-3xl px-3 '>
                <p>model</p>
                <button onClick={closewallet} className='text-3xl'>x</button>
            </div>
            <div className='w-full px-3 my-10'>
                <p>{cryptoname}</p>

                <p>{amount}</p>
                <input className='border-2 border-gray-500 w-full rounded-md bg-gray-100 text-black' type="text" value={info} />
            </div>

            <button onClick={handlehistory} className='bg-green-400 px-10 py-3 mx-auto text-white rounded-lg'>deposit</button>
        </div>}


    </div>
        ;
}

export default transaction_model;