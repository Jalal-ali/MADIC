import React from 'react'
import { FaArrowRightLong, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import Logo from '../assets/logo/site-logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <>
      <footer className="bg-[#24282B] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* 1st bar  */}
          <div className='flex flex-wrap justify-between gap-10'>
            {/* Brand */}
            <div>
              <h2 className="text-white text-2xl font-bold">MADIC</h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Your ultimate platform for gaming art collections, creator-friendly
                features, and secure transactions.
              </p>
            </div>

            {/* search bar */}
            <div>
              <form className="flex  h-[3.5rem] max-h-full ">
                <input
                  type="email"
                  placeholder="Enter your email address ..."
                  className="max-w-full w-auto md:w-[20rem] px-6 py-2 rounded-l-full text-black focus:outline-none bg-white"
                />
                <button
                  type="submit"
                  className="max-w-full w-[6rem] hover:bg-purple-400 bg-[#9147FF] text-white px-2 py-2 rounded-r-full"
                >
                  <FaArrowRightLong className="text-2xl mx-auto" />
                </button>
              </form>
            </div>
          </div>

          {/* 2nd bar */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-6">

            {/* Logo   */}
            <div>
              <a href="javascript:void(0)">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[160px] lg:h-[160px]"
                />
              </a>
            </div>


            {/* Links */}
            <div className="flex space-x-4 md:space-x-14 text-sm font-medium mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-400">Products</a>
              <a href="#" className="hover:text-gray-400">Creators</a>
              <a href="#" className="hover:text-gray-400">Blog</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-8">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-gray-200">
                <FaFacebookF />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-gray-200">
                <FaTwitter />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-gray-200">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MADIC. All rights reserved.
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer