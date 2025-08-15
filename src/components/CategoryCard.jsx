import React from 'react'

const CategoryCard = ({ img1, img2, img3, title, subtitle }) => {
  return (
    <>
     {/*  Starts Here 👇 */}
              <div className="bg-white z-1 py-2 px-3  lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl ">
                <a href="#">
                  {/* card img */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-square">
                    {/* 1st image: spans 2 rows */}
                    <img
                      src={img1}
                      alt={title}
                      className="object-cover rounded-xl col-span-1 row-span-2 w-full h-full"
                    />
                    {/* 2nd image: 2nd col, 1st row */}
                    <img
                      src={img2}
                      alt={title}
                      className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                    />
                    {/* 3rd image: 2nd col, 2nd row */}
                    <img
                      src={img3}
                      alt={title}
                      className="object-cover rounded-xl col-span-1 row-span-1 w-full h-full"
                    />
                  </div>
                  <div className="w-full px-1 py-2">
                    {/* card title  */}
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {title}
                    </p>
                    {/* card sub-title   */}
                    <span className="text-gray-400 mr-3 uppercase text-xs">{subtitle}</span>
                   
                  </div>
                </a>
              </div>
              {/* Ends Here */}
    </>
  )
}

export default CategoryCard