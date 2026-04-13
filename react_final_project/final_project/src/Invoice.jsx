 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Invoice = () => {

  const [lastOrder, setLastOrder] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);

  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/orders";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get(API_URL);

    if (res.data.length > 0) {
      const latest = res.data[res.data.length - 1];
      setLastOrder(latest);
    } else {
      navigate("/");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);

    toast("Deleted", { type: "success" });

    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(`${API_URL}/${editingOrder.id}`, editingOrder);

    setLastOrder(editingOrder);
    setEditingOrder(null);

    toast("Updated", { type: "success" });
  };

  if (!lastOrder) {
    return (
      <h2 className="text-center mt-20 text-xl">Loading...</h2>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-10 px-5">

      <h1 className="text-center text-4xl font-bold mb-10 tracking-wide">
        🧾 INVOICE
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        <div className="w-1/2 bg-black">
          <img 
            src={lastOrder.productImage} 
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">

          <p className="text-[#C5A044] font-bold tracking-wide">
            PREMIUM ORDER
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {lastOrder.productName}
          </h2>

          <p className="text-2xl font-bold text-[#C5A044] mt-2">
            ₹ {lastOrder.productPrice}
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mt-6 text-sm leading-7">
            <p><b>Order ID:</b> {lastOrder.id}</p>
            <p><b>Name:</b> {lastOrder.customerName}</p>
            <p><b>Email:</b> {lastOrder.customerEmail}</p>
            <p><b>Phone:</b> {lastOrder.phone}</p>
            <p><b>City:</b> {lastOrder.city}</p>
            <p><b>Address:</b> {lastOrder.address}</p>
            <p><b>Date:</b> {lastOrder.date}</p>
          </div>

          <div className="flex gap-4 mt-6">

            <button 
              onClick={() => setEditingOrder(lastOrder)}
              className="flex-1 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition"
            >
              EDIT
            </button>

            <button 
              onClick={() => handleDelete(lastOrder.id)}
              className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg font-bold hover:bg-red-500 hover:text-white transition"
            >
              DELETE
            </button>

          </div>

          <button 
            onClick={() => window.print()}
            className="mt-4 bg-[#C5A044] text-white py-3 rounded-lg font-bold hover:bg-[#a38330]"
          >
            🖨 Print Invoice
          </button>

        </div>
      </div>

      {editingOrder && (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">

          <h3 className="text-xl font-bold mb-4 border-b pb-2">
            Edit Order
          </h3>

          <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-5">

            <input 
              className="border p-3 rounded focus:ring-2 focus:ring-[#C5A044]"
              value={editingOrder.customerName}
              onChange={(e)=>setEditingOrder({...editingOrder, customerName:e.target.value})}
              placeholder="Customer Name"
            />

            <input 
              className="border p-3 rounded focus:ring-2 focus:ring-[#C5A044]"
              value={editingOrder.productPrice}
              onChange={(e)=>setEditingOrder({...editingOrder, productPrice:e.target.value})}
              placeholder="Price"
            />

            <input 
              className="border p-3 rounded focus:ring-2 focus:ring-[#C5A044]"
              value={editingOrder.phone}
              onChange={(e)=>setEditingOrder({...editingOrder, phone:e.target.value})}
              placeholder="Phone"
            />

            <input 
              className="border p-3 rounded focus:ring-2 focus:ring-[#C5A044]"
              value={editingOrder.city}
              onChange={(e)=>setEditingOrder({...editingOrder, city:e.target.value})}
              placeholder="City"
            />

            <div className="col-span-2 flex gap-3 mt-3">
              <button className="flex-1 bg-green-600 text-white py-3 rounded">
                Save
              </button>

              <button 
                type="button"
                onClick={()=>setEditingOrder(null)}
                className="flex-1 bg-gray-600 text-white py-3 rounded"
              >
                Close
              </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );
};

export default Invoice;