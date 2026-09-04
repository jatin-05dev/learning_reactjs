import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bag = () => {

  const [bagItems, setBagItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bag")) || [];
    setBagItems(data);
  }, []);

  // ❌ REMOVE
  const removeItem = (index) => {
    let updated = [...bagItems];
    updated.splice(index, 1);

    setBagItems(updated);
    localStorage.setItem("bag", JSON.stringify(updated));
    localStorage.setItem("bagCount", updated.length);
  };

  // ✅ BUY → ProductDetail
  const handleBuy = (item) => {
    localStorage.setItem("currentProduct", JSON.stringify(item));
    navigate(`/ProductDetail/${item.id}`);
  };

  if (bagItems.length === 0) {
    return <h2 className="text-center mt-20">Your Bag is Empty</h2>;
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">🛒 Your Bag</h1>

      <div className="space-y-5">

        {bagItems.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border p-4 rounded-lg shadow">

            <img src={item.images} className="w-24 h-24 object-cover rounded" />

            <div className="flex-1">
              <h2 className="font-bold">{item.name}</h2>
              <p>₹ {item.price}</p>
            </div>

            <button 
              onClick={() => handleBuy(item)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              BUY
            </button>

            <button 
              onClick={() => removeItem(index)}
              className="text-red-500"
            >
              REMOVE
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Bag;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bag = () => {

  const [bagItems, setBagItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bag")) || [];
    setBagItems(data);
  }, []);

  // ❌ REMOVE
  const removeItem = (index) => {
    let updated = [...bagItems];
    updated.splice(index, 1);

    setBagItems(updated);
    localStorage.setItem("bag", JSON.stringify(updated));
    localStorage.setItem("bagCount", updated.length);
  };

  // ✅ BUY → ProductDetail
  const handleBuy = (item) => {
    localStorage.setItem("currentProduct", JSON.stringify(item));
    navigate(`/ProductDetail/${item.id}`);
  };

  if (bagItems.length === 0) {
    return <h2 className="text-center mt-20">Your Bag is Empty</h2>;
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">🛒 Your Bag</h1>

      <div className="space-y-5">

        {bagItems.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border p-4 rounded-lg shadow">

            <img src={item.images} className="w-24 h-24 object-cover rounded" />

            <div className="flex-1">
              <h2 className="font-bold">{item.name}</h2>
              <p>₹ {item.price}</p>
            </div>

            <button 
              onClick={() => handleBuy(item)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              BUY
            </button>

            <button 
              onClick={() => removeItem(index)}
              className="text-red-500"
            >
              REMOVE
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Bag;