
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai"
import { RiHomeLine, RiFolderTransferLine } from "react-icons/ri"
import { FaRegCircleUser, FaRegRectangleList } from "react-icons/fa6"
import { AuthContext } from '../context/authcontext';
import TransactionTable from './TransactionTable';
import { useForm } from 'react-hook-form';
import { stringify } from 'postcss';


const dash_wallet = ({ setshow_wallet_model, setuserinfo, account, setdeposit }) => {
    const navigate = useNavigate()
    const { title, settoken, authtoken, successmsg, setsuccessmsg, seterrormsg, errormsg } = useContext(AuthContext)

    const [user, setuser] = useState('')
    const userprofile = localStorage.getItem('user')
    const [accountinfo, setaccountinfo] = useState('')
    const [userhistory, setuserhistory] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const [historyaccess, sethistoryaccess] = useState(false)
    const { register, handleSubmit } = useForm()



    const history = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/gethistory/${userprofile}/`)
            const resdata = await res.json()
            if (res.status == 200) {
             
                setuserhistory(resdata.data)
                sethistoryaccess(true)
            } else {
                sethistoryaccess(false)
                setuserhistory(resdata.message)
            }
        } catch (error) {

        }

    }

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const data = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/accountlist/${userprofile}/`, {
                method: 'GET',
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
              })
            const resdata = await res.json()
            if (res.status == 200) {
              
                setaccountinfo(resdata.account)
                account(resdata.account)

            } else {
                settoken(false)
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                seterrormsg('An error occured try again')
                setsuccessmsg('')
                navigate('/signin')
            }
        } catch (error) {
            settoken(false)
            localStorage.removeItem('token')
            setsuccessmsg('')
            seterrormsg('An error occured try again ')
            localStorage.removeItem('user')
            navigate('/signin')
        }



    }
    useEffect(() => {

        data()
        history()

    }, [])

    const handleclick = () => {
        settoken(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        seterrormsg('you have logged out of your account ')
        setsuccessmsg('')
        navigate('/signin')

    }

    const [walletview, setwalletview] = useState(true)


    const walllet = () => {
        setwalletview((prev) => !prev)
    }

    const navigator = () => {
        navigate('/dashboard/wallet')
    }

    const onsubmit =async (data)=>{
       

        try{
            const res = await fetch(`http://127.0.0.1:8000/api/startplan/${userprofile}/`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem('token')}`,
                },
              });

          const resdata = await res.json()

          console.log(resdata)
          console.log(authtoken)
          
        }catch(error){

        }
    }
    return <>
        <div className='bg-white shadow-md lg:col-span-2'>
            <div className=' flex justify-between px-8 py-8 text-2xl border-b-2 md:text-3xl'>
                <div>
                    <h1>Welcome to {title}</h1>
                </div>
                <div className="relative">
                    <div onClick={toggleDropdown} className="cursor-pointer">
                        <FaRegCircleUser />
                    </div>

                    <div
                        className={`${dropdown
                            ? 'block transition-opacity opacity-100'
                            : 'hidden transition-opacity opacity-0'
                            } absolute w-48 mt-2 py-2 bg-white border rounded-md shadow-lg text-black text-base z-10`}
                    >
                        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
                            <FaRegCircleUser className="mr-2" />
                            <p>Setting</p>
                        </div>
                        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
                            <FaRegCircleUser className="mr-2" />
                            <p>Setting</p>
                        </div>
                        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
                            <FaRegCircleUser className="mr-2" />
                            <p>Setting</p>
                        </div>
                        <div
                            className="hover:bg-red-200 px-4 py-2 flex items-center cursor-pointer"
                            onClick={handleclick}
                        >
                            <FaRegCircleUser className="mr-2" />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>

            </div>
            <br />

            <div className='flex flex-col justify-between items-center gap-5'>
                <div className='md:flex md:flex-row lg:flex lg:flex-col xl:flex xl:flex-row flex flex-col gap-6'>
                    <div className='bg-white shadow-2xl px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5'>
                        <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                            <p className='text-gray-500'>Wallet balance</p>
                            <div className='text-gray-400' onClick={walllet}>
                                {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>


                        </div>
                        <div className='text-3xl'>
                            {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Current_balance}</p>}
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5'>
                        <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                            <p className='text-gray-500'>Current balance</p>
                            <div className='text-gray-400' onClick={walllet}>
                                {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>


                        </div>
                        <div className='text-3xl'>
                            {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Account_balance}</p>}
                        </div>
                    </div>
                </div>



                <div className='flex justify-evenly gap-[10px] mt-10 border-[1px] rounded-lg w-[70vw] lg:w-[50vw] xl:w-[40vw]  py-8   m-8 border-gray-200  shadow-md'>
                    <div className=' flex flex-col justify-center items-center  text-3xl' >
                        <div className='bg-gray-200 rounded-[300px] text-gray-600 p-5 cursor-pointer' onClick={() => setdeposit(true)}>
                            <RiHomeLine />
                        </div>

                        <p className='text-[15px]'>Withdrawal</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center   text-3xl'>
                        <div className='bg-blue-500 rounded-[300px] text-white p-5 cursor-pointer' onClick={() => setshow_wallet_model(true)}>
                            <AiOutlinePlus />
                        </div>

                        <p className='text-[15px] '>Fund wallet</p>
                    </div>

                    <div className=' flex flex-col justify-center items-center   text-3xl'>
                        <div className='bg-gray-200 text-gray-600 rounded-[300px] p-5 cursor-pointer' >
                            <RiFolderTransferLine />

                        </div>

                        <p className='text-[15px]'>Transfer</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-evenly p-5  bg-white py-10'>

                <form onSubmit={handleSubmit(onsubmit)} className='flex justify-between items-center gap-10 w-[600px] '>
                <h1 className='text-2xl w-full'>Choose a plan</h1>

                    <select  name="payment" className='w-full h-10 border-2 border-gray-400 rounded-md' {...register('plan')}>
                        <option value="100"> 100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                    </select>


                    <button type="submit" className='bg-blue-500 h-[50px] w-[250px] rounded-[400px] text-white text-1xl shadow-md'>
                        Start a plan
                    </button>

                </form>


            </div>
            <div className='flex flex-col justify-center items-center  mb-[80px]'>
                <h1 className='text-2xl my-5 '>Recent Transactions</h1>



                {historyaccess ? <TransactionTable data={userhistory} /> :
                    <div className='flex flex-col'>
                        <p className='text-gray-400'>{userhistory}</p>
                        <div className=' text-3xl text-blue-500  p-6 rounded-3xl flex justify-center items-center '>

                            <FaRegRectangleList />
                        </div>
                    </div>}
            </div>

        </div>
    </>;
}


export default dash_wallet;