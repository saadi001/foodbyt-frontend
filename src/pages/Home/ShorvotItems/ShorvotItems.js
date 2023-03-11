import React from 'react';
import shorvot from '../../../Asset/Image/juice.jpeg'
import Product from '../../../Components/Product/Product';

const ShorvotItems = () => {
     const value = {
          image: shorvot,
          name: 'peyaju'
     }

     const checking = [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
     ]
     return (
          <div className='pt-12'>
               <h5 className='mb-12 font-semibold text-xl'>Shorvot Item</h5>
               <div className='flex justify-end mb-2 text-yellow-400'><p>see more</p></div>
               <div className='grid grid-cols-4 gap-4'>
                   {
                    checking?.map(c =>  <Product value={value}></Product>)
                   }


               </div>
               <div className='flex justify-end my-2 text-yellow-400'><p>see more</p></div>
          </div>
     );
};

export default ShorvotItems;