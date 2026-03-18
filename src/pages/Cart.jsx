import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import product1 from "../assets/product1.png";

const Cart = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-3 px-4 lg:px-8">

        {/* breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <span className="font-medium">Cart</span>
        </div>

        {/* title */}
        <h2 className="text-green-500 text-2xl lg:text-3xl py-4 font-bold">
          Cart
        </h2>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* LEFT SIDE */}
          <div className="lg:col-span-9">

            {/* header (desktop only) */}
            <div className="hidden lg:grid grid-cols-12 text-sm font-semibold p-3 bg-slate-50 rounded">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Qty</div>
              <div className="col-span-3 text-center">Total</div>
            </div>

            {/* product row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center py-4 border-b">

              {/* product */}
              <div className="lg:col-span-6 flex gap-4">
                <img
                  src={product1}
                  className="w-20 h-20 rounded object-cover"
                  alt=""
                />
                <div>
                  <h3 className="text-sm font-medium">
                    Nice white jacket for women
                  </h3>
                  <p className="text-sm text-gray-500">$100</p>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    XL
                  </span>
                  <p className="text-red-500 text-xs mt-1 cursor-pointer">
                    Remove
                  </p>
                </div>
              </div>

              {/* qty */}
              <div className="lg:col-span-3 flex justify-between lg:justify-center items-center">
                <span className="lg:hidden text-sm">Qty:</span>
                <div className="flex border rounded">
                  <button className="px-2">-</button>
                  <span className="px-3">1</span>
                  <button className="px-2">+</button>
                </div>
              </div>

              {/* total */}
              <div className="lg:col-span-3 flex justify-between lg:justify-center items-center">
                <span className="lg:hidden text-sm">Total:</span>
                <span>$100</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 p-5 rounded-lg lg:sticky lg:top-5">

              <h3 className="font-semibold mb-3">Summary</h3>

              <div className="flex justify-between text-sm mb-4">
                <span>Subtotal</span>
                <span>$100</span>
              </div>

              <Link
                to="/checkout"
                className="block text-center w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Proceed To Checkout
              </Link>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Cart;