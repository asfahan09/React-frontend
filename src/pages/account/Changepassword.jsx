import React from 'react'
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { IoIosArrowForward } from "react-icons/io";


const Changepassword = () => {
    return (
    <div>
      <Layout>
        <div>
          <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
            {/* breadcrumb */}
            <div className="flex space-x-3 text-sm">
              <Link to="/">Home</Link>
              <IoIosArrowForward className="mt-1" />
              <Link className="font-medium">Change Password</Link>
            </div>

            {/* title */}
            <h2 className="text-green-500 text-3xl py-4 font-bold">Change Password</h2>
          </div>
          <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
            <div className="grid grid-cols-12 gap-5 ">
              {/* left */}
              <div className="lg:col-span-3 col-span-12">
                <Sidebar />
              </div>

              {/* Right */}
              <div className="lg:col-span-9 col-span-12 pb-5 space-y-5 shadow-lg  rounded  ">
                <div>
        {/* Heading */}
        <div className="bg-slate-50">
          <h2 className="  inline-block px-3  text-2xl p-2">
            Change Password
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 px-3 mt-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Old Password</label>
            <input
              type="password"
              placeholder="Old Password"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm mb-1">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

   

          {/* Button */}
          <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
            Update
          </button>
        </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Changepassword