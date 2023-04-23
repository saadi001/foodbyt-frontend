import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading2 from '../pages/Loading/Loading2';

const Profile = () => {
     const { user } = useContext(AuthContext)
     const { data: pendingOrders = [], isLoading, refetch } = useQuery({
          queryKey: ['pendingOrders', user?.email],
          queryFn: async () => {
               const res = await fetch(`https://foodbyt-backend.vercel.app/pendingOrders?email=${user?.email}`, {
                    headers: {
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
               })
               const data = await res.json()
               console.log(data)
               return data;
          }
     })

     const { data: completedOrders = [] } = useQuery({
          queryKey: ['completedOrders', user?.email],
          queryFn: async () => {
               const res = await fetch(`https://foodbyt-backend.vercel.app/completedOrder?email=${user?.email}`, {
                    headers: {
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
               })
               const data = await res.json()
               return data;
          }

     })

     // slicing pending orders object 
     const pendingObject = []
     for (const element of pendingOrders) {
          if (typeof element === "object" && !Array.isArray(element)) {
               pendingObject.push(element)
          }
     }
     console.log(pendingObject)

     if (isLoading) {
          return <div className='mt-5'><Loading2></Loading2></div>
     }

     return (
          <div className='p-5 md:p-8'>
               <div className='max-w-7xl lg:mx-auto'>
                    <div className='flex gap-3'>
                         <div className='w-24'>
                              <img className='w-full h-full object-cover' src={user?.photoURL} alt="" />
                         </div>
                         <div className='font-semibold text-xl'>
                              <p>{user?.displayName}</p>
                              <p className='text-sm'>{user?.email}</p>
                         </div>

                    </div>
                    <div className='mt-8 xl:mt-16'>
                         <p className='mb-3 text-lg font-medium'>Your pending orders:</p>
                         {
                              pendingOrders.length > 0 ? <div className="overflow-x-auto max-w-7xl">
                                   <table className="table table-zebra w-full">
                                        {/* head */}
                                        <thead>
                                             <tr>
                                                  <th></th>
                                                  <th>Date</th>
                                                  <th>Amount</th>
                                                  <th>Delivery status</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  pendingOrders?.map((product, i) => <tr key={i}>
                                                       <th>{i + 1}</th>
                                                       <td>{product?.date}</td>
                                                       <td>{product?.total}</td>
                                                       <td>{product?.order}</td>
                                                  </tr>)
                                             }
                                        </tbody>
                                   </table>
                              </div> : <p className=''>No pending orders</p>
                         }
                    </div>
                    <div className='mt-8 mb-3'>
                         <p className='mb-3 text-lg font-semibold '>Your previous orders:</p>
                         {
                              completedOrders.length > 0 ? <div className="overflow-x-auto max-w-7xl ">
                                   <table className="table table-zebra w-full">
                                        {/* head */}
                                        <thead>
                                             <tr>
                                                  <th></th>
                                                  <th>Date</th>
                                                  <th>Amount</th>
                                                  <th>Delivery status</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  completedOrders?.map((product, i) => <tr key={i}>
                                                       <th>{i + 1}</th>
                                                       <td>{product?.date}</td>
                                                       <td>{product?.total}</td>
                                                       <td>{product?.order}</td>
                                                  </tr>)
                                             }
                                        </tbody>
                                   </table>
                              </div> : <p className=''>No previous orders</p>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Profile;