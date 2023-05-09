import { useContext, useState } from 'react';

import { cartContext } from "../contexts/cartContext"
import { priceContext } from '../contexts/priceContext';


export const useSumTotal = () => {

    const [price, setPrice] = useContext(priceContext)

    function sumTotal() {
        const cost = JSON.parse(localStorage.getItem('cart'))
        let sum = 0
        cost.map((items) => {
            sum += items.price * items.amount
        })
        // setSaved(JSON.parse(localStorage.getItem('cart')))
        setPrice(sum)
    }
    return { sumTotal, price }
}
