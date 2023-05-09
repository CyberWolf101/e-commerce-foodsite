import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material'
import Imageslider from '../components/Imageslider'
import About from '../components/About'
import Quotes from '../components/Quotes'
import Menu from '../components/Menu'
import { slides } from '../data'
import CommonMenu from '../components/commonMenu'
import Contact from '../components/Contact'
import { cartContext } from "../contexts/cartContext";
import { CartNumberContext } from '../contexts/cartNumberContext';
import { useAddToCart } from '../hooks/useAddToCart';
import { ChakraProvider } from '@chakra-ui/react';

function Home() {
    const [cart, setCart] = useContext(cartContext)
    const [cartTotalItems, setcartTotalItems] = useContext(CartNumberContext)
    const { addToCart } = useAddToCart()


    useEffect(() => {
        if (localStorage.getItem('total-items')) {
            setCart(JSON.parse(localStorage.getItem('cart')))
            setcartTotalItems(localStorage.getItem('total-items'))
        } else {
            setcartTotalItems(0)
        }

    }, [])
    return (
        <div>
            <div >
                <Imageslider slides={slides} />
                <About />
                <Quotes />
                <Link to='cart'>
                    <div className="cart rounded border p-3 bg-light shadow" >
                        <Badge badgeContent={cartTotalItems} color='secondary'>
                            <ShoppingCart fontSize="large" />
                        </Badge>
                    </div>
                </Link>
                <ChakraProvider>
                    <Menu addToCart={addToCart} />
                    <CommonMenu addToCart={addToCart} />
                </ChakraProvider>

                <Contact />
            </div>
        </div>
    );
}

export default Home;