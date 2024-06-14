import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = sessionStorage.getItem('token');
        console.log('Token in fetchCartItems:', token);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token in addToCart:', token);
      const cartItem = {
        item_id: item._id,
        quantity: item.quantity,
        unitPrice: item.price,
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Response from addToCart:', response.data);

      setCartItems(prevItems => {
        const existingItem = prevItems.find(cartItem => cartItem.item_id._id === item._id);
        if (existingItem) {
          return prevItems.map(cartItem => 
            cartItem.item_id._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        } else {
          return [...prevItems, response.data];
        }
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token in removeFromCart:', token);
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token in clearCart:', token);
      await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const finalizePurchase = async (firstItemId) => {
    try {
      const token = sessionStorage.getItem('token');
      console.log('Token in finalizePurchase:', token);
      await axios.get(`${import.meta.env.VITE_API_URL}/cart/order/${firstItemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      await clearCart();
    } catch (error) {
      console.error('Error finalizing purchase:', error);
    }
  };
  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart,finalizePurchase }}>
      {children}
    </CartContext.Provider>
  );
};
