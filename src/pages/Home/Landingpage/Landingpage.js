import { ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React, { } from 'react';
import food from '../../../Asset/Image/Food1.png'
import SwiperSlick from '../../SwiperSlick/SwiperSlick';
import './Landingpage.css'
import foodImage from "../../../Asset/Image/FoodImage.png"


const Landingpage = () => {
     // const [navBackground, setNavBackground] = useState('transparent');

     // useEffect(() => {
     //      const handleScroll = () => {
     //           if (window.scrollY > 10) {
     //                setNavBackground('#333');
     //           } else {
     //                setNavBackground('transparent');
     //           }
     //      };

     //      window.addEventListener('scroll', handleScroll);

     //      return () => {
     //           window.removeEventListener('scroll', handleScroll);
     //      };
     // }, []);

   
     // background-color: rgb(255, 255, 255);
     // background-image: radial-gradient(at 100% 100%, rgb(156, 163, 175) 0, transparent 36%), radial-gradient(at 70% 32%, rgb(255, 237, 213) 0, transparent 100%), radial-gradient(at 10% 64%, rgb(221, 214, 254) 0, transparent 87%), radial-gradient(at 66% 76%, rgb(239, 68, 68) 0, transparent 38%), radial-gradient(at 0% 62%, rgb(253, 164, 175) 0, transparent 60%);
   
   
     return (
          <div className='background'>
               {/* <Navbar></Navbar> */}
               <div className='min-h-screen flex mx-5 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto'>
                    <div className='lg:w-1/2 w-full relative flex items-center'>
                         <div className='w-full'>
                              <p className='text-lg mt-16 md:text-xl font-medium flex items-center gap-1'><MapPinIcon className='w-5 h-5 text-[#EA2A00]'></MapPinIcon> Daffodil International University</p>
                              <p className='text-[36px] md:text-[42px] font-bold my-3'>Order your favourite <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
                                   <span className="relative text-white">Iftar</span>
                              </span> <br /> From Home</p>                         

                              {/* slider  */}
                              <p className='mt-24 md:mt-16 capitalize font-semibold text-sm mb-3 text-primary flex items-center gap-2'>Top selling products <ChevronRightIcon className='w-[14px] h-[14px]'></ChevronRightIcon></p>
                              
                              <div className='w-full '><SwiperSlick></SwiperSlick></div>
                         </div>
                    </div>
                    <div className='w-1/2 hidden  lg:flex items-center justify-center'>
                         <img className=' w-9/12 mt-12 ' src={foodImage} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Landingpage;