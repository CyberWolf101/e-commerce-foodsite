import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from "react";
import slide1 from "./assets/slider-01.jpg"
import slide2 from "./assets/slider-02.jpg"
import slide3 from "./assets/slider-03.jpg"
import { useState } from "react";
import Loading from "./pages/Loading";


const App = () => {

  const [picLoaded, setPicLoaded] = useState(false)
  const [picLoaded2, setPicLoaded2] = useState(false)
  const [picLoaded3, setPicLoaded3] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const img = new Image();
      const img2 = new Image();
      const img3 = new Image();
      img.onload = () => setPicLoaded(true)
      img2.onload = () => setPicLoaded2(true)
      img3.onload = () => setPicLoaded3(true)
      img.src = slide1
      img2.src = slide2
      img3.src = slide3
    }, 2000);
  }, [])
  if (!picLoaded || !picLoaded2 || !picLoaded3) return <Loading />

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;