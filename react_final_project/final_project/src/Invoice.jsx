 import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Invoice = () => {
  const [lastOrder, setLastOrder] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);

  const API_URL = 'http://localhost:3000/orders';

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.length > 0) {
        // Sirf array ka sabse aakhri element uthaya
        const latest = response.data[response.data.length - 1];
        setLastOrder(latest);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancel = async (id) => {
    if (window.confirm("Kyan aap ye order cancel karna chahte hain?")) {
      await axios.delete(`${API_URL}/${id}`);
      setLastOrder(null);
      alert("Order Deleted!");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${editingOrder.id}`, editingOrder);
      alert("Order Updated!");
      setLastOrder(editingOrder); // UI par turant badlav dikhega
      setEditingOrder(null);
    } catch (error) {
      alert("Update failed!");
    }
  };

  if (!lastOrder) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>No Recent Order Found.</h2>;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#333', letterSpacing: '2px', marginBottom: '30px' }}>RECENT INVOICE</h2>

      {/* --- SINGLE LARGE CARD --- */}
      <div style={singleCardStyle}>
        <div style={{ flex: '1' }}>
          <img 
            src={`/${lastOrder.productImage}`} 
            alt="product" 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
          />
        </div>

        <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: '#b4941f', fontWeight: 'bold', margin: '0' }}>LATEST TRANSACTION</p>
          <h1 style={{ fontSize: '36px', margin: '10px 0' }}>{lastOrder.productName}</h1>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>₹ {lastOrder.productPrice}</p>
          
          <div style={detailBox}>
            <p><strong>Order ID:</strong> #{lastOrder.id}</p>
            <p><strong>Customer:</strong> {lastOrder.customerName}</p>
            <p><strong>Email:</strong> {lastOrder.customerEmail}</p>
            <p><strong>Date:</strong> {lastOrder.date}</p>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <button onClick={() => setEditingOrder(lastOrder)} style={editBtn}>EDIT ORDER</button>
            <button onClick={() => handleCancel(lastOrder.id)} style={cancelBtn}>CANCEL ORDER</button>
          </div>
        </div>
      </div>

      {/* --- EDIT FORM SECTION --- */}
      {editingOrder && (
        <div style={formContainer}>
          <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Modify Database Entry</h3>
          <form onSubmit={handleUpdate} style={formStyle}>
            <div>
              <label>Product Name</label>
              <input type="text" value={editingOrder.productName} onChange={(e) => setEditingOrder({...editingOrder, productName: e.target.value})} style={inputStyle} />
            </div>
            <div>
              <label>Price</label>
              <input type="text" value={editingOrder.productPrice} onChange={(e) => setEditingOrder({...editingOrder, productPrice: e.target.value})} style={inputStyle} />
            </div>
            <div>
              <label>Customer Name</label>
              <input type="text" value={editingOrder.customerName} onChange={(e) => setEditingOrder({...editingOrder, customerName: e.target.value})} style={inputStyle} />
            </div>
            <div>
              <label>Image Source</label>
              <input type="text" value={editingOrder.productImage} onChange={(e) => setEditingOrder({...editingOrder, productImage: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button type="submit" style={saveBtn}>SAVE CHANGES</button>
              <button type="button" onClick={() => setEditingOrder(null)} style={closeBtn}>CLOSE</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// --- Styles ---
const singleCardStyle = { 
  display: 'flex', 
  maxWidth: '1000px', 
  margin: '0 auto', 
  background: '#fff', 
  borderRadius: '16px', 
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
  overflow: 'hidden' 
};

const detailBox = { 
  background: '#f9f9f9', 
  padding: '20px', 
  borderRadius: '8px', 
  marginTop: '20px', 
  lineHeight: '1.8',
  fontSize: '14px'
};

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' };

const formContainer = {
  maxWidth: '1000px', margin: '40px auto', padding: '30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
};

const formStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };

const editBtn = { flex: 1, background: '#000', color: '#fff', border: 'none', padding: '15px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px' };
const cancelBtn = { flex: 1, background: '#fff', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '15px', cursor: 'pointer', fontWeight: 'bold', borderRadius: '8px' };
const saveBtn = { flex: 1, background: '#28a745', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer' };
const closeBtn = { flex: 1, background: '#666', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer' };

export default Invoice;