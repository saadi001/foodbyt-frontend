import React from 'react';
import halim from '../../../Asset/Image/halim.jpeg'

const Shops = () => {

     const value = {
          image: halim,
          name: 'peyaju'
     }

     const checking = [
          { id: 1 },
          { id: 2 },
          { id: 3 },
     ]
     return (
          <div className='py-14'>
               <h5 className='mb-14 font-bold text-center text-4xl'>Order from your favourite <br /> Hotel/Restaurent</h5>
               <div className='grid grid-cols-3 gap-4'>
                    {
                         checking?.map(c => <div>
                              <img className='object-cover w-full rounded-xl border' src={halim} alt="" />
                              <div className='text-xl font-bold mt-4 '>Dhaka Hotel</div>
                              <p className='text-sm'>Dattapara, Daffodil Smart city</p>
                              <div className='flex items-center justify-start gap-3 mt-4'>
                                   <p className='text-lg font-semibold'>4.9</p>
                                   <div className="rating rating-sm">
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Shops;