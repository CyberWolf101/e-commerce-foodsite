import React, { useState } from 'react';
import { createContext } from 'react';

export const cartContext = createContext()


function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])


    return (
        <cartContext.Provider value={[cart, setCart]} >
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;