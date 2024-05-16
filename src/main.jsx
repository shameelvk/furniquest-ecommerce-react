import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from './contexts/ShopContext.jsx';
import { CartCountProvider } from './contexts/CartCountContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartCountProvider>
    <ShopContextProvider>
    <BrowserRouter>

      <App />
    </BrowserRouter>
    </ShopContextProvider>
    </CartCountProvider>
  </React.StrictMode>,
)
