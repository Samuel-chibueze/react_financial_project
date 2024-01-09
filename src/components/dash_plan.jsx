import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AiFillEye,
    AiFillEyeInvisible,
    AiOutlinePlus,
} from 'react-icons/ai';
import {
    RiHomeLine,
    RiFolderTransferLine,
} from 'react-icons/ri';
import {
    FaRegCircleUser,
    FaRegRectangleList,
} from 'react-icons/fa6';
import { AuthContext } from '../context/authcontext';

const InvestmentPlanCard = ({ plan, onPlanClick }) => {
    const { name, description, amount, discount, backgroundColor } = plan;

    return (
        <div
            className={`bg-white h-[40vh] shadow-2xl w-[300px] px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-5 cursor-pointer`}
            style={{ backgroundColor }}
            onClick={() => onPlanClick(plan)}
        >
            <h2 className="text-2xl text-[#A68DAD]">{name}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-gray-500 bold">{discount}</p>
            <div className="flex justify-center items-start text-2xl gap-2 h-[200px] mt-7 text-[#A68DAD] ">
                <p className="text-gray-500 font-mono">{amount}</p>
            </div>
        </div>
    );
};

const DashPlan = ({setvisible, setplaninfo}) => {
    const navigate = useNavigate();
    const {
        title,
        settoken,
        authtoken,
        successmsg,
        setsuccessmsg,
        seterrormsg,
        errormsg,
    } = useContext(AuthContext);
    const [loading, setloading] = useState(true);
    const [user, setuser] = useState('');
    const userprofile = localStorage.getItem('user');
    const [accountinfo, setaccountinfo] = useState('');
    const [userhistory, setuserhistory] = useState('');
    const [dropdown, setDropdown] = useState(false);

    const history = async () => {
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/gethistory/${userprofile}/`
            );
            const resdata = await res.json();
            if (res.status === 200) {
                console.log(resdata);
                setuserhistory(resdata.data[0].id);
            } else {
                setuserhistory(resdata.message);
            }
        } catch (error) { }
    };

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const data = async () => {
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/accountlist/${userprofile}/`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            const resdata = await res.json();

            console.log(resdata);
            if (res.status === 200) {
                setloading(false);
                setaccountinfo(resdata.account);
                setuser(resdata.userinfo);
            } else {
                settoken(false);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                seterrormsg('An error occurred, try again');
                setsuccessmsg('');
                navigate('/signin');
            }
        } catch (error) {
            settoken(false);
            localStorage.removeItem('token');
            setsuccessmsg('');
            seterrormsg('An error occurred, try again ');
            localStorage.removeItem('user');
            navigate('/signin');
        }
    };

    useEffect(() => {
        data();
        history();
    }, []);

    const handleclick = () => {
        settoken(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        seterrormsg('You have logged out of your account ');
        setsuccessmsg('');
        navigate('/signin');
    };

    const handlePlanClick = (plan) => {
        // Implement logic to open a modal with plan details (placeholder)
       

        setvisible(true)
        setplaninfo(plan.name)

        alert(`Clicked on ${plan.name}`);
    };

    const investmentPlans = [
        {
            name: 'Starter Plan',
            description: 'A great plan for beginners.',
            amount: '$100',
            discount: "50% OFF",
            backgroundColor: '#F3EFEF',
        },
        {
            name: 'Pro Plan',
            description: 'For those who want higher returns.',
            amount: '$500',
            discount: "50% OFF",
            backgroundColor: '#E9F5F5',
        },
        {
            name: 'Advanced Plan',
            description: 'Maximize your investment potential.',
            amount: '$1000',
            discount: "50% OFF",
            backgroundColor: '#F4F0EB',
        },
        {
            name: 'Premium Plan',
            description: 'Exclusive benefits for premium members.',
            amount: '$2000',
            discount: "50% OFF",
            backgroundColor: '#FCECD3',
        },
        {
            name: 'Vip Plan',
            description: 'Exclusive benefits for premium members.',
            amount: '$5000',
            discount: "50% OFF",
            backgroundColor: '#FCEED4',
        }
        // Add more plans as needed
    ];

    return (
        <>
            <div className="bg-white shadow-md lg:col-span-2">
                <div className="flex justify-between px-8 py-8 text-2xl border-b-2 md:text-3xl">
                    <div>
                        <h1>Welcome to {title}</h1>
                    </div>
                    <div className="relative">
                        <div
                            onClick={toggleDropdown}
                            className="cursor-pointer"
                        >
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

                <div className="justify-center gap-2 h-[300vh] md:h-[150vh] mt-9 px-10">
                    <div className="md:grid md:grid-cols-2 gap-4 flex flex-col justify-center items-center">
                        {investmentPlans.map((plan, index) => (
                            <InvestmentPlanCard
                                key={index}
                                plan={plan}
                                onPlanClick={handlePlanClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashPlan;
