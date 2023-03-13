import { MapPinIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import food from '../../../Asset/Image/Food1.png'
import halim from '../../../Asset/Image/halim.jpeg'
import juice from '../../../Asset/Image/juice.jpeg'
import lebu from '../../../Asset/Image/lebu.jpeg'
import { NavColorContext } from '../../../Contexts/NavcolorProvider';
import LandingpageSlick from './LandingpageSlick/LandingpageSlick'

const Landingpage = () => {
     const {color, setColor} = useContext(NavColorContext)

     const changeColor = () => {
          console.log('scrolled')
          if (window.scrollY > 10) {
               setColor(true)
               console.log('scrolled')
          }
          else {
               setColor(false)
          }
     }

     window.addEventListener('scroll', changeColor);

     return (
          <div className='bg-blue-200/40'>
               <div className='min-h-screen flex mx-3 md:mx-8 lg:mx-20'>
                    <div className='w-1/2 relative flex items-center'>
                         <div>
                              <p className='text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                              <p className='text-5xl font-bold my-3'>Order your favourite <span className='text-[#EA2A00]'>Iftar</span> <br /> From Home</p>
                              {/* <div className='my-5'><input className='bg-white py-3 px-5 rounded-[50px] w-[400px] shadow-lg' type="text" /></div> */}
                              <div className='mt-16  flex gap-4'>
                                   <div className='border '><img className='object-cover w-full h-full' src={halim} alt="" /></div>
                                   <div className='border '><img className='object-cover w-full h-full' src={juice} alt="" /></div>
                                   <div className='border '><img className='object-cover w-full h-full' src={lebu} alt="" /></div>
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