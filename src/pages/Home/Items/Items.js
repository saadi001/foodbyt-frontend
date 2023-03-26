import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../../Asset/Image/Food1.png';
import img from '../../../Asset/Image/vajapora 2.jpeg'

const Items = () => {
     const [iftarItem, setIftarItem] = useState([])

     useEffect(() => {
          fetch('https://foodbyt-backend.vercel.app/items')
               .then(res => res.json())
               .then(data => setIftarItem(data))
     }, [])


     return (
          <div id='services' className='py-14'>
               <h3 className='text-4xl font-bold text-center mb-14'>Our <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
                    <span class="relative text-white">Services</span>
               </span></h3>
               <div className='border p-4 md:p-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-2 md:grid-cols-3'>

                         {
                              iftarItem?.map(c => <Link key={c._id} to={`/items/${c._id}`} className='p-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
                                   <div className='w-28 md:w-44 h-28 md:h-44  mx-auto '>
                                        <img className='object-cover w-full h-full rounded-full' src={c.image} alt="" />
                                   </div>
                                   <div className='mt-2 md:mt-3'>
                                        <p className='text-center text-base md:text-xl font-semibold mb-1 md:mb-2 '>{c.itemName}</p>
                                        <p className='text-center text-xs md:text-sm'>{c.details}</p>
                                   </div>
                              </Link>)
                         }

                    </div>
               </div>
          </div>
     );
};

export default Items;