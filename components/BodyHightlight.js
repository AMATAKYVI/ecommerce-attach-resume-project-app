import React, { useRef } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dummyData } from '../dummyData';
import { truncateString } from '../lib/helperFunction';

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
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={false}
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
        {dummyData
          .filter((item) => item.highlight)
          .map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="flex flex-col border py-5  rounded-lg hover:shadow-md  transition-all duration-300 hover:shadow-gray-300 cursor-pointer"
              >
                <div className="flex justify-center">
                  {' '}
                  <img
                    src={item.img}
                    className="h-[300px] rounded-lg object-cover"
                    alt=""
                  />
                </div>

                <div className="mt-3 tracking-wide ">
                  <p className="text-xl font-bold mb-2 text-center">
                    {item.name}
                  </p>
                  <p className="w-[50%] mx-auto">
                    {truncateString(item.description, 60)}...
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className="absolute  -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
flex items-center gap-5 z-50"
      >
        <div
          ref={navigationPrevRef}
          className="cursor-pointer hover:bg-gray-200 rounded-lg transform hover:scale-[1.01] bg-gray-500 text-white hover:text-black px-2 py-1"
        >
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
        <div
          ref={navigationNextRef}
          className="cursor-pointer hover:bg-gray-200 rounded-lg transform hover:scale-[1.01] bg-gray-500 text-white hover:text-black px-2 py-1"
        >
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
