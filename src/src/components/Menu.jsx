import React, { useEffect, useState } from 'react';
import { categories } from '../data';
import { categoryNames } from '../data';
import { Bounce, Fade, Flip } from 'react-reveal'
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { useFavourite } from '../hooks/useFavourite';

function Menu({ addToCart }) {
    const [state, setState] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [ease, setEase] = useState(false)
    const [active, setActive] = useState('DRINKS')
    const { favourite } = useFavourite()

    const handleClick = (category) => {
        setEase(false)
        setActive(category)
        setTimeout(() => {
            setEase(true)
        }, 100);
        if (category === 'ALL') {
            return setShowAll(true)
        }
        setShowAll(false)
        setState(categories.filter((item) => { return item.category.toLowerCase() === category.toLowerCase() }));
        // setState(meals)
        // console.log(category)
    }
    useEffect(()=>{
        handleClick('DRINKS')
    },[])
    return (
        <div>
            <div className="menu-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-title text-center">
                                <h2>Special Menu</h2>
                                <p>Lorem Ipsum is Lorem Ipsum are the our special menu items..</p>
                            </div>
                        </div>
                    </div>
                    <div className='categories text-center'>
                        {
                            categoryNames.map((category) => (
                                <div key={category} className={category === active ? 'category shadow active' : 'category shadow'} onClick={() => handleClick(category)}>
                                    {category}
                                </div>
                            ))
                        }
                    </div>
                    {
                        showAll ? <div className='categories-container'>{categories.map((items, index) => (
                            <Fade left key={index}>
                                <div style={{ position: 'relative', margin: '30px 0' }} className='px-4'>
                                    <img src={items.img} alt="" className='img-fluid' />
                                    <div className='item-name'>
                                        <div >
                                            {items.name}</div>
                                        <div className='fs-sm' >
                                            ₦{items.price?.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className='action'>
                                        <div className="action-container" onClick={() => addToCart(items)}>
                                            <div className='action-sub-container '>
                                                <AddShoppingCart />
                                            </div>
                                        </div>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <div className="action-container text-white shadow" onClick={()=>favourite(items)}>
                                            <div className='action-sub-container2 bg-danger'>
                                                <Favorite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}</div> :
                            <div className='categories-container px-3' >
                                {state.map((item, index) => (
                                    <div className={ease ? "ease p-2" : "noEase categories-container p-2"} key={index}>
                                        <img src={item.img} alt="" className='img-fluid' />
                                        <div className='item-name'>
                                            <div >
                                                {item.name}</div>
                                            <div >
                                                ₦{item.price?.toLocaleString()}
                                            </div>
                                        </div>
                                        <div className='action'>
                                            <div className="action-container shadow" onClick={() => addToCart(item)}>
                                                <div className='action-sub-container '>
                                                    <AddShoppingCart />
                                                </div>
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            <div className="action-container text-white shadow" onClick={()=>favourite(item)}>
                                                <div className='action-sub-container2 bg-danger'>
                                                    <Favorite />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }

                </div>
            </div>
        </div>
    );
}

export default Menu;