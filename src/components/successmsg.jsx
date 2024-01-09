import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../context/authcontext';


const successmsg = ({message,username}) => {
    const {setsuccessmsg,successmsg} = useContext(AuthContext)
    return <div>
        {successmsg && <div className={successmsg?`bg-green-300
         rounded-lg 
         text-[15px] 
         h-[30px]
          flex
           justify-between
           p-5
           mb-10
            items-center 
             shadow-lg 
             w-full 
             gap-5 
             text-center
               text-white`
               :
               " hidden"}>
           
               <p className=' ml-6'>{message+" "+username} </p><span className='mr-1 text-2xl' onClick={()=>setsuccessmsg('')}><MdOutlineCancel/></span> 
            
        </div>}
       
    </div>;
}


export default successmsg