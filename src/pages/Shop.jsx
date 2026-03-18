import React from "react";
import Layout from "../components/layout/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.png";
import product2 from "../assets/product3.png";

const products = [
  {
    id: 1,
    name: "Bulked Up Vibes Wide-Leg Pants",
    price: 48.0,
    originalPrice: 60.0,
    image: product1,
  },
  {
    id: 2,
    name: "product 2",
    price: 48.0,
    originalPrice: 60.0,
    image: product2,
  },
  {
    id: 3,
    name: "product 3",
    price: 48.0,
    originalPrice: 60.0,
    image: product1,
  },
  {
    id: 4,
    name: "product 4",
    price: 48.0,
    originalPrice: 60.0,
    image: product2,
  },
  {
    id: 5,
    name: "product 5",
    price: 48.0,
    originalPrice: 60.0,
    image: product1,
  },
];

function Shop() {
  return (
    <>
      <Layout>
        <div className="max-w-360 mx-auto mt-3  lg:px-8 px-5">
          {/* breadcrumb */}

          <div className="flex space-x-3 ">
            <Link className="" to="/">
              Home
            </Link>
            <IoIosArrowForward className="mt-1" />
            <Link className="font-medium">Shop</Link>
          </div>

          {/* title */}
          <div className="text-green-500 text-3xl py-4 font-bold">Shop</div>

          {/* main container */}
          <div className="grid grid-cols-12 gap-5">
            {/* side part */}
            <div className="col-span-12 lg:col-span-2">
              <div className="flex justify-between border-gray-600 border-b pb-2">
                <h3 className="text-lg font-medium">Filter</h3>
                <button className="text-sm text-gray-500">Clear</button>
              </div>
              {/* categories */}
              <div>
                <div className=" font-medium mt-4 text-1xl">Categories</div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-center">
                    <input type="checkbox" name="" className="w-4 h-4 " id="" />
                    <span className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>
              </div>

              {/* brands */}
              <div className="mt-5">
                <div className=" font-medium mt-4 text-1xl">Brands</div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-center">
                    <input type="checkbox" name="" className="w-4 h-4 " id="" />
                    <span className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="checkbox"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="mt-5">
                <div className=" font-medium mt-4 text-1xl">Price</div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-center">
                    <input type="radio" name="" className="w-4 h-4 " id="" />
                    <span className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="radio"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="radio"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  <div className="flex items-centers">
                    <input
                      type="radio"
                      name=""
                      className="w-4 h-4 pt-2"
                      id=""
                    />
                    <label className="ml-2 text-sm" htmlFor="">
                      Option 1
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* products part */}
            <div className="col-span-12 lg:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {products.map((product) => {
                  return (
                    <article
                      key={product.id}
                      className="relative bg-slate-50 rounded-2xl flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl group"
                    >
                      <img
                        className="mt-4 transform transition-transform duration-300 group-hover:scale-105"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />

                      <div className="mt-auto text-center">
                        <div className="mt-6 font-semibold text-sm">
                          {product.name}
                        </div>

                        <div className="text-sm mt-2">
                          ${product.price}
                          <span className="text-red-500 line-through ml-2">
                            ${product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop;
