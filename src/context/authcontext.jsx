import { stringify } from 'postcss';
import React, { createContext, useEffect, useState } from 'react';


// Create the authentication context
export const AuthContext = createContext();

// Create the context provider component
export const AuthContextProvider = ({ children }) => {
  const title = "ApexGain Financial"
  const [token, settoken] = useState(true);
  const [authtoken, setauthtoken] = useState(() => localStorage.getItem('token') ? localStorage.getItem("token"): null)
  const [user, setuser] = useState(localStorage.getItem('user'))
  const [successmsg, setsuccessmsg] = useState('')
  const [errormsg, seterrormsg] = useState('')
  const [loadstate, setloadstate] = useState(true)

  useEffect(() => {
    const localtoken = localStorage.getItem('token')
    if (localtoken) {
      settoken(true)
    } else {
      settoken(false)
    }
  }, [])

  setTimeout(() => {
    if(successmsg || errormsg){
       setsuccessmsg('')
    seterrormsg('')
    }
   
  }, 5000);






  return (
    <AuthContext.Provider value={{loadstate, setloadstate, title,token, settoken, authtoken, setuser, user, successmsg, setsuccessmsg, errormsg, seterrormsg }}>
      {children}
    </AuthContext.Provider>
  );
};
