
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai"
import {} from "react-icons/bs"
import { RiHomeLine, RiFolderTransferLine } from "react-icons/ri"
import { FaRegCircleUser, FaRegRectangleList ,FaUserLarge} from "react-icons/fa6"
import { BsArrowUpRight } from "react-icons/bs"
import Dash_slider from './dash_slider';
import { AuthContext } from '../context/authcontext';



const dash_content = () => {
    const navigate = useNavigate()
    const { title, settoken, authtoken, successmsg, setsuccessmsg, seterrormsg, errormsg } = useContext(AuthContext)

    const [user, setuser] = useState('')
    const [loading, setloading] = useState(true)
    const userprofile = localStorage.getItem('user')
    const [accountinfo, setaccountinfo] = useState('')
    const [userhistory, setuserhistory] = useState('')
    const [dropdown, setDropdown] = useState(false)
     
    console.log('HELLO')


    const hidedropdown = () => {
        setDropdown((prev) => !prev)
    }
    const history = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/gethistory/${userprofile}/`)
            const resdata = await res.json()
            if (res.status == 200) {
             

                setuserhistory(resdata.data[0].id)
            } else {
                setuserhistory(resdata.message)
            }
        } catch (eror) {

        }

    }

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const data = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/accountlist/${userprofile}/`,{
                method:"GET",
                headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`}
            })
            const resdata = await res.json()
            if (res.status == 200) {
                setloading(false)
                console.log(resdata)
                setaccountinfo(resdata.account)
                setuser(resdata.userinfo)

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
    return <>
        <div className=' shadow-md lg:col-span-2 px-5'>
            <div className=' flex justify-between px-8 py-8 text-2xl md:text-3xl text-[#5B0888]'>
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="relative">
                    <div onClick={toggleDropdown} className="cursor-pointer">
                        <FaUserLarge />
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

            <div className='flex flex-col justify-center items-center gap-1'>

                
                <div className='xl:hidden w-[100%] flex h-[200px] mt-[70px] justify-center items-center '>
                    <Dash_slider/>
                </div>
                <div className='  mx-5 py-10 p-10'>
                    <div className='md:grid md:grid-cols-2  gap-2  items-center px-10'>
                        <div className='bg-white shadow-2xl px-10 py-5 rounded-lg flex flex-col mb-6 justify-center items-center gap-5'>
                            <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                                <p className='text-gray-500'>Wallet balance</p>
                                <div className='text-gray-400' onClick={walllet}>
                                    {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </div>


                            </div>
                            <div className='text-3xl'>
                                {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Current_balance}</p>}
                            </div>

                            <div className='border-t-2 border-gray-300 h-5 py-8 px-4 flex justify-start items-center gap-4'>
                                <p>Total Gains</p>
                                <div className='flex gap-2 text-green-600 justify-center items-center'>
                                    <BsArrowUpRight />
                                    {40}%
                                </div>
                            </div>
                        </div>
                        <div className='bg-white mb-6 shadow-2xl px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5'>
                            <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                                <p className='text-gray-500'>Wallet balance</p>
                                <div className='text-gray-400' onClick={walllet}>
                                    {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </div>


                            </div>
                            <div className='text-3xl'>
                                {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Account_balance}</p>}
                            </div>

                            <div className='border-t-2 border-gray-300 h-5 py-8 px-4 flex justify-start items-center gap-4'>
                                <p>Total Gains</p>
                                <div className='flex gap-2 text-green-600 justify-center items-center'>
                                    <BsArrowUpRight />
                                    {40}%
                                </div>
                            </div>
                        </div>
                        <div className='bg-white  mb-6  shadow-2xl px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5'>
                            <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                                <p className='text-gray-500'>Wallet balance</p>
                                <div className='text-gray-400' onClick={walllet}>
                                    {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </div>


                            </div>
                            <div className='text-3xl'>
                                {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Current_balance}</p>}
                            </div>

                            <div className='border-t-2 border-gray-300 h-5 py-8 px-4 flex justify-start items-center gap-4'>
                                <p>Total Gains</p>
                                <div className='flex gap-2 text-green-600 justify-center items-center'>
                                    <BsArrowUpRight />
                                    {40}%
                                </div>
                            </div>
                        </div>
                        <div className='bg-white  mb-6 shadow-2xl px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5'>
                            <div className=' flex justify-center items-center text-2xl gap-5 mt-7 text-[#A68DAD] '>
                                <p className='text-gray-500'>Wallet balance</p>
                                <div className='text-gray-400' onClick={walllet}>
                                    {walletview ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </div>


                            </div>
                            <div className='text-3xl'>
                                {walletview ? <p className='text-gray-400'>******</p> : <p>${accountinfo.Current_balance}</p>}
                            </div>

                            <div className='border-t-2 border-gray-300 h-5 py-8 px-4 flex justify-start items-center gap-4'>
                                <p>Total Gains</p>
                                <div className='flex gap-2 text-green-600 justify-center items-center'>
                                    <BsArrowUpRight />
                                    {40}%
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

              
              




                <div className=' mt-10 border-[1px] rounded-lg w-[70vw] lg:w-[50vw] xl:w-[40vw]   hover:bg-blue-100 duration-300 ease-in-out   m-8 border-gray-200  shadow-md'>

                    <div className=' flex justify-center items-center h-[60px] text-3xl' onClick={() => navigate('/dashboard/wallet')}>
                        <div className='text-black rounded-[300px]  p-5 cursor-pointer' >
                            <AiOutlinePlus />
                        </div>

                        <p className='text-[20px] '>Add Money </p>
                    </div>


                </div>
            </div>

            <div className='flex justify-evenly p-5 bg-white '>
                <section >
                    <h1 className='text-2xl mb-1'>Verify account</h1>
                    <span className='itallic text-white rounded-2xl p-1 my-3 text-[14px] bg-red-500 font-bold'>Unverified</span>
                </section>

                <button className='bg-blue-500 px-9 rounded-[400px] text-white text-1xl shadow-md'>
                    Verify
                </button>

            </div>
            <div className='flex flex-col justify-center items-center  mb-[80px]'>
                <h1 className='text-2xl my-5 '>Recent Transactions</h1>
                <p className='text-gray-400'>{userhistory} </p>
                <div className=' my-[40px] text-3xl text-blue-500 bg-gray-100 p-6 rounded-[400px] '>
                    <FaRegRectangleList />
                </div>
            </div>

        </div>
    </>;
}


export default dash_content;