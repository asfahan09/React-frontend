import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Personalinfo from "./Personalinfo";
import Billing from "./Billing";
import Sidebar from "./Sidebar";

const Profile = () => {
  return (
    <Layout>
      <div>
        <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
          {/* breadcrumb */}
          <div className="flex space-x-3 text-sm">
            <Link to="/">Home</Link>
            <IoIosArrowForward className="mt-1" />
            <Link className="font-medium">Profile</Link>
          </div>

          {/* title */}
          <h2 className="text-green-500 text-3xl py-4 font-bold">Profile</h2>
        </div>
        <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
          <div className="grid grid-cols-12 gap-5">
            {/* left */}
            <div className="lg:col-span-3 col-span-12">
             <Sidebar/>
            </div>

            {/* Right */}
            <div className="lg:col-span-9 col-span-12 pb-5 space-y-5 rounded shadow-lg ">
            <Personalinfo/>
            <Billing/>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
