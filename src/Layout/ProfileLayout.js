import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar2 from '../pages/Shared/Navbar/Navbar2';

const ProfileLayout = () => {
     return (
          <div>
               <Navbar2></Navbar2>
               <div className='mt-[1px]'>
                    <div className="drawer drawer-mobile">
                         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                         <div className="drawer-content bg-slate-500/10">
                              {/* page content  */}
                              {/* <label htmlFor="my-drawer-2" className="bg-primary drawer-button lg:hidden">Open</label> */}
                              <Outlet></Outlet>

                         </div>
                         <div className="drawer-side">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold">
                                   {/* sidebar content */}
                                   <li><Link to={'/profile'}>Your profile</Link></li>

                              </ul>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileLayout;