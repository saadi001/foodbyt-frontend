import React, { useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { getStoredCart, deleteShoppingCart } from '../../Components/addToDb';

const Cart = () => {
     const { cart, setCart, user } = useContext(AuthContext)
     console.log(cart)

     const handleDeleteOne = (id) =>{
          // remove from localstorage 
         const storedCart = getStoredCart();
         const quantity = storedCart[id]
         if(quantity > 1){
          const newQuantity = quantity - 1;
          storedCart[id] = newQuantity
         }
         else{
          delete storedCart[id]
         }
         localStorage.setItem('shopping-cart', JSON.stringify(storedCart))

     //     remove from cart 
     let newCart = [...cart]
     const exists = cart.find(product => product.id == id)
     if(exists.quantity > 1){
          const rest = cart.filter(product => product.id !== id)
          exists.quantity = exists.quantity - 1
          newCart = [...rest, exists]
     }
     else if(exists.quantity == 1){
          console.log('one')          
          const remaining = cart.filter(product => product.id !== id)
          newCart = [...remaining]
     }

     setCart(newCart)

     }

     const deleteAll = () =>{
          // delete from cart 
          deleteShoppingCart()

          // delete from cart 
          let newCart = []
          setCart(newCart)
     }

     return (
          <div>
               <p className='font-bold'>{cart?.length > 0 && user ? `Total product: ${cart?.length}` : "You have no order."}</p>

               <div className={`${cart?.length > 0 && user ? "inline-block" : "hidden"} w-full`}>
                    <p className='my-2 font-medium'>Your orders:</p>
                    <div className='max-h-96 overflow-y-auto'>
                         {
                              cart?.map(c => <div key={c.id} className='border rounded-md grid grid-cols-5 gap-2 justify-between mb-1'>
                                   <div className='h-24 col-span-2'><img className='w-full h-full object-cover rounded-tl-md rounded-bl-md' src={c.image} alt="" /></div>
                                   <div className='text-sm font-medium mr-2 col-span-3'>
                                        <p>{c.name}</p>
                                        <p>Quantity: {c.quantity}</p>
                                        {/* delete one button  */}
                                        <button onClick={()=>handleDeleteOne(c.id)} className='bg-red-500 p-[2px] rounded text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        </button>
                                   </div>
                              </div>)
                         }
                    </div>
                    {/* delete all button  */}
                    <button onClick={deleteAll} className='w-full text-lg bg-secondary text-white py-[6px] hover:bg-secondary/80 mt-3 rounded-bl rounded-br'>Clear All</button>
                    <Link to={'/checkout'}><button className='w-full text-xl bg-primary text-white mt-4 rounded py-2 hover:bg-primary/80'>Checkout</button></Link>
               </div>
          </div>
     );
};

export default Cart;