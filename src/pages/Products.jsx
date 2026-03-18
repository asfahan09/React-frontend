import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import productsimg1 from "../assets/product1.png";
import productsimg2 from "../assets/product2.jpg";
import productsimg3 from "../assets/product3.png";

const gallery = [
  { id: 1, url: productsimg1 },
  { id: 2, url: productsimg2 },
  { id: 3, url: productsimg3 },
];

const Products = () => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (gallery.length > 0) {
      setMainImage(gallery[0].url);
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-360 mx-auto mt-3 lg:px-8 px-5">
        {/* breadcrumb */}
        <div className="flex space-x-3">
          <Link to="/">Home</Link>
          <IoIosArrowForward className="mt-1" />
          <Link className="font-medium">Shop</Link>
        </div>

        {/* main */}
        <div className="grid grid-cols-12 gap-5 py-5">
          {/* LEFT - IMAGES */}
          <div className="lg:col-span-5 col-span-12  ">
            <div className="grid grid-cols-12 gap-5">
              {/* Main Image */}
              <div className="col-span-10 bg-slate-50">
                {mainImage && (
                  <img
                    src={mainImage}
                    className="w-full rounded-lg"
                    alt="Main"
                  />
                )}
              </div>

              {/* Thumbnails */}
              <div className="col-span-2">
                {gallery.map((item) => (
                  <img
                    key={item.id}
                    src={item.url}
                    onClick={() => setMainImage(item.url)}
                    className="mb-2 rounded-lg cursor-pointer  hover:scale-105 transition"
                    alt={`Gallery ${item.id}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="lg:col-span-7 col-span-12  ">
            <h2 className="text-2xl font-bold">Good Product for men</h2>
            <div className="mt-4">
              <span className="text-xl font-semibold">$10</span>
              <span className="ml-2 text-red-500 line-through">$18</span>
            </div>
            <p className="mt-2 text-gray-800">Dummy description</p>

            <div>
              <h2 className="mt-4 font-medium">Select Size</h2>
            </div>

            <div className="flex gap-4 mt-4 ">
              <div className="bg-gray-200 hover:bg-green-500 w-10 h-10 flex justify-center items-center">
                S
              </div>
              <div className="bg-gray-200 hover:bg-green-500 w-10 h-10 flex justify-center items-center">
                M
              </div>
              <div className="bg-gray-200 hover:bg-green-500 w-10 h-10 flex justify-center items-center">
                L
              </div>
              <div className="bg-gray-200 hover:bg-green-500 w-10 h-10 flex justify-center items-center">
                XL
              </div>
            </div>
            <div className="border-gray-300 border-b pb-4 mt-8">
              <Link to="/cart" className="py-3 bg-green-400  hover:bg-green-500  text-white px-5 py-2 rounded ">
                Add to Cart
              </Link>
            </div>
            <div className="text-gray-400 mt-4">
                <p>Description of the product goes here.</p>
                <p>Additional details about the product can be added here.</p>
                <p>More information about the product can be provided here.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
