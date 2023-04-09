import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Asset/logo/logo1.png"

const Navbar2 = () => {
     return (
          <div className='px-3 md:px-4 lg:px-8 z-50'>
               <div className='py-2 flex justify-between items-center'>
                    <Link to={'/'}><img className='w-24 md:w-32' src={logo} alt="" /></Link>
                    <Link to={'/'} className='bg-primary px-3 py-2 text-white rounded-3xl hidden lg:inline-block'>Go to home page</Link>
                    
                         <label htmlFor="my-drawer-2" className="cursor-pointer p-[6px] hover:bg-slate-900/10 rounded drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                         </svg>
                         </label>
                    
               </div>
          </div>
     );
};

export default Navbar2;