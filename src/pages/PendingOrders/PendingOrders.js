import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading2 from '../Loading/Loading2';

const PendingOrders = () => {
     const { data: pendingOrders = [], isLoading, refetch } = useQuery({
          queryKey: ['pendingOrders', 'pending'],
          queryFn: async () => {
               const res = await fetch(`https://foodbyt-backend.vercel.app/pendingOrderForAdmin?order=pending`)
               const data = await res.json()
               // console.log(data)
               return data;
          }
     })

     if (isLoading) {
          return <div><Loading2></Loading2></div>
     }
     return (
          <div className='mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto pt-5'>
               <div className='grid grid-cols-2 gap-3'>
                    {
                         pendingOrders?.map(order => <div className='border shadow p-3'>
                              <p>Total: {order?.total}</p>
                              <p>Date: {order?.date}</p>
                              <p>Name: {order?.name}</p>
                              <p>delivery: {order?.order}</p>
                              <div className='w-full flex justify-end'>
                                   <button  className='bg-primary px-3 py-1 rounded-md text-white'>Make completed</button>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default PendingOrders;