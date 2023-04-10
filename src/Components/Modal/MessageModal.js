import React from 'react';

const MessageModal = () => {
     return (
          <div>
               {/* The button to open modal */}
               {/* <label htmlFor="message-modal" className="btn">open modal</label> */}

               {/* Put this part before </body> tag */}
               <input type="checkbox" id="message-modal" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                         <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                         <div className="modal-action">
                              <label htmlFor="message-modal" className="btn">Yay!</label>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MessageModal;