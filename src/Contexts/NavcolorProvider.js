import React, { createContext, useState } from 'react';

export const NavColorContext = createContext();

const NavcolorProvider = ({children}) => {
     const [color, setColor] = useState(false)
     const number = '3'

     const navcolorInfo = {number, color, setColor}

     return (
          <div>
               <NavColorContext.Provider value={navcolorInfo}>
                    {children}                    
               </NavColorContext.Provider>
               
          </div>
     );
};

export default NavcolorProvider;