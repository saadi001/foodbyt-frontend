import React from 'react';
import halim from '../../../Asset/Image/halim.jpeg'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const Shops = () => {
     const { data: shops = [], isLoading, refetch } = useQuery({
          queryKey: ["shops"],
          queryFn: async () => {
               const res = fetch("https://foodbyt-backend.vercel.app/shops")
               const data = (await res).json()
               return data;
          }
     })

     const checking = [
          { id: 1 },
          { id: 2 },
          { id: 3 },
     ]

     return (
          <div className='py-14'>
               <h5 className='mb-14 font-bold text-center text-4xl mx-5'>Order from your <br />  favourite <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#EA2A00] relative inline-block">
                    <span class="relative text-white">Hotel/Restaurent</span>
               </span></h5>
               <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                         shops?.map(shop => <Link to={'/shop'} key={shop._id} className=''>
                              <img className='object-cover w-full rounded-xl border' src={shop?.image} alt="" />
                              <div className='text-xl font-bold mt-4 capitalize'>{shop?.name}</div>
                              <p className='text-sm'>{shop?.adress}</p>
                              <div className='flex items-center justify-start gap-3 mt-4'>
                                   <p className='text-lg font-semibold'>5.0</p>
                                   <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                   </div>
                              </div>
                         </Link>)
                    }
               </div>
               <Link to={'/shop'} className='flex justify-end '>
                    <div className='group/more flex items-center bg-primary/90 hover:bg-primary text-white px-3 py-1 rounded-3xl text-sm'>
                         <span>See All</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/more:translate-x-1 duration-100">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                         </svg>
                    </div>
               </Link>
          </div>
     );
};

export default Shops;