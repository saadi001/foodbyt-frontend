import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
     return (
          <div>
               <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                         {/* <!-- Page content here --> */}
                         <Navbar></Navbar>
                         <Outlet></Outlet>                                               
                    </div>
                    <div className="drawer-side">
                         <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                         <ul className="menu px-4 py-6 w-80 bg-base-100 text-base-content border">
                              {/* <!-- Sidebar content here --> */}
                              <Cart></Cart>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Main;