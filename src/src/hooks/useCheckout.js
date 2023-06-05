import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import { useSumTotal } from "./useSumtotal"
import swal from 'sweetalert'
import { priceContext } from "../contexts/priceContext"

export const useCheckout = () => {
    const [cart, setCart] = useContext(cartContext)
    const [price, setPrice] = useContext(priceContext)
    const checkout = () => {
        swal('', 'Order Placed Successfully', 'success')
        localStorage.removeItem("cart")
        localStorage.removeItem("total-items")
        setCart([])
        setPrice(0)
    }
    return { checkout }
}