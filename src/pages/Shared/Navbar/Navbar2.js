import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Asset/logo/logo1.png"

const Navbar2 = () => {
     return (
          <div className='px-5 md:px-8 lg:px-20 z-50'>
               <div className='py-2 flex justify-between items-center'>
                    <Link to={'/'}><img className='w-24 md:w-32' src={logo} alt="" /></Link>
                    <Link to={'/'} className='bg-primary px-3 py-2 text-white rounded-3xl'>Go to home page</Link>
               </div>
          </div>
     );
};

export default Navbar2;