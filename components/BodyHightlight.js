import React, { useRef } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function BodyHightlight() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="relative pb-10 mb-5 px-5 py-6 bg-[rgb(243,244,246)]">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold tracking-wide ">
          Highlight Products
        </h1>
        <p className="text-xl text-blue-600 cursor-pointer pr-10 hover:text-blue-400 transition-all duration-200">
          All Highlight Products
        </p>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/911VnAiWhhS._AC_UL320_.jpg"
            className="h-[300px] rounded-lg object-cover"
            alt=""
          />
          <div className="mt-3 tracking-wide">
            <p className="text-xl font-bold mb-2">Product Name Here</p>
            <p>Product Description Here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/91zKgnhp8UL._AC_UL320_.jpg"
            className="h-[300px] rounded-lg object-cover"
            alt=""
          />
          <div className="mt-3 tracking-wide">
            <p className="text-xl font-bold mb-2">Product Name Here</p>
            <p>Product Description Here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/71e2PifecVL._AC_UL320_.jpg"
            className="h-[300px] rounded-lg object-cover"
            alt=""
          />
          <div className="mt-3 tracking-wide">
            <p className="text-xl font-bold mb-2">Product Name Here</p>
            <p>Product Description Here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51KgyjQM9UL._AC_SX184_.jpg"
            className="h-[300px] rounded-lg object-cover"
            alt=""
          />
          <div className="mt-3 tracking-wide">
            <p className="text-xl font-bold mb-2">Product Name Here</p>
            <p>Product Description Here...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51fy7EmiT+L._AC_SX184_.jpg"
            className="h-[300px] rounded-lg object-cover"
            alt=""
          />
          <div className="mt-3 tracking-wide">
            <p className="text-xl font-bold mb-2">Product Name Here</p>
            <p>Product Description Here...</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-5 right-20 flex items-center gap-5">
        <div ref={navigationPrevRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div ref={navigationNextRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BodyHightlight;
