import React from 'react'
import HeroImg from './assets/banner/MADIC-hero.png'
import Cracking from './assets/backgrounds/cracking.png'
import CategoryCard from './components/CategoryCard.jsx'
import ImageCard from './components/ImageCard.jsx'
import { FaTwitch } from "react-icons/fa";
import Slider from './components/Slider.jsx'

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
            className="w-full rounded-xl bg-cover bg-center  py-12 bg-[url('./assets/categories/twitch-bg.png')]"
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
          <div className="w-full rounded-xl relative  p-6 h-full ">
            {/* Background Layer */}
            <div className="absolute top-0 -right-4 md:-right-6 bg-repeat-y lg:-right-14 w-screen h-full opacity-60 bg-center bg-[url('./assets/backgrounds/cracking.png')]"></div>


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
              />
              {/* card 2  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 3  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 4  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 5  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 6  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 7  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 8  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
            </section>
          </div>
          {/* ✅ Grid Section - Ends Here */}
          <a
            href="#"
            title=""
            className="whitespace-nowrap rounded-full bg-[#9147FF] px-4 md:px-10 py-3 font-medium text-white transition-all duration-200"
          >
            Explore Categories
          </a>
        </section>
        {/* Hot Off the Shelf  */}
        <section className="items-center gap-2 py-2 max-w-7xl w-full mt-10  ">
          <h2 className="text-3xl text-center self-center font-bold mb-4">Hot Off the Shelf</h2>
          {/* image cards  */}
          <div className="grid grid-cols-4 gap-6">
            {/* Left column (3 cards + button) */}
            <div className="flex flex-col gap-4 col-span-1">
              {/* card 1  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 2  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* card 3  */}
              <CategoryCard
                img1="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
                img3="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=60"
                title="Gaming Gear"
                subtitle="Brand"
              />
              {/* <div className="bg-purple-500 h-40 rounded-xl"></div>
              <div className="bg-purple-500 h-40 rounded-xl"></div>
              <div className="bg-purple-500 h-40 rounded-xl"></div> */}

              <button className="mt-2 bg-purple-700 text-white py-2 rounded-lg">
                See More
              </button>
            </div>

            {/* Right column (slider + image card) */}
            <div className="col-span-3 grid grid-rows-2 gap-2">
              {/* Row 1 - Slider */}
              <div className="w-full max-w-full overflow-hidden">
                <Slider />
              </div>

              {/* Row 2 - Large image card */}
              <div className="bg-[url('./assets/backgrounds/art-bg.png')] bg-cover bg-no-repeat rounded-xl max-h-[514px] h-auto max-w-[914px] w-auto flex flex-col justify-between p-6">
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
    </>
  )
}

export default App