import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        <h2 className="text-center text-xl font-semibold mb-6">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
        </p>

      </div>
    </div>
  );
};