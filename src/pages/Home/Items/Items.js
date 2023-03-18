import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../../Asset/Image/Food1.png'

const Items = () => {
     const [iftarItem, setIftarItem] = useState([])
     const navigate = useNavigate()

     useEffect(()=>{
          fetch('https://foodbyt-backend.vercel.app/items')
          .then(res => res.json())
          .then(data => setIftarItem(data))
     },[])

     // const navigateToSingleItemsData = (id) =>{
     //      navigate(`/items/${id}`)
     // }

     return (
          <div className='py-14'>
               <h3 className='text-4xl font-bold text-center mb-14'>Our <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
    <span class="relative text-white">Services</span>
  </span></h3>
               <div className='border p-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-3'>

                         {
                              iftarItem?.map( c => <Link to={`/items/${c._id}`} className='p-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
                              <img className='w-8/12 mx-auto' src={image} alt="" />
                              <div className='mt-3'>
                                   <p className='text-center text-xl font-semibold mb-2 '>{c.itemName}</p>
                                   <p className='text-center'>{c.details}</p>
                              </div>
                         </Link> )
                         }          
                                             
                    </div>
               </div>
          </div>
     );
};

export default Items;