import React, { useState } from 'react';
import { createContext } from 'react';

export const CartNumberContext = createContext()


function CartNumberContextProvider({ children }) {
    const [cartTotalItems, setcartTotalItems] = useState('')


    return (
        <CartNumberContext.Provider value={[cartTotalItems, setcartTotalItems]} >
            {children}
        </CartNumberContext.Provider>
    );
}

export default CartNumberContextProvider;