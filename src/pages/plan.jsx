import React, { useState } from 'react';
import Advert_section from '../components/advert_section';
import Sidebar from '../components/sidebar';
import Mobilenav from '../components/mobilenav';
import Dash_plan from '../components/dash_plan';
import Choose_plan_model from '../components/choose_plan_model';

const Plan = () => { // Fixed the function declaration
  const [planinfo, setplaninfo] = useState("");
  const [visible, setvisible] = useState(false);

  const closevisible = () => setvisible(false);
  console.log(visible, planinfo);

  return (
    <div>
      <Sidebar />
      <Mobilenav />

      <div className='grid xl:grid-cols-3 gap-1 ml-0 lg:ml-[400px] h-screen'>
        <Dash_plan setvisible={setvisible} setplaninfo={setplaninfo} />
        <Choose_plan_model />
        <div className='hidden xl:block'>
          <Advert_section />
        </div>
      </div>
    </div>
  );
};

export default Plan; // Fixed the export statement
