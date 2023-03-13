import React from 'react';
import image from '../../../Asset/Image/Food1.png'

const Items = () => {
     const checking = [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
     ]

     return (
          <div className='py-14'>
               <h3 className='text-4xl font-bold text-center mb-12'>Our Services</h3>
               <div className='border p-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-3'>

                         {
                              checking?.map( c => <div className='p-5 hover:scale-105 duration-200 ease-out cursor-pointer'>
                              <img className='w-8/12 mx-auto' src={image} alt="" />
                              <div className='mt-3'>
                                   <p className='text-center text-xl font-semibold mb-2 '>Vajapora Items</p>
                                   <p className='text-center'>From this section you will find peyaji, alur chop, beguni, dim chop, chola</p>
                              </div>
                         </div> )
                         }          
                                             
                    </div>
               </div>
          </div>
     );
};

export default Items;