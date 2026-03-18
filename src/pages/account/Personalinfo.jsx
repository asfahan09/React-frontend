import React from "react";

const Personalinfo = () => {
  return (
    <div>
      <div>
        {/* Heading */}
        <div className="bg-slate-50">
          <h2 className="  inline-block px-3  text-2xl p-2">
            Personal Information
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 px-3 mt-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Akash"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="akash@example.com"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              placeholder="234234234"
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
  );
};

export default Personalinfo;
