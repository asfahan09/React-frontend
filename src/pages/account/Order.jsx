import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "./Sidebar";

const Order = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
            {/* breadcrumb */}
            <div className="flex space-x-3 text-sm">
              <Link to="/">Home</Link>
              <IoIosArrowForward className="mt-1" />
              <Link className="font-medium">Order</Link>
            </div>

            {/* title */}
            <h2 className="text-green-500 text-3xl py-4 font-bold">Order</h2>
          </div>
          <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5 ">
            <div className="grid grid-cols-12 gap-5 ">
              {/* left */}
              <div className="lg:col-span-3 col-span-12">
                <Sidebar />
              </div>

              {/* Right */}
              <div className="lg:col-span-9 col-span-12 pb-5 space-y-5  rounded  ">
                <div>
                  {/* Heading */}
                  <div className="bg-slate-50">
                    <h2 className="  inline-block px-3  text-2xl p-2">
                      order details
                    </h2>
                  </div>

                  <div className="bg-white rounded shadow p-4 ">
                    {/* Heading */}

                    {/* Table */}
                    <div className="overflow-x-auto ">
                      <table className="w-full text-sm text-left border-collapse">
                        {/* Head */}
                        <thead>
                          <tr className="text-gray-600 border-b">
                            <th className="py-2">Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3">Akash</td>
                            <td>akash@example.com</td>
                            <td>6545646546</td>
                            <td>$60.00</td>

                            {/* Status */}
                            <td>
                              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                Paid
                              </span>
                            </td>

                            <td>25 Dec 2025</td>

                            {/* Action */}
                            <td>
                              <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600">
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Order;
