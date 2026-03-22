 import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const ProductDetail = () => {

  const navigate = useNavigate();

  // 🔥 GET DATA
  const savedProduct = localStorage.getItem('currentProduct');
  const product = savedProduct ? JSON.parse(savedProduct) : null;

  const savedUser = localStorage.getItem('userdata');
  const user = savedUser ? JSON.parse(savedUser) : null;

  // 🔥 STATES
  const [showForm, setShowForm] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImg, setMainImg] = useState(product?.images?.[0]);

  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    city: ""
  });

  const API_URL = "http://localhost:3000/orders";

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-xl">No Product Found</h2>
    );
  }

  // 🔥 ORDER FUNCTION
  const handleConfirmOrder = async () => {

    if (!user) {
      toast("Login first", { type: "error" });
      navigate("/Sign");
      return;
    }

    if (!selectedSize) {
      toast("Select size", { type: "error" });
      return;
    }

    if (!formData.address || !formData.phone) {
      toast("Fill all fields", { type: "error" });
      return;
    }

    const orderData = {
      customerName: user.name,
      customerEmail: user.email,

      productName: product.name,
      productPrice: product.price,

      // ✅ FIXED IMAGE
      productImage: mainImg,

      size: selectedSize,

      address: formData.address,
      phone: formData.phone,
      city: formData.city,

      date: new Date().toLocaleString()
    };

    try {
      await axios.post(API_URL, orderData);

      toast("Order placed!", { type: "success" });

      navigate("/Invoice");

    } catch {
      toast("Server error", { type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-10 px-5">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        {/* 🔥 LEFT SIDE IMAGES */}
        <div className="w-1/2 p-5">

          {/* MAIN IMAGE */}
          <img 
            src={mainImg} 
            alt=""
            className="w-full h-[400px] object-cover rounded-xl"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 justify-center">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImg(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border 
                  ${mainImg === img ? "border-black" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="w-1/2 p-10 flex flex-col justify-center">

          <p className="text-[#C5A044] font-bold tracking-wide">
            PREMIUM COLLECTION
          </p>

          <h1 className="text-3xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-[#C5A044] mt-2">
            ₹ {product.price}
          </p>

          {/* SIZE */}
          <div className="mt-5">
            <p className="text-sm font-semibold mb-2">SELECT SIZE</p>

            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg font-medium transition 
                  ${selectedSize === size 
                    ? "bg-black text-white" 
                    : "bg-white hover:bg-gray-100"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* USER INFO */}
          {user ? (
            <div className="bg-gray-50 p-5 rounded-xl mt-5 border border-gray-200 space-y-3">

              <p className="text-sm text-gray-500 uppercase">
                Customer Details
              </p>

              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>

              <hr />

              <div className="flex justify-between text-sm">
                <span>Product</span>
                <span>{product.name}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Price</span>
                <span className="text-[#C5A044]">₹ {product.price}</span>
              </div>

              {selectedSize && (
                <div className="flex justify-between text-sm">
                  <span>Size</span>
                  <span>{selectedSize}</span>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-red-50 p-4 rounded-lg mt-5 border border-red-200">
              <p className="text-red-500 text-sm">
                ⚠️ Please login to continue
              </p>
            </div>
          )}

          {/* BUY */}
          <button 
            onClick={() => setShowForm(true)}
            className="mt-6 bg-black text-white py-3 rounded-lg font-bold"
          >
            BUY NOW
          </button>

        </div>
      </div>

      {/* 🔥 FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-8 rounded-2xl w-[400px]">

            <h3 className="text-xl font-bold mb-4 text-center">
              Delivery Details
            </h3>

            <div className="flex flex-col gap-3">

              <input 
                className="border p-3 rounded"
                placeholder="Address"
                onChange={(e)=>setFormData({...formData, address:e.target.value})}
              />

              <input 
                className="border p-3 rounded"
                placeholder="Phone"
                onChange={(e)=>setFormData({...formData, phone:e.target.value})}
              />

              <input 
                className="border p-3 rounded"
                placeholder="City"
                onChange={(e)=>setFormData({...formData, city:e.target.value})}
              />

              <button 
                onClick={handleConfirmOrder}
                className="bg-[#C5A044] text-white py-3 rounded"
              >
                Confirm Order
              </button>

              <button 
                onClick={()=>setShowForm(false)}
                className="bg-gray-600 text-white py-3 rounded"
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetail;