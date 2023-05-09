import React from 'react';
import Logo from '../assets/logo.png'

function Nav(props) {
    return (
        <div className='mt-2'>
            <header className="top-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display:'flex', justifyContent:'space-around'}}>
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/cart">Cart</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                        <a className="dropdown-item" href="reservation.html">Reservation</a>
                                        <a className="dropdown-item" href="stuff.html">Stuff</a>
                                        <a className="dropdown-item" href="gallery.html">Gallery</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                        <a className="dropdown-item" href="blog.html">blog</a>
                                        <a className="dropdown-item" href="blog-details.html">blog Single</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;