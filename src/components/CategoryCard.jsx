import React, { useRef } from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function VideoCard({ img1, img2, img3, title, subtitle, video }) {
   const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const hoverTimer = useRef(null);

  const handleMouseEnter = (src) => {
    hoverTimer.current = setTimeout(() => {
      setVideoSrc(src);
      setIsOpen(true);
    }, 500); // open after 2 seconds hover
  };

  // const handleMouseLeave = () => {
  //   clearTimeout(hoverTimer.current); // cancel if mouse leaves early
  // };

  

  return (
    <>
      {/* Card */}
      <div
        className="bg-white z-1 py-2 px-3 lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
        
      >
        <a href="#"
        >
          {/* card img */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square"
          onMouseEnter={() => handleMouseEnter(video)}        
        >
            {/* 1st image: spans 2 rows */}
            <img
              src={img1}
              alt={title}
              className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
            />
            {/* 2nd image */}
            <img
              src={img2}
              alt={title}
              className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
            />
            {/* 3rd image */}
            <img
              src={img3}
              alt={title}
              className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
            />
          </div>

          {/* Card content */}
          <div className="w-full px-1 py-2">
            <p className="text-lg font-bold text-black truncate block capitalize">
              {title}
            </p>
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {subtitle}
            </span>
          </div>
        </a>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%] bg-black rounded overflow-hidden shadow-xl"
          onMouseLeave={() => setIsOpen(false)}>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 z-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Video */}
            <video
            className="w-full h-auto" controls autoPlay muted>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
