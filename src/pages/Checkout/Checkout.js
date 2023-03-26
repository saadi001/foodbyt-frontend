import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../Loading/Loading';

const Checkout = () => {
     const {cart} = useContext(AuthContext)
     const [loading, setLoading] = useState(false)
     // getting data and time 
     const currentDateTime = new Date();
     let date = currentDateTime.getDate()+'-'+(currentDateTime.getMonth()+1)+'-'+currentDateTime.getFullYear();
     let time = currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds();
     let productPrice = 0;
     let serviceCharge = 0;
     // calculating total product price 
     for(const product of cart){
          productPrice = productPrice + (product.price * product.quantity)
     }
     // calculating  service charge 
     if(productPrice <= 50){
          serviceCharge = 5
     }
     else if(productPrice <= 100){
          serviceCharge = 8
     }
     else if(productPrice <= 120){
          serviceCharge = 10
     }
     else if(productPrice <= 150){
          serviceCharge = 12
     }
     else if(productPrice <= 200){
          serviceCharge = 15
     }
     else if(productPrice <= 400){
          serviceCharge = 20
     }
     else if(productPrice <= 600){
          serviceCharge = 30
     }
     else{
          serviceCharge = 50
     }
     
     // sending order to db 
     const dataOfOrder = {}

     for(let i = 0; i < cart.length; i++){
          dataOfOrder[cart[i].id] = cart[i]
     }
     dataOfOrder.productPrice = productPrice
     dataOfOrder.serviceCharge = serviceCharge
     dataOfOrder.total = (productPrice + serviceCharge)
     dataOfOrder.date = date
     dataOfOrder.time = time
     
     console.log(dataOfOrder)
     
     const handleOrder = () =>{
          setLoading(true)
          fetch('https://foodbyt-backend.vercel.app/orders',{
               method: "POST",
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(dataOfOrder)
          })
          .then(res => res.json())
          .then(result => {
               toast.success("order taken successfully.")
               setLoading(false)
          })
     }

     return (
          <div className='bg-slate-400/10 min-h-screen'>
               <div className='mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto pt-5'>
                    <p className=' text-lg md:text-2xl font-medium text-primary mb-5 md:mb-14'>Check carefully the product price, service charge and total price before ordering.</p>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-3'>
                         <div className='lg:col-span-8 bg-white rounded-md shadow'>
                              <div className="overflow-x-auto">
                                   <table className="table w-full">
                                        {/* head */}
                                        <thead>
                                             <tr>
                                                  <th></th>
                                                  <th>Name</th>
                                                  <th>Quantity</th>
                                                  <th>Price</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  cart?.map((c,i) => <tr key={i}>
                                                       <th>{i+1}</th>
                                                       <td>{c.name}</td>
                                                       <td>{c.quantity}</td>
                                                       <td>{c.quantity * c.price}</td>
                                                  </tr>)
                                             }                                            
                                            
                                             <tr className='font-bold'>
                                                  <th></th>
                                                  <td></td>
                                                  <td>Total product price</td>
                                                  <td>{productPrice}</td>
                                             </tr>

                                        </tbody>
                                   </table>
                              </div>
                         </div>
                         <div className='lg:col-span-4 p-4 rounded-md bg-white shadow'>
                              <p className='text-2xl mb-4'>Total</p>
                              <table className='w-full font-medium'>
                                   {/* 1st row  */}
                                   <tr>
                                        <td>Product price</td>
                                        <td>{productPrice}</td>
                                   </tr>
                                   {/* 2nd row */}
                                   <tr>
                                        <td>Service charge</td>
                                        <td>{serviceCharge}</td>
                                   </tr>
                                   {/* 3rd row */}
                                   <tr>
                                        <td>Total price</td>
                                        <td>{parseInt(productPrice) + parseInt(serviceCharge)}</td>
                                   </tr>
                              </table>
                              <div className='mt-5'>
                                   <select className=" w-full border-b border-b-primary py-3">
                                        <option selected>Cash on delivery</option>                                        
                                   </select>
                              </div>
                              <button onClick={handleOrder} className='uppercase w-full bg-primary text-white text-lg py-[6px] mt-3'>{loading ? <Loading/> : "order"}</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Checkout;