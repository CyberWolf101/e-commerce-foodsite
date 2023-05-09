import { Add, AddShoppingCart, ArrowBackIos, Delete, Remove, ShoppingCartCheckout } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useSumTotal } from '../hooks/useSumtotal';
import { useIncreaseAmount } from '../hooks/useAmount';
import { useDecreaseAmount } from '../hooks/useAmount';
import { cartContext } from '../contexts/cartContext';
import { useCheckout } from '../hooks/useCheckout';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Cart(props) {
    const [savedItems, setSaved] = useState(JSON.parse(localStorage.getItem('cart')))
    const { sumTotal, price } = useSumTotal()
    const { increaseAmount } = useIncreaseAmount()
    const { decreaseAmount } = useDecreaseAmount()
    const { checkout } = useCheckout()
    const [cart, setCart] = useContext(cartContext)
    const [cartEmpty, setCartEmpty] = useState(false)
    const nav = useNavigate()

    const remv = (item) => {
        swal({
            text: "Are you sure you want to delete this item?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const filteredItem = cart.filter((p) => {
                        return p.name !== item.name;
                    })
                    setCart([...filteredItem])

                    // reset total items
                    const cartLength = cart.length - 1
                    localStorage.setItem('total-items', JSON.stringify(cartLength))

                    localStorage.setItem("cart", JSON.stringify(filteredItem))
                    setCart(JSON.parse(localStorage.getItem('cart')))
                    setSaved(JSON.parse(localStorage.getItem('cart')))
                    sumTotal()
                    swal('', 'Item deleted', 'success')

                }
            });

    }



    useEffect(() => {
        if (localStorage.getItem('total-items')) {
            setCart(JSON.parse(localStorage.getItem('cart')))
            setSaved(JSON.parse(localStorage.getItem('cart')))
            sumTotal()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            setCartEmpty(true)
        }
    }, [price])
    return (
        <div className='mt-5'>
            <br />
            <br />
            <br />
            <div className='fixed-top shadow total'>
                <div className='mt-2'>
                    {!cartEmpty && (
                        <center>
                            <div style={{position:'relative'}}>
                                <div onClick={()=> nav('/')} className='btn text-secondary btn-sm mt-2' style={{position:'absolute', left:'3px', top:'8px', }}><ArrowBackIos/></div>
                                <div className='mt-2'>
                                    TOTAL: <b>₦{price?.toLocaleString()}</b>
                                </div>
                                <button className='btn btn-primary mt-2' onClick={checkout}>CHECKOUT</button>
                            </div>
                        </center>
                    )}
                    {cartEmpty && (
                        <center>
                            <div>
                                TOTAL: <b>₦0.00</b>
                            </div>
                            <button className='btn btn-primary mt-2' onClick={() => nav('/')}>Continue Shopping</button>
                        </center>
                    )}
                </div>
            </div>
            {
                localStorage.getItem('total-items') ? (
                    <div className='cart-display'>
                        {savedItems.map((items, index) => (
                            <div key={index} className='shadow px-3 py-4 rounded'>
                                <div className=''>
                                    <div className='text-white my-2 del'>
                                        <span className='bg-danger p-1' onClick={() => remv(items)}>
                                            <Delete />
                                        </span></div>
                                    <div className='cart-img '>
                                        <img src={items.img} alt="" className='img-fluid' />
                                    </div>
                                    <div>
                                        <div> {items.name}</div>
                                        <div className='fw-bold'> ₦{items.price?.toLocaleString()}</div>
                                    </div>
                                    <div className='mt-2'>
                                        <button onClick={() => decreaseAmount(items)} className='btn btn-danger btn-sm'><Remove fontSize='' /></button>
                                        <button className='btn btn-sm btn-outline-secondary text-black'>{items.amount}</button>
                                        <button onClick={() => increaseAmount(items)} className='btn btn-primary btn-sm'><Add fontSize='' /> </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) :
                    <div className='mt-3'>
                        <center>
                            <img src="https://th.bing.com/th/id/OIP.W9izZcYxZf_GXgASWt06OgEjDW?w=215&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Your cart is empty" className='' />
                            <div>
                                YOUR CART IS EMPTY!
                            </div>
                        </center>
                    </div>
            }
            <br />
            <br />
            <br />

        </div>
    );
}

export default Cart;