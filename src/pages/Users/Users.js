import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading2 from '../Loading/Loading2';
import { toast } from 'react-hot-toast';

const Users = () => {
     const { data: users = [], isLoading, refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = fetch('https://foodbyt-backend.vercel.app/users')
               const data = (await res).json()
               return data;
          }
     })

     const handleMakeAdmin = (id) => {
          fetch(`https://foodbyt-backend.vercel.app/user/admin/${id}`, {
               method: 'PUT',
               headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                         toast.success('Make admin successful.')
                         refetch()
                    }else{
                         toast.error(`${data?.message}`)
                    }

               })
     }

     const handleMakeUser = (id) =>{
          fetch(`https://foodbyt-backend.vercel.app/user/makeUser/${id}`,{
               method: 'PUT',
               headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.modifiedCount > 0){
                    toast.success('remove admin status successfully.')
                    refetch()
               }else{
                    toast.error(`${data?.message}`)
               }
          })
     }

     if (isLoading) {
          return <Loading2></Loading2>
     }
     return (
          <div className='mx-3 md:mx-5 lg:mx-8  2xl:max-w-7xl 2xl:mx-auto pt-5'>
               <p className='text-lg font-semibold text-slate-800 mb-3 capitalize'>All users</p>
               {
                    users?.length > 0 && <div className="overflow-x-auto max-w-7xl">
                         <table className="table table-zebra w-full">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        users?.map((user, i) => <tr key={i}>
                                             <td>{i + 1}</td>
                                             <td>{user?.name}</td>
                                             <td>{user?.email}</td>
                                             <td>{
                                                  user?.role === 'admin' ? <button onClick={()=> handleMakeUser(user._id)} className='text-white text-sm px-3 py-1 bg-neutral rounded'>Admin</button> : <button onClick={() => handleMakeAdmin(user._id)} className='text-sm px-3 py-1  bg-green-700 text-white rounded'>Make admin</button>
                                             }
                                             </td>
                                        </tr>)
                                   }
                              </tbody>
                         </table>
                    </div>
               }

          </div>
     );
};

export default Users;