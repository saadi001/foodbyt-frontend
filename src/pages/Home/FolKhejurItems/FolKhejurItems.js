import React from 'react';
import fol from '../../../Asset/Image/lebu.jpeg'
import Product from '../../../Components/Product/Product';

const FolKhejurItems = () => {
     const value = {
          image: fol,
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
               <h5 className='mb-12 font-semibold text-xl'>Fruits</h5>               
               <div className='grid grid-cols-4 gap-4'>
                   {
                    checking?.map(c =>  <Product value={value}></Product>)
                   }
               </div>
               <div className='flex justify-end my-2 text-yellow-400'><p>see more</p></div>
          </div>
     );
};

export default FolKhejurItems;