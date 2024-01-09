import { React,useContext } from 'react';
import { Outlet,useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authcontext';
import errormsg from '../components/errormsg';


const accoutslayout = () => {
const navigate = useNavigate()
const {token,setsuccessmsg,seterrormsg, settoken, authtoken} = useContext(AuthContext)
const localtoken = localStorage.getItem('token')
const user = localStorage.getItem('user')
const state = false

    const send_message=()=>{
        navigate('/signin')
        settoken(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setsuccessmsg('')
        seterrormsg('unauthorized login')
      
    }
       
       
    return (<div>
        {localtoken? <Outlet /> : send_message()}
    </div>)
}



export default accoutslayout;