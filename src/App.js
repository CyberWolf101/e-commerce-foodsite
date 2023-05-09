import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
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