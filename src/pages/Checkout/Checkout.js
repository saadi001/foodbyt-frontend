import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { deleteShoppingCart } from '../../Components/addToDb';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../Loading/Loading';
import MessageModal from '../../Components/Modal/MessageModal';

const Checkout = () => {
     const { cart, setCart, user } = useContext(AuthContext)
     const [loading, setLoading] = useState(false)
     const [showModal, setShowModal] = useState(false)
     const [modalMessage, setModalMessage] = useState('')
     const { register, formState: { errors }, handleSubmit } = useForm();
     // getting data and time 
     const currentDateTime = new Date();
     const currentHour = currentDateTime.getHours()
     const currentMinute = currentDateTime.getMinutes()
     let date = currentDateTime.getDate() + '-' + (currentDateTime.getMonth() + 1) + '-' + currentDateTime.getFullYear();
     let time = currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds();

     let productPrice = 0;
     let serviceCharge = 0;
     // calculating total product price 
     for (const product of cart) {
          productPrice = productPrice + (product.price * product.quantity)
     }
     // calculating  service charge 
     if (productPrice <= 60) {
          serviceCharge = 5
     }
     else if (productPrice <= 100) {
          serviceCharge = 8
     }
     else if (productPrice <= 120) {
          serviceCharge = 10
     }
     else if (productPrice <= 150) {
          serviceCharge = 12
     }
     else if (productPrice <= 200) {
          serviceCharge = 15
     }
     else if (productPrice <= 400) {
          serviceCharge = 20
     }
     else if (productPrice <= 600) {
          serviceCharge = 30
     }
     else {
          serviceCharge = 40
     }

     // sending order to db 
     const dataOfOrder = {}

     for (let i = 0; i < cart.length; i++) {
          dataOfOrder[cart[i].id] = cart[i]
     }
     dataOfOrder.productPrice = productPrice
     dataOfOrder.serviceCharge = serviceCharge
     dataOfOrder.total = (productPrice + serviceCharge)
     dataOfOrder.date = date
     dataOfOrder.time = time
     dataOfOrder.name = user?.displayName
     dataOfOrder.email = user?.email
     dataOfOrder.order = "pending"

     console.log(dataOfOrder)

     const handleOrder = (data) => {
          // console.log(data)
          dataOfOrder.phone = data.phone
          dataOfOrder.chargeType = data.chargeType
          dataOfOrder.room = data.room
          // setting time so that use can not order after a time 
          console.log(currentHour)          
          console.log(currentMinute)
          if (currentHour >= 16 || (currentHour === 16 && currentMinute >= 50)) {
               // setModalMessage('You can not order after 4.45 pm.')
               // setShowModal(true)

               console.log(currentHour, currentMinute)
               toast.error('Sorry, You can not order after 4.50 PM. For help contact our facebook page.')
          }
           else {
               setLoading(true)
               fetch('https://foodbyt-backend.vercel.app/orders', {
                    method: "POST",
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(dataOfOrder)
               })
                    .then(res => res.json())
                    .then(result => {
                         // delete from cart 
                         deleteShoppingCart()
                         // delete from cart 
                         let newCart = []
                         setCart(newCart)
                         toast.success("order taken successfully.")
                         setLoading(false)
                         setModalMessage('Order stored successfully.')
                         setShowModal(true)
                    })
          }
     }

     return (
          <div className='bg-slate-400/10 min-h-screen pt-24 pb-5'>
               <div className='mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto pt-5'>
                    <p className=' text-lg text-center md:text-2xl font-bold text-primary mb-5 md:mb-14'>Check carefully the product price, service charge and total price before ordering.</p>
                    {
                         cart.length > 0 ? <div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-3'>
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
                                                       cart?.map((c, i) => <tr key={i}>
                                                            <th>{i + 1}</th>
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
                                   <form onSubmit={handleSubmit(handleOrder)}>
                                        <div className='mt-6'>
                                             <label className='text-sm'>Phone number*</label>
                                             <input {...register('phone')} type="number" className='border border-primary/50 py-[6px] focus:outline-none focus:border-primary rounded px-2 block mt-1 w-full' required />
                                        </div>
                                        <div className='mt-1'>
                                             <label className='text-sm'>Room number*</label>
                                             <input {...register('room')} type="number" className='border border-primary/50 py-[6px] focus:outline-none focus:border-primary rounded px-2 block mt-1 w-full' required />
                                        </div>
                                        <div className=''>
                                             <select {...register('chargeType')} className=" w-full border-b border-b-primary focus:border-b-primary py-3">
                                                  <option value={"cash on delivery"} selected>Cash on delivery</option>
                                             </select>
                                        </div>
                                        <button type='submit' htmlFor="message-modal" className='uppercase w-full bg-primary text-white text-lg py-[6px] mt-3'>{loading ? <Loading /> : "order"}</button>
                                        {/* <label onClick={} htmlFor="message-modal" className="btn">open modal</label> */}
                                        {
                                             showModal &&
                                             <MessageModal message={MessageModal}></MessageModal>
                                        }
                                   </form>
                              </div>
                         </div> : <div className='mt-4 font-semibold text-center'>Your cart is empty now.</div>
                    }
               </div>
          </div>
     );
};

export default Checkout;