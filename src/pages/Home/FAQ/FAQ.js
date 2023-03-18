import React from 'react';

const FAQ = () => {
     return (
          <div className='py-14'>
               <h3 className='text-4xl font-bold text-center mb-14'>Frequently Asked <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
    <span class="relative text-white">Questions</span>
  </span></h3>            

               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-5">
                    <div className="collapse-title text-lg font-medium ">
                         How to order food?
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4 ml-3'>
                              <span className='border border-yellow-500'></span>
                              <p>After entering website you will see different items section in website. From there you can order your food.</p>
                         </div>
                    </div>
               </div>
               
               <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box max-w-4xl mx-auto mb-5">
                    <div className="collapse-title text-lg font-medium ">
                         How to order food?
                    </div>
                    <div className="collapse-content">
                         <div className='flex gap-4'>
                              <span className='border border-yellow-500'></span>
                              <p>After entering website you will see different items section in website. From there you can order your food.</p>
                         </div>
                    </div>
               </div>
               
          </div>
     );
};

export default FAQ;