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
                             <Outlet></Outlet>
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                         </div>
                         <div className="drawer-side">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                   {/* sidebar content */}
                                   <li><Link to={'/profile'}>Your profile</Link></li>
                                   <li><a>Sidebar Item 2</a></li>
                              </ul>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileLayout;