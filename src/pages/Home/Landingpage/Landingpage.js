import { MapPinIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';
import food from '../../../Asset/Image/Food1.png'
import halim from '../../../Asset/Image/halim.jpeg'
import juice from '../../../Asset/Image/juice.jpeg'
import lebu from '../../../Asset/Image/lebu.jpeg'
import { NavColorContext } from '../../../Contexts/NavcolorProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import LandingpageSlick from './LandingpageSlick/LandingpageSlick'

const Landingpage = () => {
     const [navBackground, setNavBackground] = useState('transparent');

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 0) {
                    setNavBackground('#333');
               } else {
                    setNavBackground('transparent');
               }
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <div className='bg-blue-200/40'>
               {/* <Navbar></Navbar> */}
               <div className='min-h-screen flex mx-3 md:mx-8 lg:mx-24 '>
                    <div className='w-1/2 relative flex items-center'>
                         <div>
                              <p className='text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                              <p className='text-[42px] font-bold my-3'>Order your favourite <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
                                   <span class="relative text-white">Iftar</span>
                              </span> <br /> From Home</p>
                              {/* <div className='my-5'><input className='bg-white py-3 px-5 rounded-[50px] w-[400px] shadow-lg' type="text" /></div> */}
                              <div className='mt-16  flex gap-4'>
                                   <div className='border relative'>
                                        <img className='object-cover w-full h-full' src={halim} alt="" />
                                        <div className='bg-white absolute left-2 right-2 bottom-2 px-2 py-2 font-semibold'>Halim</div>
                                   </div>
                                   <div className='border relative'><img className='object-cover w-full h-full' src={juice} alt="" /><div className='bg-white absolute left-2 right-2 bottom-2 px-2 py-2 font-semibold'>Halim</div></div>
                                   <div className='border relative'><img className='object-cover w-full h-full' src={lebu} alt="" /><div className='bg-white absolute left-2 right-2 bottom-2 px-2 py-2 font-semibold'>Halim</div></div>
                                   {/* <LandingpageSlick></LandingpageSlick> */}
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