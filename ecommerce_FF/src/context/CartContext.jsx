import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
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
      const cartItem = {
        item_id: item._id,
        quantity: item.quantity,
        unitPrice: item.price,
      };

      console.log('Adding item to cart:', cartItem); // Log del ítem que se está añadiendo

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, cartItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setCartItems(prevItems => {
        const existingItem = prevItems.find(cartItem => cartItem.item_id === item._id);
        if (existingItem) {
          return prevItems.map(cartItem => 
            cartItem.item_id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        } else {
          return [...prevItems, response.data];
        }
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      console.error('Error details:', error.response.data); // Log de detalles del error
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      // Llamar al endpoint para limpiar el carrito en el backend
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartItems([]); // Vaciar el carrito en el frontend
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};