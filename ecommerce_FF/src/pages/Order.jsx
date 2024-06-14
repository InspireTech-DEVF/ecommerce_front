import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart/order`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const filteredOrders = response.data.filter(order => order.isOrder === true);
        setOrders(filteredOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="text-center">Mis compras</h4>
      <div className="row">
        {orders.map(order => (
          <div key={order._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order ID: {order._id}</h5>
                <p className="card-text">Products: {order.productName}</p>
                <p className="card-text">Total: ${order.prodcuts}</p>
                <p className="card-text">Status: {order.status ? 'Completed' : 'Pending'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
