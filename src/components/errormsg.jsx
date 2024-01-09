import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../context/authcontext';
import { useCallback, useContext } from 'react';


const errormsg = ({message}) => {
    const {seterrormsg,errormsg} = useContext(AuthContext)
    return <div>
        {errormsg &&  <div className={errormsg?`bg-red-400
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
               "hidden"}>
           
               <p className=' ml-6'>{message} </p><span className='mr-1 text-2xl' onClick={()=>seterrormsg('')}><MdOutlineCancel/></span> 
            
        </div>}
    </div>;
}


export default errormsg;