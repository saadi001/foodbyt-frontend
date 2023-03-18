import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../../Components/Product/Product'

const ItemsById = () => {
     const data = useLoaderData()
     const {itemName,details,items} = data;

     return (
          <div className='mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto'>
               <div>
                    <p className='my-5 font-bold text-4xl text-center text-yellow-500'>{itemName}</p>
                    <p className='text-center font-semibold text-lg'>{details}</p>
                    <div className='grid grid-cols-4 gap-6 mt-20'>
                         {
                              items?.map(item => <Product value={item}></Product>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default ItemsById;