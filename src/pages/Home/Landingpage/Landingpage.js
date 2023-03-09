import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import food from '../../../Asset/Image/Food1.png'
import halim from '../../../Asset/Image/halim.jpeg'
import juice from '../../../Asset/Image/juice.jpeg'
import lebu from '../../../Asset/Image/lebu.jpeg'

const Landingpage = () => {
     return (
          <div className='bg-[#FEF1F1]'>
               <div className='min-h-screen  flex mx-3 md:mx-8 lg:mx-20'>
                    <div className='w-1/2  flex items-center'>
                         <div>
                              <p className='text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                              <p className='text-5xl font-semibold my-3'>Order your favourite Iftar <br /> From Home</p>
                              <input className='bg-white py-3 px-2' type="text" />
                              <div className='mt-10  flex gap-4'>
                                   <div className='border'><img src={halim} alt="" /></div>
                                   <div className='border'><img src={juice} alt="" /></div>
                                   <div className='border'><img src={lebu} alt="" /></div>
                              </div>
                         </div>
                    </div>
                    <div className='w-1/2'>
                         <img className=' w-full' src={food} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Landingpage;