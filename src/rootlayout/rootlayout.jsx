 import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
const rootlayout = () => {

      

    return (<div>
      <Navbar/>
        <main className='h-screen mb-[50px] '>
       {/* {token?(localStorage.removeItem('token'),settoken(false)): <Outlet />} */}
       <Outlet/>
        </main>
      
    </div>);
}


export default rootlayout;