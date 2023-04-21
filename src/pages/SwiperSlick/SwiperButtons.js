import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperButtons = () => {
     const swiper = useSwiper()
     return (
          <div className='flex justify-end gap-2 mt-2'>
               <button  className='bg-primary text-white rounded-full p-[6px] ' onClick={() => swiper.slidePrev()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
               </button>
               <button className='bg-primary text-white rounded-full p-[6px]' onClick={() => swiper.slideNext()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
               </svg>
               </button>
          </div>
     );
};

export default SwiperButtons;