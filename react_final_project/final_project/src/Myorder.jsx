import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Myorder = () => {
  const [orders, setOrders] = useState([]);

  // 1. Database se Orders fetch karna
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        // Reverse isliye taaki naya order sabse upar dikhe
        setOrders(response.data.reverse());
      } catch (error) {
        console.error("Orders load nahi ho paye:", error);
      }
    };
    fetchMyOrders();
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '30px' }}>
        🛍️ My Orders ({orders.length})
      </h2>

      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>Abhi tak koi order nahi kiya!</h3>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map((order) => (
            <div key={order.id} style={orderCard}>
              {/* Product Image */}
              <img 
                src={`/${order.productImage}`} 
                alt="product" 
                style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '8px' }}
                onError={(e) => e.target.src = "https://via.placeholder.com/120x140?text=No+Image"}
              />

              {/* Order Info */}
              <div style={{ flex: '1' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{order.productName}</h3>
                <p style={{ margin: '5px 0', color: '#555' }}><strong>Price:</strong> ₹ {order.productPrice}</p>
                <p style={{ margin: '5px 0', fontSize: '13px', color: '#888' }}>Ordered on: {order.date}</p>
                <div style={statusTag}>Order Placed Successfully</div>
              </div>

              {/* Customer Info Box */}
              <div style={{ borderLeft: '1px solid #eee', paddingLeft: '20px', minWidth: '150px' }}>
                <p style={{ margin: '0', fontSize: '12px', fontWeight: 'bold' }}>DELIVER TO:</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>{order.customerName}</p>
                <p style={{ margin: '0', fontSize: '11px', color: '#777' }}>Order ID: #{order.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Styles ---
const orderCard = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #f0f0f0'
};

const statusTag = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '4px 12px',
  background: '#e6f4ea',
  color: '#1e7e34',
  fontSize: '12px',
  borderRadius: '20px',
  fontWeight: 'bold'
};

export default Myorder;