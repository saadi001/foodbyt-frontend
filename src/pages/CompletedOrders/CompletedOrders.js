import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading2 from '../Loading/Loading2';
import { toast } from 'react-hot-toast';

const CompletedOrders = () => {
     const { data: completedOrders = [], isLoading, refetch } = useQuery({
          queryKey: ['pendingOrders', 'pending'],
          queryFn: async () => {
               const res = await fetch(`https://foodbyt-backend.vercel.app/completedOrderForAdmin?order=pending`)
               const data = await res.json()
               console.log(data)
               return data;
          }
     })

     const handleMakePendingOrder = (id) =>{
          fetch(`https://foodbyt-backend.vercel.app/makePendingOrder/${id}`,{
               method: 'PUT'
          })
          .then(res => res.json())
          .then(data => {
               if(data.modifiedCount > 0){
                    refetch()
                    toast.success('make pending orders again.')
               }
          })
     }
     if (isLoading) {
          return <div><Loading2></Loading2></div>
     }
     return (
          <div className='mx-3 md:mx-5 lg:mx-8 2xl:max-w-7xl 2xl:mx-auto pt-5'>
               <p className='text-lg font-semibold text-slate-800 mb-3'>Completed Orders</p>          
               {/* <div className='grid grid-cols-2 gap-3'>
                    {
                         completedOrders?.map(order => <div className='border shadow p-3'>
                              <p>Total: {order?.total}</p>
                              <p>Date: {order?.date}</p>
                              <p>Name: {order?.name}</p>
                              <p>delivery: {order?.order}</p>
                              <div className='w-full flex justify-end'>
                                   <button  className='bg-primary px-3 py-1 rounded-md text-white'>Make completed</button>
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
                                   completedOrders?.map((order, i) => <tr key={order._id}>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{i + 1}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.total}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.date}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.name}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap'>{order?.email}</td>
                                        <td className='text-sm text-gray-600 text-left px-4 py-3 whitespace-nowrap flex gap-2'><span className='bg-primary/20 text-primary px-3 py-1 rounded-full'>{order?.order}</span><span onClick={()=>handleMakePendingOrder(order._id)} className='bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full cursor-pointer'>Make incomplete</span></td>
                                   </tr>)
                              }

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default CompletedOrders;