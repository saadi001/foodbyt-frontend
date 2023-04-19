import React from 'react';
import './SwiperSlick.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../Asset/Image/halim.jpeg'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperButtons from './SwiperButtons';

const SwiperSlick = () => {
     return (
          <div className=''>
               <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    // autoplay={{
                    //      delay: 2000,
                    //      disableOnInteraction: false,
                    //    }}
                    // pagination={{
                    //      clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
               >
                    <SwiperSlide>
                         <div className='w-full relative'>
                              <img className='w-full z-0' src={img} alt="" />
                              <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>hello</div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='w-full relative'>
                              <img className='w-full z-0' src={img} alt="" />
                              <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>hello</div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='w-full relative'>
                              <img className='w-full z-0' src={img} alt="" />
                              <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>hello</div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='w-full relative'>
                              <img className='w-full z-0' src={img} alt="" />
                              <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>hello</div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='w-full relative'>
                              <img className='w-full z-0' src={img} alt="" />
                              <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>hello</div>
                         </div>
                    </SwiperSlide>
                    <SwiperButtons></SwiperButtons>
                    
               </Swiper>
          </div>
     );
};

export default SwiperSlick;