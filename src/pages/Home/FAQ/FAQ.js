import React from 'react';

const FAQ = () => {
     return (
          <div className='py-14'>
               <h3 className='text-2xl md:text-4xl font-bold text-center mb-14'>Frequently Asked <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
                    <span class="relative text-white">Questions</span>
               </span></h3>

               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-3">
                    <div className="collapse-title text-lg font-medium ">
                         About our service charge.
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4 ml-3'>
                              <span className='border border-yellow-500'></span>
                              <p>Our service charge depend on the amount you order food.
                                   <ul className='list-disc ml-8 text-sm'>
                                        <li>For less than or equal 60 tk, service charge will be 5 tk</li>
                                        <li>For more than previous and less than or equal 100 tk, service charge will be 8 tk</li>
                                        <li>For more than previous and less than or equal 120 tk, service charge will be 10 tk</li>
                                        <li>For more than previous and less than or equal 150 tk, service charge will be 12 tk</li>
                                        <li>For more than previous and less than or equal 200 tk, service charge will be 15 tk</li>
                                        <li>For more than previous and less than or equal 400 tk, service charge will be 20 tk</li>
                                        <li>For more than previous and less than or equal 600 tk, service charge will be 30 tk</li>
                                        <li>For more than previous, service charge will be 50</li>
                                   </ul>
                              </p>
                         </div>
                    </div>
               </div>

               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-3">
                    <div className="collapse-title text-lg font-medium ">
                         How to order food?
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4 ml-3'>
                              <span className='border border-yellow-500'></span>
                              <p>After entering website you will see different items section in website. For entering the section, you must be log in. After entering the section you will different type of food and there is add to cart icon. From Cart icon from you will know how much food you ordered.</p>
                         </div>
                    </div>
               </div>

               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-3">
                    <div className="collapse-title text-lg font-medium ">
                         How cart works?
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4 ml-3'>
                              <span className='border border-yellow-500'></span>
                              <p>For every clicking in the add to cart, cart items number will be increase but for same item only quantity will be increase. On clicking in delete button, if quantity is greater than one, then it will decrease quantity but if quantity is one then it will delete the item. </p>
                         </div>
                    </div>
               </div>

               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-3">
                    <div className="collapse-title text-lg font-medium ">
                         How to do checkout?
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4 ml-3'>
                              <span className='border border-yellow-500'></span>
                              <p>In cart section, there will be checkout option. You can also go to checkout route from "confirm order" option. In checkout section, You have to give your phone number and room number to order your food. </p>
                         </div>
                    </div>
               </div>





          </div>
     );
};

export default FAQ;