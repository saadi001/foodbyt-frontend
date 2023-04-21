import React from 'react';
import './SwiperSlick.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../Asset/Image/halim.jpeg'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperButtons from './SwiperButtons';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading2 from '../Loading/Loading2';

const SwiperSlick = () => {
     const {data: advertisement=[], isLoading} = useQuery({
          queryKey: ["advertisement"],
          queryFn: async ()=>{
              const res = await fetch('https://foodbyt-backend.vercel.app/advertisement')
              const data = await res.json()
              return data;
          }
     })

     if(isLoading){
          return <Loading2></Loading2>
     }
     return (
          <div className=''>
               <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    autoplay={{
                         delay: 2000,
                         disableOnInteraction: false,
                       }}
                    // pagination={{
                    //      clickable: true,
                    // }}
                    // navigation={true}
                    breakpoints={{
                         640: {
                           spaceBetween: 10,
                         },
                         
                       }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
               >
                    {
                         advertisement?.map(ad => <SwiperSlide>
                              <div className='w-full relative'>
                                   <Link to={ad?.link}>
                                   <div className='md:h-[160px] h-[120px]'><img className='w-full h-full object-cover z-0' src={ad?.image} alt="" /></div>
                                   <div className='absolute bg-white font-semibold z-50 left-2 right-2 bottom-2 p-2 text-sm capitalize'>{ad?.name}</div></Link>
                              </div>
                         </SwiperSlide>)
                    }
                    
                    <SwiperButtons></SwiperButtons>
                    
               </Swiper>
          </div>
     );
};

export default SwiperSlick;