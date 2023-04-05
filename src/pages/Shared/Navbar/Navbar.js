import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Asset/logo/logo1.png'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
     const { user, logOut, cart } = useContext(AuthContext)
     // console.log(cart)
     const handleLogout = () => {
          logOut()
               .then(() => { })
               .catch(err => console.error(err))
     }

     const menu = <>
          <li><Link to={'/'}>Home</Link></li>
          <li tabIndex={0}>
               <a className="">
                    Services
                    <svg className="fill-current rotate-90" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
               </a>
               <ul className="p-3 z-40 bg-white border">
                    <li><Link to={'/items/642610a3091b82068ce48bf4'}>Vajapora Items</Link></li>
                    <li><Link to={'/items/642610a3091b82068ce48bf5'}>Halim</Link></li>
                    <li><Link to={'/items/642610a3091b82068ce48bf6'}>Juice and drinks</Link></li>
                    <li><Link to={'/items/642610a3091b82068ce48bf7'}>Fruits</Link></li>
                    <li><Link to={'/items/642610a3091b82068ce48bf8'}>Muri & Sweets</Link></li>
                    <li><Link to={'/items/642610a3091b82068ce48bf9'}>Biriyani & Kacci</Link></li>

               </ul>
          </li>
          <li><Link to={"/shop"}>Find shop</Link></li>
          <li><Link to={"/faq"}>Service charge</Link></li>
          <li tabIndex={0}>
               <a className="justify-between">
                    Account
                    <svg className="fill-current rotate-90" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
               </a>
               <ul className="p-2 bg-white border">
                    {user ?
                         <>
                              <li><Link to={'/profile'} className='px-6'>Your profile</Link></li>
                              <li onClick={handleLogout}><a className='px-6'>Logout</a></li>
                         </> : <>
                              <li><Link to={'/login'} className='px-6'>Log in</Link></li>
                              <li><Link to={'/signup'} className='px-6'>Sign up</Link></li>
                         </>}

               </ul>
          </li>
     </>


     return (
          <div className={`z-40 sticky top-0 bg-white shadow-sm`}>
               <div className="navbar justify-between gap-3  px-3 md:px-8 lg:px-20 z-50">
                    <div className="">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact font-medium dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-52">
                                   {menu}
                              </ul>
                         </div>
                         <Link to={'/'} className="normal-case text-xl"><img className='w-24 md:w-32' src={logo} alt="" /></Link>
                    </div>
                    <div>
                         <div className="hidden lg:flex lg:items-center ">
                              <ul className="menu menu-horizontal px-2 font-medium">
                                   {menu}
                              </ul>

                         </div>
                         <div className="ml-8 flex items-center gap-4 md:gap-6">
                              <div className='relative'>
                                   <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                   </svg>
                                        <div className={`${cart?.length > 0 && user ? "inline-block" : "hidden"} badge badge-xs bg-primary text-white border-none absolute left-[50%] bottom-[50%]`}>{cart?.length}</div>
                                   </label>
                              </div>
                              <Link to={'/checkout'}><button className="bg-primary text-sm md:text-base text-white px-3 md:px-5 py-2 rounded-3xl font-semibold">Confirm Order</button></Link>
                         </div>
                    </div>

               </div>

               {/* for cart opening */}
               {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">cart</label> */}
          </div>
     );
};

export default Navbar;