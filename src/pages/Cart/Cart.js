import React, { useContext, useEffect } from 'react';
import { getStoredCart } from '../../Components/addToDb';
import { AuthContext } from '../../Contexts/AuthProvider';

const Cart = () => {
     const {cart} = useContext(AuthContext)
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
               <p className='font-bold'>{ cart.length > 0 ? `Total product: ${cart.length}` : "You have no order."}</p>
          </div>
     );
};

export default Cart;