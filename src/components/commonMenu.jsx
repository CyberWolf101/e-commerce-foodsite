import React from 'react';
import { Other } from '../data';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Fade } from 'react-reveal';
import { useFavourite } from '../hooks/useFavourite';

function CommonMenu({ addToCart }) {
    const { favourite } = useFavourite()

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-title text-center">
                        <h2>Common Menu</h2>
                        <p>Lorem Ipsum is Lorem Ipsum are the our special menu items..</p>
                    </div>
                </div>
            </div>
            <div className='common-container' >
                {Other.map((item, index) => (
                    <Fade left duration={1500} key={index}>
                        <div className={"ease"} >
                            <img src={item.img} alt="" className='img-fluid' />
                            <div className='item-name'>
                                <div style={{ fontSize: 'small', fontWeight: 'bold' }}>
                                    {item.name}
                                </div>
                                <div style={{ fontSize: 'small', fontWeight: 'bold' }}>
                                    ₦{item.price?.toLocaleString() }
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
                    </Fade>
                ))}
            </div>
        </div>
    );
}

export default CommonMenu;