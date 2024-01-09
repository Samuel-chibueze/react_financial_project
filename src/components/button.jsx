import React from 'react';

const button = ({title}) => {
    return <div >
            <button   className='w-full bg-[#5B0888] flex justify-center items-center px-4 py-3 mt-4 rounded-md text-[#E5CFF7] hover:bg-[#713ABE]'

            type='submit'>
            
    {title}
</button>
    </div>;
}


export default button;