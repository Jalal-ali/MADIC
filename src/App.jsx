import React from 'react'
import HeroImg from './assets/banner/MADIC-hero.png'
import Cracking from './assets/backgrounds/cracking.png'
import CategoryCard from './components/CategoryCard.jsx'
import ImageCard from './components/ImageCard.jsx'
import { FaTwitch } from "react-icons/fa";
import Slider from './components/Slider.jsx'
import ProductCard from './components/ProductCard.jsx'
import Emily from './assets/profiles/emily.png'
import EmilyProduct from './assets/products/emily.png'
import Richard from './assets/profiles/richard.png'
import RichardProduct from './assets/products/richard.png'
import Alex from './assets/profiles/alex.png'
import AlexProduct from './assets/products/alex.png'
import Mia from './assets/profiles/mia.png'
import MiaProduct from './assets/products/mia.png'
import Medal1 from './assets/backgrounds/rank-1.png'
import Medal2 from './assets/backgrounds/rank-2.png'
import Medal3 from './assets/backgrounds/rank-3.png'
import Unfilled from './assets/backgrounds/unfilled-star.png'
import Filled from './assets/backgrounds/filled-star.png'
import Collection from './assets/icons/collection.png'
import Pencil from './assets/icons/pencil.png'
import Heart from './assets/icons/heart.png'
import FullTime from './assets/icons/24-7.png'
import Secure from './assets/icons/secure.png'
import Dollar from './assets/icons/dollar.png'
import Blog1 from './assets/banner/blog1.png'
import Blog2 from './assets/banner/blog2.png'
import FAQStar from './assets/icons/FAQ-Star.png'
import Rank1 from './assets/profiles/1st-rank.png'
import Rank2 from './assets/profiles/2nd-rank.png'
import Rank3 from './assets/profiles/3rd-rank.png'
import { FiArrowRight } from "react-icons/fi";
import CustomizationCard from './components/CustomizationCard.jsx'




const App = () => {
  return (
    <>
      {/* Hero  */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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
      </main>
      {/* Categories  */}
      <main className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-38 relative'>
        <div className="absolute inset-0 bg-repeat-y -bottom-1/3 bg-center opacity-60 bg-[url('./assets/backgrounds/cracking.png')]"></div>

        <section className="flex flex-col items-center gap-2 py-2">
          <h2 className="text-3xl md:self-start text-center md:text-left self-center font-bold mb-4">Explore Our Categories</h2>
          {/* twitch banner  */}
          <div
            className="w-full z-10 rounded-xl bg-cover bg-center  py-12 bg-[url('./assets/categories/twitch-bg.png')]"
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
          <div className="w-full rounded-xl relative p-6 h-full">
            {/* Background Layer */}
            {/* <div className="absolute top-0 -right-4 md:-right-6 bg-repeat-y lg:-right-14 w-full h-full opacity-60 bg-center bg-[url('./assets/backgrounds/cracking.png')]"></div> */}
            <section
              id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 justify-between"
            >
              {/* cards components */}
              {/* card 1  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 2  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 3  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 4  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 5  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 6  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 7  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
              {/* card 8  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
                video="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
              />
            </section>
          </div>
          {/* ✅ Grid Section - Ends Here */}
          <a
            href="#"
            title=""
            className="whitespace-nowrap z-10 rounded-full bg-[#9147FF] px-4 md:px-10 py-3 font-medium text-white transition-all duration-200"
          >
            Explore Categories
          </a>
        </section>
      </main>
      {/* Hot Off the Shelf  */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <section className="items-center gap-2 py-2 max-w-7xl w-full mt-10  ">
          <h2 className="text-3xl text-center self-center font-bold my-1">Hot Off the Shelf</h2>
          <p className="text-[25px] leading-[100%] font-normal text-black text-center self-center mb-2">
            Explore the Merchandise.
          </p>
          {/* image cards  */}
          <div className="flex flex-wrap justify-between  py-10">
            <ImageCard imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60" />
            <ImageCard imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60" />
            <ImageCard imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="grid grid-col-1 md:grid-cols-4 gap-6">
            {/* Left column (3 cards + button) */}
            <div className="flex flex-col gap-4 md:col-span-1">
              {/* card 1  */}
              <CustomizationCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                img4="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                
                title="Gaming Gear"
                subtitle="Brand"

              />
              {/* card 2  */}
              <CustomizationCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                img4="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                
                title="Gaming Gear"
                subtitle="Brand"

              />
              {/* card 3  */}
              <CustomizationCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                img4="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                
                title="Gaming Gear"
                subtitle="Brand"

              />
              {/* <div className="bg-purple-500 h-40 rounded-xl"></div>
              <div className="bg-purple-500 h-40 rounded-xl"></div>
              <div className="bg-purple-500 h-40 rounded-xl"></div> */}

              <a href='#' className="text-center mt-2 bg-[#9147FF] text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300">
                See More
              </a>
            </div>

            {/* Right column (slider + image card) */}
            <div className="md:col-span-3 grid grid-rows-2 gap-2">
              {/* Row 1 - Slider */}
              <div className="w-full max-w-full overflow-hidden">
                <Slider />
              </div>

              {/* Row 2 - Large image card */}
              <div className="bg-[url('./assets/backgrounds/art-bg.png')] bg-cover bg-no-repeat rounded-xl md:max-h-[514px] max-h-[314px] h-auto max-w-[914px] w-auto flex flex-col justify-between p-6">
                <h1 className="text-2xl font-bold text-white text-left">Your Heading Here</h1>
                <a
                  className="border border-white rounded-full px-6 py-2 text-white font-medium hover:bg-white hover:text-purple-700 transition self-end"
                  href="#"
                >
                  See More
                </a>
              </div>
            </div>
          </div>


        </section>
      </main>
      {/* Products  */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <section className="flex flex-col items-center gap-2  max-w-7xl w-full">
          <h2 className="w-[308px] h-[36px] text-[36px] leading-[36px] font-normal text-[#24282B] md:self-start text-center md:text-left self-center mb-4">
            Merch Collection
          </h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#706F6F] md:self-start text-center md:text-left self-center mb-4">
            Explore the Merchandise.
          </p>


          {/* cards */}
          {/* ✅ Grid Section - Starts Here 👇 */}
          <div className="w-full rounded-xl relative  p-6 h-full ">
            {/* Background Layer */}
            {/* <div className="absolute top-0 -right-4 md:-right-6 bg-repeat-y lg:-right-14 w-screen h-full opacity-60 bg-center bg-[url('./assets/backgrounds/cracking.png')]"></div> */}


            <section
              id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 justify-between"
            >
              {/* cards components */}
              {/* card 1  */}
              <ProductCard
                profileImg={Emily}
                name={"Emily Chen"}
                productImg={EmilyProduct}
                price={100}

              />
              {/* card 2  */}
              <ProductCard
                profileImg={Richard}
                name={"Richard Ong"}
                productImg={RichardProduct}
                price={100}

              />
              {/* card 3  */}
              <ProductCard
                profileImg={Alex}
                name={"Alex Kim"}
                productImg={AlexProduct}
                price={100}

              />
              {/* card 3  */}
              <ProductCard
                profileImg={Mia}
                name={"Mia Johnson"}
                productImg={MiaProduct}
                price={100}

              />

            </section>
          </div>
          {/* ✅ Grid Section - Ends Here */}
        </section>
      </main>
      {/* Rankings main container */}
      <main className="bg-[url('./assets/backgrounds/ranking-bg.png')] bg-center bg-cover flex flex-col items-center gap-2 py-2 px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col items-center gap-2 max-w-7xl w-full relative">
          <h1 className="text-white font-normal text-[40px] uppercase">
            Top 3 streamer
          </h1>
          <p className="text-white font-normal text-[20px]">
            Check out the top 3 streamers dominating the scene right now.
          </p>

          <div className="py-20 ">
            {/* Rankings Row */}
            <div className="flex justify-evenly items-end gap-20 mt-10 h-[400px]">

              {/* Second Place (Left, Middle Height) */}
              <div className="flex flex-col items-center w-[220px] mb-12 absolute left-8">
                <img
                  src={Medal2}
                  alt="2nd"
                  className="w-[100px] h-[100px] object-contain mb-10"
                />
                <img
                  src={Rank2}
                  alt="Second"
                  className="w-22 h-22 z-10 rounded-full object-cover -mt-8"
                />
                <div className="w-[286px] h-[221px] bg-[url('./assets/backgrounds/rank-box.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center text-black font-bold text-sm -mt-6 p-2">
                  <p className="font-normal text-[20px] leading-[100%]">
                    USERNAME:000</p>
                  <p className="font-normal text-[20px] leading-[100%]">RANK: 2ND</p>
                </div>
              </div>

              {/* First Place (Center, Highest) */}
              <div className="flex flex-col items-center w-[220px] mb-20 absolute">
                <img
                  src={Medal1}
                  alt="1st"
                  className="w-auto h-[120px] object-cover mb-13"
                />
                <img
                  src={Rank1}
                  alt="First"
                  className="w-22 h-22 z-10 rounded-full -mt-10 object-cover"
                />

                <div className="w-[286px] h-[221px] bg-[url('./assets/backgrounds/rank-box.png')] bg-cover bg-no-repeat flex flex-col justify-center items-center text-black font-bold text-sm -mt-6 p-2">
                  <p className="font-normal text-[20px] leading-[100%]">USERNAME:000</p>
                  <p className="font-normal text-[20px] leading-[100%]">RANK: 1ST</p>
                </div>
              </div>

              {/* Third Place (Right, Lowest) */}
              <div className="flex flex-col items-center w-[220px] mb-4 absolute right-8">
                <img
                  src={Medal3}
                  alt="3rd"
                  className="w-[100px] h-[100px] object-cover mb-8"
                />
                <img
                  src={Rank3}
                  alt="Third"
                  className="w-22 z-10 h-22 rounded-full -mt-6 object-cover"
                />
                <div className="w-[286px] h-[221px] bg-[url('./assets/backgrounds/rank-box.png')] bg-cover bg-no-repeat flex flex-col justify-center gap-2 items-center text-black -mt-6 p-2">
                  <p className="font-normal text-[20px] leading-[100%]">USERNAME:000</p>
                  <p className="font-normal text-[20px] leading-[100%]">RANK: 3RD</p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>
      {/* why choose section  */}
      <section className="flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* top Section */}
        <div className="flex justify-between items-center w-full pt-16 pb-10 relative">
          <h1 className="flex flex-col leading-none">
            <span className="text-[36px] font-semibold text-black leading-none">Why choose</span>
            <span className="text-[#24282B] font-normal text-[70px] leading-[100%]">
              MADIC
            </span>

          </h1>
          {/* Unfilled Star top right */}
          <img src={Unfilled} alt="" className="w-[160px] md:w-[300px] h-[160px] md:h-[300px] absolute right-0 top-40" />
        </div>

        {/* cards  */}
        <div className="flex flex-wrap justify-center md:justify-start gap-5 py-10">
          {/* card 1 */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              {/* Empty placeholder */}
              <img src={Collection} alt="icon" />
            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              <img src={Pencil} alt="icon" />

            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              <img src={Heart} alt="icon" />

            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
        </div>
        {/* cards ended */}


        {/* cards second */}
        <div className="flex flex-wrap justify-center md:justify-end gap-5 py-10">
          {/* card 1 */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              <img src={FullTime} alt="icon" />

            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              <img src={Secure} alt="icon" />

            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col items-start text-left w-[260px] h-[220px]">
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-4  flex items-center justify-center">
              <img src={Dollar} alt="icon" />

            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-gray-900 leading-snug">
              DIVERSE GAMING <br /> ART COLLECTIONS
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-xs leading-relaxed">
              Our platform features a wide variety of Gaming art collections from
              talented creators around the world.
            </p>
          </div>
        </div>
        {/* cards ended */}
        {/* Filled Star (bottom-left) */}
        <div className="items-center align w-full relative">
          <img src={Filled} alt="" className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] absolute left-0 -bottom-15 md:bottom-20" />
        </div>


      </section>
      {/* blog and news section  */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* heading/button container  */}
        <div className="flex justify-between items-center py-8">
          {/* Heading */}
          <h1 className="text-[36px] font-semibold text-black uppercase">Blogs & News</h1>

          {/* Button */}
          <a
            href="#"
            title="View All"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#9147FF] px-8 py-3 font-medium text-white transition-all duration-200"
          >
            View All
            <FiArrowRight className="text-lg" />
          </a>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Column */}
          <div className="flex flex-col gap-6 ">
            {/* Big Image Placeholder */}
            <div className="w-[600px] max-w-full h-[788px] max-h-full  bg-gray-200 rounded-xl flex items-center justify-center">
              <img src={Blog1} alt="Blog 1" className="w-full h-full object-cover rounded-xl" />

            </div>

            {/* Text Below Image */}
            <div>
              <h3 className="font-normal text-[30px] leading-[100%] text-[#24282B]">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT,
              </h3>

              <p className="text-[#706F6F] font-semibold text-[20px] leading-[30px] mt-2">
                Lily Chan
              </p>

            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-evenly gap-6 px-4">
            {/* Top Text */}
            <div>
              <h3 className="font-normal text-[30px] leading-[100%] text-[#24282B]">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT,
              </h3>

            </div>
            <div>
              <p className="text-[#706F6F] font-semibold text-[20px] leading-[30px] mt-2">
                Mia Johnson
              </p>

            </div>
            {/* Horizontal Line  */}
            <hr className="border-t-2 border-gray-500/10 w-[86%] my-2 text-center self-start" />

            {/* Middle Text */}
            <div>
              <h3 className="font-normal text-[30px] leading-[100%] text-[#24282B]">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT,
              </h3>

              {/* <p className="text-gray-600 mt-2">Richard Ong</p> */}
            </div>
            <div>
              <p className="text-[#706F6F] font-semibold text-[20px] leading-[30px] mt-2">
                Richard Ong
              </p>

            </div>
            {/* Right Image Placeholder */}
            <div className="w-full max-w-full h-[512px] flex-col rounded-xl flex items-center justify-start space-y-4">
              <img src={Blog2} alt="Blog 1" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </section>
      </main>
      {/* FAQs section  */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" h-screen">
          <div className="w-full max-w-2xl px-2 mx-auto py-12 dark:bg-transparent dark:text-gray-200">
            <h3 className="mt-3 text-xl font-bold text-gray-800 md:text-2xl text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid max-w-5xl mx-auto mt-6 space-y-4 divide-y divide-gray-200 dark:divide-gray-700">
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150 rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Can I resell digital design that I have bought on MADIC?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150   rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Is TechSupportPro free to use?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150   rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Is TechSupportPro free to use?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150   rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Is TechSupportPro free to use?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150   rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Is TechSupportPro free to use?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>
              <details className="group py-4">
                <summary className="flex items-center gap-4 justify-left font-medium list-none cursor-pointer">
                  <span className="transition duration-150   rotate-45 group-open:rotate-180">
                    <img src={FAQStar} alt="star" className='w-4 h-4' />
                  </span>
                  <span className="text-[#24282B] font-semibold text-[20px] leading-[100%]">
                    Is TechSupportPro free to use?
                  </span>

                </summary>
                <p className="mt-3 text-[#706F6F] font-normal text-[14px] leading-[20px] group-open:animate-fadeIn">
                  Yes! You can access our basic support services for free. However, we
                  also offer premium plans with additional features.
                </p>

              </details>


            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default App