import { ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect, useState } from 'react';
import food from '../../../Asset/Image/Food1.png'
import juice from '../../../Asset/Image/juice.png'
import peyaju from '../../../Asset/Image/peyaju.jpeg'
import chola from '../../../Asset/Image/chola.jpeg'
import { Link } from 'react-router-dom';
import SwiperSlick from '../../SwiperSlick/SwiperSlick';


const Landingpage = () => {
     const [navBackground, setNavBackground] = useState('transparent');

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 10) {
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
          <div className='bg-primary/5'>
               {/* <Navbar></Navbar> */}
               <div className='min-h-screen flex mx-5 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto'>
                    <div className='md:w-1/2 w-full relative flex items-center'>
                         <div className='w-full'>
                              <p className='text-lg md:text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                              <p className='text-[36px] md:text-[42px] font-bold my-3'>Order your favourite <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
                                   <span className="relative text-white">Iftar</span>
                              </span> <br /> From Home</p>                         

                              {/* slider  */}
                              <p className='mt-24 md:mt-16 capitalize font-semibold text-sm mb-3 text-primary flex items-center gap-2'>Top selling products <ChevronRightIcon className='w-[14px] h-[14px]'></ChevronRightIcon></p>
                              
                              <div className='w-full'><SwiperSlick></SwiperSlick></div>
                         </div>
                    </div>
                    <div className='w-1/2 hidden md:inline-block'>
                         <img className=' w-full' src={food} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Landingpage;