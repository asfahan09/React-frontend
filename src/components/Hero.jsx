import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpg";

function Hero() {
  return (
    <>
    <div class="bg-slate-50">
      <div class="flex max-w-360 mx-auto lg:px-8  px-5  items-center  bg-hero md:h-screen overflow-hidden ">
        <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl ">
          <div class="w-full md:w-1/2 lg:pr-32 items-center" >
            <h2 class="text-2xl lg:text-5xl text-center md:text-left text-gray-700  font-bold items-center">
              Discover Your Style in our Fashion Collection
            </h2>
            <h3 class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-black font-light ">
              Help Scout is designed with your customers in mind. Provide email
              and live chat with a personal touch, and deliver help content
            
            </h3>
            <div to="/shop" class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <Link to="/shop" class=" px-5 py-3 text-center rounded font-semibold text-md bg-green-500 text-white border-2 border-green-500">
                Shop Now
              </Link>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={hero1} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
