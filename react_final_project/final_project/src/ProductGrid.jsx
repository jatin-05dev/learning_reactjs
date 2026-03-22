 import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem('userdata');
  const user = savedUser ? JSON.parse(savedUser) : null;

  // 🔥 CLICK
  const handleProductClick = (product) => {
    localStorage.setItem('currentProduct', JSON.stringify(product));

    navigate(`/ProductDetail/${product.id}`, {
      state: {
        product: product,
        user: user
      }
    });
  };

  // 🔥 ADD TO BAG
  const handleAddToBag = (e, product) => {
    e.stopPropagation();

    let bag = JSON.parse(localStorage.getItem("bag")) || [];

    bag.push(product);

    localStorage.setItem("bag", JSON.stringify(bag));
    localStorage.setItem("bagCount", bag.length);

    window.dispatchEvent(new Event("storage_changed"));

    alert("Added to Bag!");
  };

  // 🔥 PRODUCTS WITH 3 IMAGES EACH
  const products = [
    { 
      id: 101, 
      category: "CASUAL SHIRT", 
      name: "Pink Solid Shirt", 
      price: "2,625", 
      color: "pink",
      images: [
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800",
        "https://images.unsplash.com/photo-1520974735194-55a7f9b9c1c5?q=80&w=800",
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800"
      ]
    },

    { 
      id: 102, 
      category: "SHOES", 
      name: "Brown Leather Shoes", 
      price: "5,999", 
      color: "brown",
      images: [
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800",
        "https://images.unsplash.com/photo-1582582429416-2d1d6c2f2b91?q=80&w=800"
      ]
    },

    { 
      id: 103, 
      category: "CASUAL SHIRT", 
      name: "Navy Stripe Shirt", 
      price: "2,625", 
      color: "navy",
      images: [
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
        "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800"
      ]
    },

    { 
      id: 104, 
      category: "CASUAL SHIRT", 
      name: "Brown Stripe Shirt", 
      price: "2,625", 
      color: "#713f12",
      images: [
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800"
      ]
    },

    { 
      id: 105, 
      category: "T-SHIRT", 
      name: "White Basic Tee", 
      price: "999", 
      color: "black",
      images: [
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800",
        "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800",
        "https://images.unsplash.com/photo-1520974735194-55a7f9b9c1c5?q=80&w=800"
      ]
    },

    { 
      id: 106, 
      category: "JEANS", 
      name: "Blue Denim Jeans", 
      price: "2,999", 
      color: "blue",
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835538f?q=80&w=800",
        "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800",
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800"
      ]
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      {/* Banner */}
      <div style={{
        background: '#f4f4f4',
        padding: '40px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1>NEW SUMMER SALE</h1>
        <p style={{ color: '#666' }}>Flat 50% Off on all shirts</p>
      </div>

      {/* GRID */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '25px'
        }}>

          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProductClick(item)}
              style={{
                border: '1px solid #eee',
                padding: '10px',
                cursor: 'pointer'
              }}
            >

              {/* 🔥 FIRST IMAGE SHOW */}
              <img
                src={item.images[0]}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  marginBottom: '10px'
                }}
              />

              <p style={{ fontSize: '10px', color: '#999', margin: 0 }}>
                {item.category}
              </p>

              <h3 style={{ fontSize: '14px', margin: '5px 0' }}>
                {item.name}
              </h3>

              <p style={{ fontWeight: 'bold' }}>
                ₹ {item.price}
              </p>

              <button
                onClick={(e) => handleAddToBag(e, item)}
                style={{
                  width: '100%',
                  padding: '8px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  fontSize: '11px',
                  cursor: 'pointer'
                }}
              >
                ADD TO BAG
              </button>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductGrid;