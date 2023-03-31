import React from 'react';

const Loading2 = () => {
     return (
          <div>
               <div className="flex items-center justify-center space-x-2 py-2">
                    <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
               </div>
          </div>
     );
};

export default Loading2;