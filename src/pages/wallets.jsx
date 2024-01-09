import React, { useState } from 'react';
import Dash_wallet from "../components/dash_wallet"
import Advert_section from '../components/advert_section';
import Sidebar from '../components/sidebar';
import Mobilenav from '../components/mobilenav';
import Wallet_model from '../components/wallet_model';
import Withdrawal_model from '../components/withdrawal_model';
import Transaction_model from '../components/transaction_model';
const wallets = () => {
    const [show_wallet_model, setshow_wallet_model] = useState(false)
    const [deposit, setdeposit] = useState(false)
    const handleclose =()=> setshow_wallet_model(false)
    const [userinfo, setuserinfo] = useState(null)
    const [viewcrypto, setviewcrypto]= useState(false)
    const handlecryptoclose =()=> setviewcrypto(false)
    const handlecrypto = ()=> setviewcrypto(true)
    const [data, setdata] = useState(null)
    const [accountdata, setaccountdata] = useState({})
    const handleclosedeposit =()=> setdeposit(false)


    return <div>
        <Sidebar />
        <Mobilenav />

        <div className='grid xl:grid-cols-3  gap-1 ml-0 lg:ml-[400px]  h-screen'>

            <Dash_wallet setshow_wallet_model={setshow_wallet_model} setdeposit={setdeposit} account={setaccountdata}/>
            <div className='hidden xl:block'>
                <Advert_section />
            </div>
            <Withdrawal_model visible={deposit} onclose={handleclosedeposit} account={accountdata}/>
  <Wallet_model visible={show_wallet_model} setdata={setdata} setshow={handlecrypto} onclose={handleclose} userinfo={setuserinfo} showcrypto={viewcrypto}/>
   <Transaction_model visible={viewcrypto} data={data}  setclose={handlecryptoclose} />
        </div>
    </div>;
}


export default wallets;