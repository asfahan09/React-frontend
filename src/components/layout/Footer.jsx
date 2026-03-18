import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-green-300">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          
          <div className="p-5">
            <h3 className="font-bold text-xl text-black">Company Name</h3>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">
              Resources
            </div>
            <a className="my-3 block" href="#">Documentation</a>
            <a className="my-3 block" href="#">Tutorials</a>
            <a className="my-3 block" href="#">Support</a>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">
              Support
            </div>
            <a className="my-3 block" href="#">Help Center</a>
            <a className="my-3 block" href="#">Privacy Policy</a>
            <a className="my-3 block" href="#">Conditions</a>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="#">
              XXX XXXX, Floor 4 San Francisco, CA
            </a>
            <a className="my-3 block" href="#">contact@company.com</a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;