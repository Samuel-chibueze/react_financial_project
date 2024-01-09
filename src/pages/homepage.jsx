          import React,{useContext}from 'react';
        
          import Home_section_1 from '../components/home_section_1';
          import Home_section_2 from '../components/home_section_2';
          import Home_section_3 from '../components/home_section_3';


          const homepage = () => {

            
            

              return <div className='w-[80%] h-screen mx-auto'>
                      
           <Home_section_1/>
           <Home_section_2/>
           <Home_section_3/>
                

              </div>;
          }


          export default homepage;