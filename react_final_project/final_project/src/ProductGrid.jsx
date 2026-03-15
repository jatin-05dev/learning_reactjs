 import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const navigate = useNavigate();

  // LocalStorage se user check karo
  const savedUser = localStorage.getItem('userdata');
  const user = savedUser ? JSON.parse(savedUser) : null;

  // --- DETAIL PAGE NAVIGATION ---
  const handleProductClick = (product) => {
    // 1. Product ki saari detail (img, name, price) LocalStorage mein save kar di
    localStorage.setItem('currentProduct', JSON.stringify(product));

    // 2. Navigate karte waqt state bhi bhej rahe hain (Double safety ke liye)
    navigate(`/ProductDetail/${product.id}`, { 
      state: { 
        product: product,
        user: user 
      } 
    });
  };

  // --- BAG UPDATE LOGIC ---
  const handleAddToBag = (e) => {
    e.stopPropagation(); 
    const currentCount = parseInt(localStorage.getItem('bagCount') || '0');
    localStorage.setItem('bagCount', currentCount + 1);
    window.dispatchEvent(new Event("storage_changed"));
    alert("Added to bag!");
  };

  // Product Data
  const products = [
    { id: 101, category: "CASUAL SHIRT", name: "Pink Solid Shirt", price: "2,625", color: "pink", img: "k.webp" },
    { id: 102, category: "SHOES", name: "Brown Lace Up Shoes", price: "5,999", color: "brown", img: "k.webp" },
    { id: 103, category: "CASUAL SHIRT", name: "Navy Stripe Shirt", price: "2,625", color: "navy", img: "https://images.clothes.com/navy-shirt.jpg" },
    { id: 104, category: "CASUAL SHIRT", name: "Brown Stripe Shirt", price: "2,625", color: "#713f12", img: "https://images.clothes.com/brown-stripe.jpg" },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ background: '#f4f4f4', padding: '40px', textAlign: 'center', marginBottom: '30px', borderRadius: '8px' }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>NEW SUMMER SALE</h1>
        <p style={{ color: '#666' }}>Flat 50% Off on all shirts</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        
        {products.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleProductClick(item)} 
            style={{ border: '1px solid #eee', padding: '10px', cursor: 'pointer', transition: '0.3s' }}
          >
            <div style={{ 
              background: '#eee', 
              height: '250px', 
              marginBottom: '10px',
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>

            <p style={{ fontSize: '10px', color: '#999', margin: '0' }}>{item.category}</p>
            <h3 style={{ fontSize: '14px', margin: '5px 0' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>₹ {item.price}</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }}></div>
              <span style={{ fontSize: '11px' }}>{item.color}</span>
            </div>

            <button onClick={handleAddToBag} style={btnStyle}>ADD TO BAG</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const btnStyle = {
  width: '100%',
  padding: '8px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  fontSize: '11px',
  fontWeight: 'bold',
  cursor: 'pointer',
  letterSpacing: '1px'
};

export default ProductGrid;