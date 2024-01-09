import React, { useState }from "react";

// pages
import Homepage from "./pages/homepage";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Forgotpassword from "./pages/Forgot-password";
// //dashboard-pages

import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/wallets";
 import Plan from "./pages/plan";
 import More from "./pages/more";
 import Transaction from "./pages/transaction";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

// layout componets
import Rootlayout from "./rootlayout/rootlayout";
 import Accoutslayout from "./rootlayout/accoutslayout";

//Context




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
   
      <Route path="/" element={<Rootlayout />}>
      <Route index element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="forgot-password" element={<Forgotpassword />} />
     
       <Route path="dashboard/" element={<Accoutslayout />}>
        <Route index element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="plan" element={<Plan/>}/>
        <Route path="more" element={<More/>}/>
        <Route path="transaction" element={<Transaction/>}/>

      </Route> 
    </Route>
    
       
    )
  )
  return (
    <>
   <RouterProvider router={router} />   


    </>
  )
}

export default App;

