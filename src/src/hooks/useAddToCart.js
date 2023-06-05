import { useToast } from "@chakra-ui/react";
import { duration } from "@mui/material";
import { useContext, useState } from "react";
import { cartContext } from "../contexts/cartContext";
import { CartNumberContext } from "../contexts/cartNumberContext";

export const useAddToCart = () => {
    const [cart, setCart] = useContext(cartContext)
    const [totalItems, setTotalItems] = useState("")
    const [cartTotalItems, setcartTotalItems] = useContext(CartNumberContext)
    const Toast = useToast()

    const addToCart = (product) => {
        let isPresent = false;
        cart.map((items) => {
            if (items.name === product.name) {
                isPresent = true;
            }
        })
        if (isPresent) {
            console.log(isPresent)
            // alert('already added')
            Toast({
                title: 'Item already added',
                position: 'top-left',
                duration: 1000,
                status: 'warning',
                variant: 'subtle',
                colorScheme: 'orange'

            })
            return;
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        cart.push(product)
        console.log("cart", cart)
        const cartLength = cart.length
        setTotalItems(cart.length)
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('total-items', JSON.stringify(cartLength))
        setcartTotalItems(JSON.parse(localStorage.getItem('total-items')))
        console.log("Total:", cartTotalItems)
        // alert(' added')

        Toast({
            title: 'Item added to cart',
            position: 'top-left',
            duration: 1000,
            status: 'success',
            variant: 'subtle',
            colorScheme: 'orange'
        })

    }

    return { addToCart, cartTotalItems }
}