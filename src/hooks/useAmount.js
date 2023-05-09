import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import { useSumTotal } from "./useSumtotal"

export const useIncreaseAmount = () => {
    const [cart, setCart] = useContext(cartContext)
    const { sumTotal } = useSumTotal()

    const increaseAmount = (item) => {
        cart.forEach((data) => {
            if (data.name === item.name) {
                //setting the totalamount of items, so that sumTotal function can calculate
                setCart(data.amount = ++data.amount)
                localStorage.setItem('cart', JSON.stringify(cart))
                setCart(JSON.parse(localStorage.getItem(cart)))
                console.log(cart)
                sumTotal()  //this function refreshes the whole page because it interacts directly with the dependency of the use effect
            }
        })
    }
    return { increaseAmount }
}

export const useDecreaseAmount = () => {
    const [cart, setCart] = useContext(cartContext)
    const { sumTotal } = useSumTotal()

    const decreaseAmount = (item) => {
        if (item.amount <= 1) {
            return;
        }
        cart.forEach((data) => {
            if (data.name === item.name) {
                setCart(data.amount = --data.amount)
                localStorage.setItem('cart', JSON.stringify(cart))
                setCart(JSON.parse(localStorage.getItem(cart)))
                sumTotal()  //this function refreshes the whole page because it interacts directly with the dependency of the use effect
            }
        })
    }
    return {decreaseAmount}
}