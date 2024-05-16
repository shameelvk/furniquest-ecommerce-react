import React, { createContext,useState,useEffect } from "react";
export const ShopContext=createContext(null);
import { useCartCount } from "./CartCountContext";


const ShopContextProvider=(props)=>{
    
    const [productData, setProductData] = useState([]);
    const {updateCartCount}=useCartCount();
    const [category, setCategory] = useState([]);

   
    
    useEffect(() => {
        const fetchData = () => {
          fetch('https://api.chec.io/v1/products?limit=26', {
            method: 'GET',
            headers: {
              'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6' 
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            return response.json();
          })
          .then(data => {
            setProductData(data.data);
            
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
        };
        fetchData();
        const fetchCat = () => {
          fetch('https://api.chec.io/v1/categories', {
            method: 'GET',
            headers: {
              'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6' 
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch category');
            }
            return response.json();
          })
          .then(data => {
            setCategory(data.data); 
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
        };
    
        fetchCat();


      }, []);
     


    const addToCart = (itemId) => {
        fetch('https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/', {
            method: 'POST',
            headers: {
                'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: itemId,
                quantity: 1
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
           
            return response.json();
        })
        .then(data => {
            updateCartCount(data.total_unique_items)
            
           
        })
        .catch(error => {
            console.error('Error adding item to cart:', error);
        });
    };







   const contextValue={productData,addToCart,category};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;