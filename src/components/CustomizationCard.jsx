import React from 'react'

const CustomizationCard = ({ img1, img2, img3, img4, title }) => {
    return (
        <>
            {/* Card */}
            <div
                className="bg-white z-1 py-2 px-3 lg:w-full w-auto shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"

            >
                <a href="#"
                >
                    {/* Card content */}
                    <div className="w-full px-1 pb-4">
                        <p className="text-lg font-bold text-black truncate block capitalize">
                            {title}
                        </p>
                    </div>

                    {/* card img */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full aspect-[3/2]">
                        {/* 1st column: one image spanning 2 rows */}
                        <img
                            src={img1}
                            alt={title}
                            className="object-cover rounded-xl w-full h-full row-span-2"
                        />

                        {/* 2nd column, 1st row */}
                        <img
                            src={img2}
                            alt={title}
                            className="object-cover rounded-xl w-full h-full"
                        />

                        {/* 3rd column, 1st row */}
                        <img
                            src={img3}
                            alt={title}
                            className="object-cover rounded-xl w-full h-full"
                        />

                        {/* 2nd row spanning col 2 and col 3 */}
                        <img
                            src={img4}
                            alt={title}
                            className="object-cover rounded-xl w-full h-full col-span-2"
                        />
                    </div>                    
                </a>
            </div>

        </>
    )
}

export default CustomizationCard