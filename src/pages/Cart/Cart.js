import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Cart = () => {
     const {cart} = useContext(AuthContext)
     return (
          <div>
               <p className='font-bold'>{ cart.length > 0 ? `Total product: ${cart.length}` : "You have no order."}</p>
          </div>
     );
};

export default Cart;