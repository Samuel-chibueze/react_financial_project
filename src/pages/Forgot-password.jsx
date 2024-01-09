import { useState } from 'react';
import React from 'react';
import Forgotpassform from '../components/forgotpassform';
import Resetpasswordform from '../components/restpasswordform';
import image from "../images/wallet_4.jpeg";



const Forgotpassword= () => {
 const [verified, setverified]=useState(true);
 const [iddata, setiddata] = useState()
 
 const handlesubmit =(data)=>{
  data= {
    "boolean":data.boolean,
    "id": data.id
}
    setverified(data.boolean)
    setiddata(data.id)
 }



    return (<div className=''> 
    <div className='grid lg:grid-cols-3  r m-auto w-[80vw]  h-[60vh] grid-cols-1  '>
        <div className='h-auto ml-[-200px]  hidden lg:block   '>
             <img className='w-[30vw] my-11 mx-[200px] mt-[80px] m-auto' src={image} alt="" />
        </div>

        <div className=' w-[70vw] md:w-[50vw] m-auto lg:mt-[20vh]  lg:w-[40vw] md:col-span-2 sm:w-[60vw] lg:m-auto mt-[15vh] mb-[100px] '>

          {verified? < Forgotpassform submitdata={handlesubmit} />: <Resetpasswordform data={iddata}/> }
        
        
        </div>

       
    
</div>
   
        
     
    </div>);
}


export default Forgotpassword;