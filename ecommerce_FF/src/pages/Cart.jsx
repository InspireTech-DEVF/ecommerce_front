import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const Cart = () => {
  const { cartItems, removeFromCart, finalizePurchase } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [hasOrders, setHasOrders] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.item_id.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems]);

  const handleRemoveItem = async (itemId) => {
    await removeFromCart(itemId);
  };

  const handleFinalizePurchase = async (firstItemId) => {
    try {
      await finalizePurchase(firstItemId);
    } catch (error) {
      console.error('Error finalizing purchase:', error);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart/order`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.length > 0) {
          setHasOrders(true);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleButtonClick = () => {
    navigate('/order');
  };

  return (
    <MDBContainer className="my-5">
      <h3 className="mb-4">Carrito de Compras</h3>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio U</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.item_id.image}
                  alt={item.item_id.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{item.item_id.name}</td>
              <td>${item.item_id.price}</td>
              <td>{item.quantity}</td>
              <td>${item.item_id.price * item.quantity}</td>
              <td>
                <MDBBtn
                  color="danger"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  <MDBIcon fas icon="trash-alt" />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className="d-flex justify-content-between mt-4">
        <h4>Total: ${total}</h4>
        {cartItems.length > 0 && (
         <MDBBtn color="warning" onClick={() => handleFinalizePurchase(cartItems[0]._id)}>
         Finalizar Compra
       </MDBBtn>
        )}
      </div>
      <div>
      {hasOrders && (
        <MDBBtn color="yellow" onClick={handleButtonClick}>
          Mis compras
        </MDBBtn>
      )}
    </div>
      <div className="mt-4">
        <Link to="/" className="btn btn-secondary">
          Volver
        </Link>
      </div>
    </MDBContainer>
  );
};

export default Cart;
