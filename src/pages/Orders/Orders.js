import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading2 from '../Loading/Loading2';

const Orders = () => {
     const {data: Orders = [], isLoading, refetch} = useQuery({
          queryKey: ["orders"],
          queryFn: async ()=>{
               const res = fetch('https://foodbyt-backend.vercel.app/orders')
               const data = (await res).json()
               return data;
          }
     })

     const handleCompleteOrders = (id) =>{
          fetch(`https://foodbyt-backend.vercel.app/orders/${id}`,{
               method: "PUT"
          })
          .then(res => res.json())
          .then(data => {
               if(data.modifiedCount > 0){
                    refetch()
                    toast.success("order has updated as completed.")
               }
          })
     }

     if(isLoading){
          return <div><Loading2/></div>
     }
     return (
          <div className='mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto pt-5'>
               <div className='grid grid-cols-2 gap-3'>
                    {
                         Orders?.map(order => <div className='border shadow p-3'>
                              <p>Total: {order?.total}</p>
                              <p>Date: {order?.date}</p>
                              <p>Name: {order?.name}</p>
                              <p>delivery: {order?.order}</p>
                              <div className='w-full flex justify-end'>
                                   <button onClick={()=>handleCompleteOrders(order._id)} className='bg-primary px-3 py-1 rounded-md text-white'>Make completed</button>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Orders;