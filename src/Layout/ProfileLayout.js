import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar2 from '../pages/Shared/Navbar/Navbar2';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const ProfileLayout = () => {
     const { user } = useContext(AuthContext)
     const [isAdmin] = useAdmin(user?.email)
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
                                   {
                                        isAdmin && <>
                                             <li><Link to={'/profile/users'}>Users</Link></li>
                                             <li><Link to={'/profile/pendingOrders'}>Pending Orders</Link></li>
                                             <li><Link to={'/profile/completedOrders'}>Completed Orders</Link></li>
                                             <li><Link to={'/profile/TotalOrders'}>Total Orders</Link></li>
                                        </>
                                   }

                              </ul>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfileLayout;