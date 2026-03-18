import React from 'react'

const Billing = () => {
  return (
    <div>
           <div className="mt-10  rounded shadow-lg p-4">
                {/* Heading */}
                <div className="bg-slate-50  py-2 rounded-t">
                  <h2 className="text-lg font-semibold"> Billing Address</h2>
                </div>

                {/* Form */}
                <form className="space-y-4 mt-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Name</label>
                      <input
                        type="text"
                        placeholder="Akash"
                        className="w-full border border-gray-200 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="akash@example.com"
                        className="w-full border border-gray-200 rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block text-sm mb-1">Phone</label>
                    <input
                      type="text"
                      placeholder="23423423"
                      className="w-full md:w-1/2 border border-gray-200 rounded px-3 py-2"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm mb-1">Address</label>
                    <textarea
                      placeholder="12 dummy address"
                      className="w-full border border-gray-200 rounded px-3 py-2"
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">City</label>
                      <input
                        type="text"
                        placeholder="Lucknow"
                        className="w-full border border-gray-200 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">State</label>
                      <input
                        type="text"
                        placeholder="UP"
                        className="w-full border border-gray-200 rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  {/* Zip */}
                  <div>
                    <label className="block text-sm mb-1">Zip</label>
                    <input
                      type="text"
                      placeholder="23423"
                      className="w-full md:w-1/2 border border-gray-200 rounded px-3 py-2"
                    />
                  </div>

                  {/* Button */}
                  <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
                    Update
                  </button>
                </form>
              </div>
    </div>
  )
}

export default Billing