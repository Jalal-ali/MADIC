import React from 'react'

const ProductCard = ({name, profileImg, productImg, price}) => {
    return (
        <>

            <div className="bg-white w-full md:w-[280px] h-[400px] flex flex-col overflow-hidden">
                {/* Image */}
                <a href="#" className="block h-[260px] overflow-hidden rounded-4xl">
                    <img
                        className="w-full h-full object-cover rounded-t-lg"
                        src={productImg}
                        alt="product image"
                    />
                </a>

                {/* Content Area - Remaining 180px height */}
                <div className="px-5 flex-1 flex flex-col justify-between pt-5 gap-4">
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-full mr-3 object-cover object-center"
                            src={profileImg}
                            alt={name}
                        />
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium leading-none text-[#706F6F] text-[14px]"
                            >
                                {name}
                            </a>
                        </div>
                    </div>



                    {/* Price + Button - Sticks to bottom */}
                    <div className="flex items-center justify-between ">
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-[#706F6F]">Price</span>
                            <span className="text-[20px] font-bold text-[#24282B]">
                                {price}$
                            </span>
                        </div>

                        <a
                            href="#"
                            className="text-[#24282B] border-[#706F6F] border bg-white hover:bg-[#9147FF] focus:ring-2 focus:ring-[#9147FF] font-medium rounded-lg text-sm px-5 py-2.5 "
                        >
                            PAY
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductCard