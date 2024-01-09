import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Mobilenav from '../components/mobilenav';

import { AuthContext } from '../context/authcontext';
import Dash_content from '../components/dash_content';
import Pageloading from '../components/pageloading';
import Successmsg from '../components/successmsg';


import Advert_section from '../components/advert_section';


const Dashboard = () => {
    const navigate = useNavigate()
    const { title, settoken, authtoken, successmsg, setsuccessmsg, seterrormsg, errormsg } = useContext(AuthContext)
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState('')
    const userprofile = localStorage.getItem('user')
    const data = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/accountlist/${userprofile}/`,{
                method:"GET",
                headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`}
            })
            const resdata = await res.json()
            console.log(resdata)
            if (res.status == 200) {
                setloading(false)
                console.log(resdata.userinfo.username)
                setuser(resdata.userinfo.username)
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

    useEffect(()=>{
        data()
    },[])


 
    return (<>
        {loading ? <Pageloading /> :
         <div >

            {/* sidebar */}
            <Sidebar username={"user.username"} />


            {/* mobile view navbar */}
            <Mobilenav />


            {/* main content */}

            <div className='grid xl:grid-cols-3   gap-1 ml-0 lg:ml-[400px]  h-screen'>

              <Dash_content />
                 <div className='hidden xl:block'>
                  <Advert_section/>  
                 </div>
                 
                <div className='top-0 bottom-0 fixed right-0 mr-5 mt-5 '>
                            <Successmsg message={successmsg} username={user} />
                        </div>
            </div>
        </div>}


    </>
    );
};

export default Dashboard;
