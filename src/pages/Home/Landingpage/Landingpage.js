import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Landingpage = () => {
     return (
          <div className='min-h-screen border bg-[#FEF1F1] flex'>
               <div className='w-1/2 border flex items-center'>
                    <div>
                         <p className='text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                         <p className='text-5xl font-semibold my-3'>Order your favourite Iftar <br /> From Home</p>
                    </div>
               </div>
               <div className='w-1/2'>

               </div>
          </div>
     );
};

export default Landingpage;