import React from 'react';
import addToCart from '../../Asset/icon/icons8-add-to-cart-32.png'


const Product = ({value}) => {
     return (
          <div className='group/product border border-slate-900/20 hover:border-yellow-400  rounded-2xl shadow-lg hover:shadow-lg hover:bg-yellow-400 duration-100 ease-linear'>
                         <img className='mt-[-80px] w-full group-hover/product:-translate-y-2 duration-100 ease-linear' src={value.image} alt="" />
                         <div className='mt-5 px-5 pb-3'>
                              <p className='text-lg font-semibold'>{value.name}</p>
                              <div className="divider text-slate-500"></div>
                              <div className='flex justify-between items-center mb-2 px-2'>
                                   <div className='text-sm font-semibold'>5 BDT</div>
                                   {/* <div className='flex'>
                                        <button onClick={reduceItems} className='w-5 h-5 border border-slate-900/40 rounded flex justify-center items-center'><MinusIcon></MinusIcon></button>
                                        <input className='border border-slate-900/40 bg-transparent w-10 h-5 text-center' value={itemsNumber} type="number" />
                                        <button onClick={()=>setItemsNumber(itemsNumber+1)} className='w-5 h-5 border border-slate-900/40 rounded flex justify-center items-center'><PlusIcon></PlusIcon></button>
                                   </div> */}
                                   <div className='cursor-pointer'>
                                        <img className='w-5 h-5 object-cover' src={addToCart} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div> 
     );
};

export default Product;