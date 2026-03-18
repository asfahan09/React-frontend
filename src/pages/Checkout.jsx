import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import product1 from "../assets/product1.png";

function Checkout() {
  return (
    <Layout>
      <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5">

        {/* breadcrumb */}
        <div className="flex space-x-3 text-sm">
          <Link to="/">Home</Link>
          <IoIosArrowForward className="mt-1" />
          <Link className="font-medium">Checkout</Link>
        </div>

        {/* title */}
        <h2 className="text-green-500 text-3xl py-4 font-bold">Checkout</h2>

        {/* main grid */}
        <div className="grid grid-cols-12 gap-5">

          {/* LEFT - Billing Form */}
          <div className="lg:col-span-8  col-span-12  rounded-lg">

            <h3 className="font-semibold mb-4">Billing Details</h3>

            {/* Name */}
            <input
              type="text"
              placeholder="Akash"
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="email"
                placeholder="akash@example.com"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="234234234"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Address */}
            <textarea
              placeholder="12 dummy address"
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* City + State */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Lucknow"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="UP"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Zip */}
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

          </div>

          {/* RIGHT - Order Summary */}
          <div className="lg:col-span-4 col-span-12">
            <div className="  rounded-lg">

              <h3 className="font-semibold mb-4">Order Summary</h3>

              {/* Item 1 */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2 items-center">
                  <img
                    src={product1}
                    className="w-10 h-10 rounded"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Nice white jacket for women
                    </p>
                    <p className="text-xs text-gray-500">Qty: 3 | Size: XL</p>
                  </div>
                </div>
                <span>$300</span>
              </div>

             

              <hr className="my-3" />

              {/* Total */}
              <div className="flex justify-between text-sm mb-1">
                <span>Subtotal</span>
                <span>$310.00</span>
              </div>
              <div className="flex justify-between font-semibold mb-3">
                <span>Total</span>
                <span>$310.00</span>
              </div>

              {/* Payment */}
              <div className="mb-4">
                <p className="text-sm mb-1">Payment Method</p>
                <div className="flex gap-3 text-sm">
                  <label>
                    <input type="radio" name="pay" /> COD
                  </label>
                  <label>
                    <input type="radio" name="pay" /> Stripe
                  </label>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                Place Order Securely
              </button>

              <p className="text-xs text-gray-400 mt-2 text-center">
                🔒 Secure payment & encrypted checkout
              </p>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Checkout;