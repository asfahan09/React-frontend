import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow">
      {/* Top Bar */}
      <div className="bg-green-200">
        <div className="max-w-360 mx-auto text-sm lg:px-8 px-5 py-1">
          Free Delivery on your first order
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-360 mx-auto lg:px-8 px-5">
          {/* Top Row */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-green-500">E</span>
              <span className="text-3xl font-bold text-gray-900">commerce</span>
            </Link>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="hover:text-green-500">
                Home
              </Link>
              <Link to="/shop" className="hover:text-green-500">
                Mens
              </Link>
              <Link to="/shop" className="hover:text-green-500">
                Womens
              </Link>
              <Link to="/shop" className="hover:text-green-500">
                Kids
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative">
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
                <CiShoppingCart className="text-2xl" />
              </Link>
               <Link to="/login" class=" px-5 py-2 text-center text-gray-800 rounded hover:bg-green-500 font-semibold text-md bg-green-400  border-2 border-green-400">
               Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${open ? "block" : "hidden"} lg:hidden pb-4`}>
            <div className="flex flex-col gap-4 mt-3">
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/shop" onClick={() => setOpen(false)}>
                Shop
              </Link>

              <Link to="/login" onClick={() => setOpen(false)}>
                Sign in
              </Link>

              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <CiShoppingCart />
                Cart (0)
              </Link>
             
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
