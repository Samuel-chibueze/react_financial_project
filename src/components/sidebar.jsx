import React, { useState } from 'react';
import { FaRegCircleUser,FaRegRectangleList } from "react-icons/fa6";
import {BiHomeCircle,BiWallet} from "react-icons/bi";
import {MdAccountBalance} from "react-icons/md"
import Sidebar_tabs from './sidebar_tabs';
import { NavLink,Link} from 'react-router-dom';
import image from "../images/logo_real2.png"


const sidebar = ({ username }) => {
const [isactive, setisactive] = useState(true)

    return <div>
        <div className='hidden h-screen lg:block fixed left-0 bg-white border-gray-200 border-r-2 top-0 w-[400px]'>
            <div className='text-center  mb-[-30px] flex justify-end items-end my-4'>
                <img className='w-[250px] ' src={image} alt="" />
            </div>
            <div className='flex flex-col  gap-2 mt-[12vh]'>
          
            <NavLink to='/dashboard'>
 <Sidebar_tabs title={'Home'} icon={< BiHomeCircle/>}/>
                </NavLink>

                <NavLink to='/dashboard/wallet' >
  <Sidebar_tabs title={'Wallet'}icon={<BiWallet/>}/>
                </NavLink>
                
              


<NavLink to='/dashboard/transaction' >
 <Sidebar_tabs title={'Account'} icon={<MdAccountBalance/>}  />
</NavLink>

<NavLink to='/dashboard/plan'>
<Sidebar_tabs title={'Plan'} icon={<FaRegRectangleList/>}  />
</NavLink>
<NavLink to='/dashboard/more'>
 <Sidebar_tabs title={'More'} icon={< FaRegCircleUser/>}  />
</NavLink>
              
               
              
            </div>
        </div>
    </div>;
}


export default sidebar;