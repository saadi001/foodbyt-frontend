import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import food from '../../../Asset/Image/Food1.png'
import addToCart from '../../../Asset/icon/icons8-add-to-cart-32.png'
import Product from '../../../Components/Product/Product'

const VajaporaItem = () => {
     const [itemsNumber, setItemsNumber] = useState(0)

     const reduceItems = () => {
          if (itemsNumber > 0) {
               setItemsNumber(itemsNumber - 1)
          }
          else if (itemsNumber === 0) {
               setItemsNumber(0)
          }
     }
     const value = {
          image: food,
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
               <h5 className='mb-12 font-semibold text-xl'>Vajapora Item</h5>
               
               <div className='grid grid-cols-4 gap-4'>
                   {
                    checking?.map(c =>  <Product value={value}></Product>)
                   }


               </div>
               <div className='flex justify-end my-2 text-yellow-400'><p>see more</p></div>
          </div>
     );
};

export default VajaporaItem;