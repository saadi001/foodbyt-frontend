import React from 'react';
import halim from '../../../Asset/Image/halim.jpeg'
import { Link } from 'react-router-dom';

const Shops = () => {

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
                         checking?.map(c => <Link to={'/shop'}>
                              <img className='object-cover w-full rounded-xl border' src={halim} alt="" />
                              <div className='text-xl font-bold mt-4 '>Dhaka Hotel</div>
                              <p className='text-sm'>Dattapara, Daffodil Smart city</p>
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
          </div>
     );
};

export default Shops;