import React from 'react';
import Advert_section from '../components/advert_section';
import Sidebar from '../components/sidebar';
import Mobilenav from '../components/mobilenav';
import Dash_transact from '../components/dash_transact';
const transaction = () => {
    return <div>
        <Sidebar />
        <Mobilenav />

        <div className='grid xl:grid-cols-3  gap-1 ml-0 lg:ml-[400px]  h-screen'>
       <Dash_transact/>
            
            <div className='hidden xl:block'>
                  <Advert_section/>  
                 </div>
        </div>
    </div>;
}


export default transaction;