import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperButtons = () => {
     const swiper = useSwiper()
     return (
          <div>
               <button onClick={()=>swiper.slidePrev()}>prev</button>
               <button onClick={()=>swiper.slideNext()}>next</button>
          </div>
     );
};

export default SwiperButtons;