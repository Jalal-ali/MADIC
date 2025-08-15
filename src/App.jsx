import React from 'react'
import HeroImg from './assets/banner/MADIC-hero.png'
import { FaTwitch } from "react-icons/fa";

const App = () => {
  return (
    <>
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero  */}
        <section className="flex flex-col items-center gap-2 py-2 max-w-7xl w-full -mt-12 md:-my-36">
          <img src={HeroImg} alt="" />
          <div className="-mt-10 md:-mt-28 flex justify-center items-center space-x-2 ">

            <a
              href="#"
              title=""
              className="whitespace-nowrap bg-white rounded-full px-6 md:px-8 py-3 border border-[#9147FF] font-medium text-black transition-all duration-200 "
            >
              Explore Collections
            </a>
            <a
              href="#"
              title=""
              className="whitespace-nowrap rounded-full bg-[#9147FF] px-4 md:px-10 py-3 font-medium text-white transition-all duration-200"
            >
              Buy Now
            </a>
          </div>
        </section>
        {/* Categories  */}
        <section className="flex flex-col items-center gap-2 py-2 max-w-7xl w-full mt-10 md:mt-38">
          <h2 className="text-3xl md:self-start text-center md:text-left self-center font-bold mb-4">Explore Our Categories</h2>
          {/* twitch banner  */}
          <div
            className="w-full rounded-xl bg-cover bg-center py-12 bg-[url('./assets/categories/twitch-bg.png')]"
          >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center ">
              <h1 className="text-white text-lg md:text-3xl font-bold flex items-center gap-2 ">
                <FaTwitch className="w-6 h-6 md:w-8 md:h-8" />
                TWITCH PACKAGES
              </h1>
            </div>
          </div>
          {/* cards */}
          {/* ✅ Grid Section - Starts Here 👇 */}
          <section
            id="Projects"
            className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6  justify-between mt-10 mb-5"
          >
            {/*   ✅ Product card 1 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 1 - Ends Here  */}
            {/*   ✅ Product card 2 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 2 - Ends Here  */}
            {/*   ✅ Product card 3 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 3 - Ends Here  */}
            {/*   ✅ Product card 4 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 4 - Ends Here  */}
            {/* .............................................. */}
            {/*   ✅ Product card 5 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 5 - Ends Here  */}
            {/*   ✅ Product card 6 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 6 - Ends Here  */}
            {/*   ✅ Product card 7 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 7 - Ends Here  */}
            {/*   ✅ Product card 8 - Starts Here 👇 */}
            <div className="py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
              <a href="#">
                {/* card img  */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                  {/* 1st image: spans 2 rows */}
                  <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?auto=format&fit=crop&w=500&q=60"
                    alt="Product 1"
                    className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                  />
                  {/* 2nd image: 2nd col, 1st row */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                    alt="Product 2"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                  {/* 3rd image: 2nd col, 2nd row */}
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                    alt="Product 3"
                    className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                  />
                </div>
                <div className="w-full px-1 py-2">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  {/* <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </a>
            </div>
            {/*   🛑 Product card 8 - Ends Here  */}

          </section>

        </section>




      </main>
    </>
  )
}

export default App