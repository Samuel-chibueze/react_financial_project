import React from 'react';
import { FaRegCircleUser,FaRegRectangleList } from "react-icons/fa6";
import {BiHomeCircle,BiWallet} from "react-icons/bi";
import {MdAccountBalance} from "react-icons/md"
import Mobile_tabs from './mobile_tabs';
const mobilenav = () => {
    return <div>
          <div className='bottom-0 fixed bg-white shadow-md border-t-2  w-[100%] lg:hidden flex  justify-between items-center'>
        
          <Mobile_tabs title={'Home'} icon={< BiHomeCircle/>}/>
          <Mobile_tabs title={'Wallet'}icon={<BiWallet/>}/>
          <Mobile_tabs title={'Feed'} icon={<FaRegRectangleList/>}/>
          <Mobile_tabs title={'Plan'} icon={<MdAccountBalance/>}/>
          <Mobile_tabs title={'More'} icon={< FaRegCircleUser/>}/>




</div>
    </div>;
}

export default mobilenav;