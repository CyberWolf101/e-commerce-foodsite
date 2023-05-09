import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styleSheets/index.css'
import './styleSheets/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import CartContextProvider from './contexts/cartContext';
import CartNumberContextProvider from './contexts/cartNumberContext';
import PriceContextProvider from './contexts/priceContext';

ReactDOM.render(

  <CartNumberContextProvider>
    <PriceContextProvider>
        <CartContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartContextProvider>
    </PriceContextProvider>
  </CartNumberContextProvider >,
  document.getElementById('root')
);