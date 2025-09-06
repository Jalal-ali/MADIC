// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import Slider1 from "../assets/backgrounds/slider-1.png";
// import Slider2 from "../assets/backgrounds/slider-2.png";

// const Slider = () => {
//     const slides = [Slider1, Slider2];

//     return (
//         <div className="w-full max-w-full space-y-4">
//             <Swiper
//                 modules={[Scrollbar, Autoplay]}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                 }}
//                 scrollbar={{
//                     el: '.custom-scrollbar',
//                     draggable: true,
//                     hide: false,
//                     snapOnRelease: false,
//                 }}
//                 className="relative"  // Important for scrollbar positioning
//             >
//                 {slides.map((src, index) => (
//                     <SwiperSlide key={index}>
//                         <div
//                             className="w-full h-[600px] max-h-[600px] rounded-md flex items-center relative overflow-hidden"
//                             style={{
//                                 backgroundImage: `url(${src})`,
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                             }}
//                         >
//                             {/* Dark transparent overlay */}
//                             <div className="absolute inset-0 bg-black/60 z-0 rounded-md" />
//                             <h2 className="text-3xl md:text-5xl font-bold text-white pl-10 relative z-10">
//                                 Slide Heading {index + 1}
//                             </h2>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Scrollbar Container - Must match the 'el' in scrollbar config */}
//             <div className="custom-scrollbar h-1.5 bg-gray-200 rounded-full mt-4"></div>

//             {/* Optional: Add these styles if you need more customization */}
//             <style jsx global>{`
//                 .custom-scrollbar {
//                     position: relative;
//                     background: rgba(0, 0, 0, 0.1);
//                 }
//                 .swiper-scrollbar-drag {
//                     background: rgba(0, 0, 0, 0.5) !important;
//                     border-radius: 10px;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Slider;

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Slider1 from "../assets/backgrounds/slider-1.png";
import Slider2 from "../assets/backgrounds/slider-2.png";

const Slider = () => {
    const slides = [Slider1, Slider2];
    const swiperRef = useRef(null);
    const scrollbarRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current || !scrollbarRef.current) return;

        const swiper = swiperRef.current.swiper;

        // Attach external scrollbar
        swiper.params.scrollbar.el = scrollbarRef.current;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();

        const updateScrollbar = () => {
            swiper.scrollbar.updateSize();
            swiper.scrollbar.setTranslate();
        };

        swiper.on('scroll', updateScrollbar);
        swiper.on('slideChange', updateScrollbar);
        swiper.on('resize', updateScrollbar);

        return () => {
            swiper.off('scroll', updateScrollbar);
            swiper.off('slideChange', updateScrollbar);
            swiper.off('resize', updateScrollbar);
        };
    }, []);

    return (
        <div className="w-full max-w-full space-y-4">
            {/* Slider */}
            <div className="relative h-[23rem] md:h-[600px] w-full">
                <Swiper
                    ref={swiperRef}
                    modules={[Scrollbar, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    scrollbar={{
                        draggable: true,
                        hide: false,
                        snapOnRelease: false,
                        dragSize: 'auto',
                    }}
                    className="h-full w-full"
                >
                    {slides.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full h-[23rem] md:h-[600px] rounded-xl flex items-center relative overflow-hidden"
                                style={{
                                    backgroundImage: `url(${src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/50 z-0 rounded-xl" />
                                <h2 className="text-3xl font-bold text-white pl-10 relative z-10">
                                    Slide {index + 1}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Only external scrollbar */}
            <div
                ref={scrollbarRef}
                className="swiper-scrollbar !h-2 !bg-gray-200 !rounded-full !mt-4 !relative"
            >
                <div className="swiper-scrollbar-drag !bg-[#9147FF] !rounded-full !h-full !absolute !left-0 !top-0" />
            </div>

            {/* Styling */}
            <style jsx global>{`
                /* Hide any internal scrollbar generated by Swiper */
                .swiper .swiper-scrollbar {
                    display: none !important;
                }

                /* External scrollbar styling */
                .swiper-scrollbar {
                    background: rgba(0, 0, 0, 0.1) !important;
                    height: 8px !important;
                }
                .swiper-scrollbar-drag {
                    background: #3b82f6 !important;
                    cursor: grab !important;
                }
                .swiper-scrollbar-drag:active {
                    cursor: grabbing !important;
                }
            `}</style>
        </div>
    );
};

export default Slider;
