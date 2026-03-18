import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.png";
import { Link } from "react-router-dom";



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
    image: product3,
  },
  {
    id: 4,
    name: "product 4",
    price: 48.0,
    originalPrice: 60.0,
    image: product1,
  },
  {
    id: 5,
    name: "product 5",
    price: 48.0,
    originalPrice: 60.0,
    image: product2,
  },
];

function LatestFeatured() {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 my-20">
      <h2 className="text-3xl text-green-500 font-bold text-center mt-10 mb-6">
        Latest <span className="text-gray-700">Products</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 ">
        {products.map((product) => {
          return (
            <article
              key={product.id}
              className="relative bg-slate-50 rounded-2xl flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl group"
            >
               <Link to="/products">
                <img
                  className="mt-4 transform transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </Link>

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
  );
}

export default LatestFeatured;