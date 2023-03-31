import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Profile = () => {
     const { user } = useContext(AuthContext)
     
     return (
          <div className='p-5'>
               <div className='flex gap-3'>
                    <div className='w-24'>
                         <img className='w-full h-full object-cover' src={user?.photoURL} alt="" />
                    </div>
                    <div className='font-semibold text-xl'>
                         <p>{user?.displayName}</p>
                         <p className='text-base'>{user?.email}</p>
                    </div>

               </div>
               <div className='mt-5'>
                    <p>Your pending orders:</p>
               </div>
               <div>
                    Your previous orders:
               </div>
          </div>
     );
};

export default Profile;