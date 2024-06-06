import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';

const CartWidget = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

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
  }, [setCartItems]);

  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="currentColor"
        className="bi bi-cart3"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>
      {getTotalItems() > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px'
          }}
        >
          {getTotalItems()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;