 import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"


const ProductDetail = () => {
    toast()

  const navigate = useNavigate();

  // 1. LocalStorage se Product aur User dono ka data nikalna
  const savedProduct = localStorage.getItem('currentProduct');
  const product = savedProduct ? JSON.parse(savedProduct) : null;

  const savedUser = localStorage.getItem('userdata');
  const user = savedUser ? JSON.parse(savedUser) : null;

  // Agar product nahi milta toh wapas grid par bhej do
  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Product not found!</h2>
        <button onClick={() => navigate('/')}>Go Back to Shop</button>
      </div>
    );
  }

  // 2. BUY NOW Logic (Ordering)
  const handleBuyNow = async () => {
    // Pehle check karo user login hai ya nahi
    if (!user) {
        toast("please sign up to buy",{
        type:"error ",
        autoClose:1000
    })

      navigate('/Sign');
      return;
    }

    // Order Data taiyar karna
    const orderData = {
      customerName: user.name,
      customerEmail: user.email,
      productName: product.name,
      productPrice: product.price,
      productImage: product.img,  
      productId: product.id,
      date: new Date().toLocaleString()
    };

    try {
      // Axios POST to json-server
      const response = await axios.post('http://localhost:3000/orders', orderData);
      
    
         toast("bokking successful",{
        type:"success",
        autoClose:1000
    })

        navigate('/Invoice');
        
      
    } catch (error) {
      alert("Server error! Make sure json-server is running on port 3000");
    }
  };

  return (
    <div style={{ display: 'flex', padding: '40px', gap: '50px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* LEFT SIDE: Product Image (Coming from LocalStorage) */}
      <div style={{ flex: '1.2' }}>
         <img 
           src={`/${product.img}`} 
           alt={product.name} 
           style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
         />
      </div>

      {/* RIGHT SIDE: Details & User Info */}
      <div style={{ flex: '1' }}>
        <p style={{ color: '#888', fontSize: '13px', letterSpacing: '1px' }}>PREMIUM COLLECTION</p>
        <h1 style={{ fontSize: '32px', margin: '10px 0' }}>{product.name}</h1>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#b4941f' }}>₹ {product.price}</p>
        
        {/* User Card: Dikhane ke liye ki order kaun kar raha hai */}
        {user ? (
          <div style={{ background: '#f0f4f8', padding: '15px', borderRadius: '8px', margin: '20px 0', border: '1px dashed #abc' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>Logged in as: <strong>{user.name}</strong></p>
            <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Email: {user.email}</p>
          </div>
        ) : (
          <p style={{ color: 'red', fontSize: '12px' }}>⚠️ You are not logged in.</p>
        )}

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '14px' }}>SELECT SIZE</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {['S', 'M', 'L', 'XL'].map(s => (
              <button key={s} style={sizeBtnStyle}>{s}</button>
            ))}
          </div>
        </div>

        <button onClick={handleBuyNow} style={buyBtnStyle}>BUY NOW</button>
        
        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555' }}>
            Get this {product.name} delivered within 3-5 business days. 
            Free shipping on orders above ₹5000.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- STYLING ---
const sizeBtnStyle = { padding: '10px 18px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', borderRadius: '4px' };
const buyBtnStyle = { width: '100%', padding: '16px', background: 'black', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', borderRadius: '4px', letterSpacing: '1px' };

export default ProductDetail;