import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div>
         <div className="space-y-3 w-full">
                <Link
                  to="/profile"
                  className="block w-full rounded bg-green-300 hover:bg-green-500 font-medium px-4 py-2 rounded"
                >
                  <span className="flex gap-2 items-center">
                    <FaUser /> <span className="mt-1">Profile</span>
                  </span>
                </Link>
                <Link
                  to="/profile"
                  className="block w-full rounded bg-green-300 hover:bg-green-500 font-medium px-4 py-2 rounded"
                >
                  <span className="flex gap-2 items-center">
                    <FaCartShopping /> <span className="mt-1">Orders</span>
                  </span>
                </Link>
                <Link
                  to="/profile"
                  className="block w-full rounded bg-green-300 hover:bg-green-500 font-medium px-4 py-2 rounded"
                >
                  <span className="flex gap-2 items-center">
                    <RiLockPasswordFill />{" "}
                    <span className="mt-1">Change Password</span>
                  </span>
                </Link>
                <Link
                  to="/profile"
                  className="block w-full rounded bg-green-300 hover:bg-green-500 font-medium px-4 py-2 rounded"
                >
                  <span className="flex gap-2 items-center">
                    <IoIosLogOut /> <span className="mt-1">Logout</span>
                  </span>
                </Link>
              </div>
    </div>
  )
}

export default Sidebar