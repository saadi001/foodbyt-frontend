import React, { useContext } from 'react';
import NavcolorProvider, { NavColorContext } from '../../Contexts/NavcolorProvider';
import Footer from '../Shared/Footer/Footer';
import Contactus from './ContactUs/Contactus';
import FolKhejurItems from './FolKhejurItems/FolKhejurItems';
import HalimItems from './HalimItems/HalimItems';
import Landingpage from './Landingpage/Landingpage';
import LandingpageSlick from './Landingpage/LandingpageSlick/LandingpageSlick';
import Shops from './Shops/Shops';
import ShorvotItems from './ShorvotItems/ShorvotItems';
import VajaporaItem from './VajaporaItem/VajaporaItem';
// import SlickCarsousel from './Landingpage/SlickCarsousel';

const Home = () => {     
     
     return (
          // responsiveness calculation (mx-3 md:mx-8 lg:mx-20)
          <div className='w-full'>
               <Landingpage></Landingpage>
               <div className='mx-3 md:mx-8 lg:mx-20 pt-5'>
                    {/* <SlickCarsousel></SlickCarsousel> */}
                    {/* <LandingpageSlick></LandingpageSlick> */}
                    <VajaporaItem></VajaporaItem>
                    <HalimItems></HalimItems>
                    <ShorvotItems></ShorvotItems>
                    <FolKhejurItems></FolKhejurItems>
                    <Shops></Shops>
                    <Contactus></Contactus>
                    <Footer></Footer>
               </div>
          </div>
     );
};

export default Home;