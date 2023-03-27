import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import img from "../../Asset/Image/vajapora 2.jpeg"
import { Link } from 'react-router-dom';

const Cart = () => {
     const { cart } = useContext(AuthContext)
     console.log(cart)

     // useEffect(()=>{
     //      const storedCart = getStoredCart()
     //      console.log(storedCart)
     //      for(const id in storedCart){
     //           const addedProduct = cart.find(product => product.id === id)
     //           if(addedProduct){
     //                console.log(addedProduct)
     //           }
     //      }
     // },[cart])

     return (
          <div>
               <p className='font-bold'>{cart?.length > 0 ? `Total product: ${cart?.length}` : "You have no order."}</p>

               <div className={`${cart?.length > 0 ? "inline-block" : "hidden"} w-full`}>
                    <p className='my-2 font-medium'>Your orders:</p>
                    <div className='max-h-96 overflow-y-auto'>
                         {
                              cart?.map(c => <div key={c.id} className='border rounded-md flex gap-2 justify-between mb-1'>
                                   <div className='w-28 h-24'><img className='w-full h-full object-cover rounded-tl-md rounded-bl-md' src={c.image} alt="" /></div>
                                   <div className='text-sm font-medium mr-4'>
                                        <p>{c.name}</p>
                                        <p>Quantity: {c.quantity}</p>
                                   </div>
                              </div>)
                         }
                    </div>
                    <Link to={'/checkout'}><button className='w-full text-xl bg-primary text-white mt-4 rounded py-2 hover:bg-primary/80'>Checkout</button></Link>
               </div>
          </div>
     );
};

export default Cart;