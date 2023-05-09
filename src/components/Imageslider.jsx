import { ArrowBackIos, ArrowForwardIos, ArrowLeft } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';

function Imageslider({ slides }) {
    const [currentIndex, setIndex] = useState(0);
    const slideStyles = {
        slider: {
            backgroundImage: `url(${slides[currentIndex].url})`,
            width: '100%',
            height: '90vh',
            // borderRadius: '10px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        },
        sliderCon: {
            height: '100%',
            position: 'relative',
            width: '100%'
        },
        arrowL: {
            fontWeight: 'bold',
            position: 'absolute',
            top: '50%',
            left: '5px',
            color: 'white',
            zIndex: '1',
            cusor: 'pointer',
            transform: 'translate(0, -50%)',
            cursor: 'pointer',
            background: " #cfa671",
            padding: "10px",

            display:'none'


        },
        arrowR: {
            fontWeight: 'bold',
            position: 'absolute',
            top: '50%',
            right: '5px',
            color: 'white',
            zIndex: '1',
            cusor: 'pointer',
            transform: 'translate(0, -50%)',
            cursor: 'pointer',
            background: " #cfa671",
            padding: "10px",
            display:'none'
        },
        dots: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 5px',
            position: 'absolute',
            bottom: '15px',
            width: '100%',
            zIndex: '1'
        },
        dotsCircle: {
            background: 'white',
            height: '3px',
            width: '3px',
            padding: '5px',
            borderRadius: '50%'

        },
        dotsCircleInactive: {
            background: '',
            height: '3px',
            width: '3px',
            padding: '2px',
            borderRadius: '50%'
        }
    }

    function prev() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setIndex(newIndex)

    }
    function next() {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setIndex(newIndex)
    }

    function dotSlide(index) {
        setIndex(index)
    }
    useEffect(() => {
        setTimeout(() => {
            next()
        }, 3000);
    })
    return (
        <div style={slideStyles.sliderCon}>
            <div style={slideStyles.arrowL} onClick={prev}> <div><ArrowBackIos /> </div></div>
            <div style={slideStyles.arrowR} onClick={next}> <ArrowForwardIos /> </div>
            <div style={slideStyles.slider} className='bg-image img-fluid'>

                <div className='cover-slides'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container contents">
                        <center>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className=""><strong>Welcome To <br /> Yamifood Restaurant</strong></h1>
                                    <p className="" style={{fontSize:'15px'}}>See how your users experience your website in realtime or view  <br />
                                        trends to see any changes in performance over time.</p>
                                        <br />
                                    <p className='mt-2'><a className=" text-white custom-button " href="#">Reservation</a></p>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <div style={slideStyles.dots}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => dotSlide(slideIndex)} style={{ cursor: 'pointer', margin: '4px' }} className={slideIndex === currentIndex ? 'bg-warning p-1  rounded-pill' : 'border border-2 p-1 rounded-pill'}>
                        <div style={slideIndex === currentIndex ? slideStyles.dotsCircle : slideStyles.dotsCircleInactive}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Imageslider;