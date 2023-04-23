import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading2 from '../Loading/Loading2';

const Orders = () => {
     const {data: Orders = [], isLoading, refetch} = useQuery({
          queryKey: ["orders"],
          queryFn: async ()=>{
               const res = fetch('https://foodbyt-backend.vercel.app/orders',{
                    headers: {
                         authorization : `bearer ${localStorage.getItem('accessToken')}`
                    }
               })
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
          <div className='mx-3 md:mx-5 lg:mx-8 2xl:max-w-7xl 2xl:mx-auto pt-5'>
               <p className='text-lg font-semibold text-slate-800 mb-3'>Total orders {}</p>
               {/* <div className='grid grid-cols-2 gap-3'>
                    {
                         Orders?.map(order => <div key={order._id} className='border shadow p-3'>
                              <p>Total: {order?.total}</p>
                              <p>Date: {order?.date}</p>
                              <p>Name: {order?.name}</p>
                              <p>delivery: {order?.order}</p>
                              <div className='w-full flex justify-end'>
                                   <button onClick={()=>handleCompleteOrders(order._id)} className='bg-primary px-3 py-1 rounded-md text-white'>Make completed</button>
                              </div>
                         </div>)
                    }                    
               </div> */}

               <div className='overflow-x-auto rounded border border-gray-200'>
                    <table className='w-full text-sm divide-y divide-gray-300'>
                         <thead className='bg-gray-200 font-normal py-3'>
                              <tr className=''>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>No</th>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>Total TK</th>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>Date</th>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>Name</th>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>Email</th>
                                   <th className='px-4 py-3 text-left whitespace-nowrap'>Delivery status</th>
                              </tr>
                         </thead>
                         <tbody className='bg-white divide-y divide-gray-200'>
                              {
                                   Orders?.map((order, i) => <tr>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{i+1}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.total}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.date}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.name}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.email}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'><span className={`${order?.order.toLowerCase() === 'pending' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-500'} px-3 py-1 text-xs rounded-full `}>{order?.order}</span></td>
                                   </tr>)
                              }
                              
                         </tbody>
                    </table>
               </div>
          </div>
          
     );
};

export default Orders;