import React from 'react';
import Landingpage from './Landingpage/Landingpage';
import LandingpageSlick from './Landingpage/LandingpageSlick/LandingpageSlick';
import VajaporaItem from './VajaporaItem/VajaporaItem';
// import SlickCarsousel from './Landingpage/SlickCarsousel';

const Home = () => {
     return (
          // responsiveness calculation (mx-3 md:mx-8 lg:mx-20)
          <div className='w-full'>
               <Landingpage></Landingpage>
               <div className='mx-3 md:mx-8 lg:mx-20'>
                    {/* <SlickCarsousel></SlickCarsousel> */}
                    {/* <LandingpageSlick></LandingpageSlick> */}
                    <VajaporaItem></VajaporaItem>
               </div>
          </div>
     );
};

export default Home;