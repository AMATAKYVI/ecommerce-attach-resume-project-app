import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardItem from './CardItem';
import { Pagination, Autoplay, Navigation } from 'swiper';

function Hero() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className=" px-10">
      {/* Hero Section */}
      <div className="px-10 h-[300px] flex flex-col justify-center w-full text-center py-10">
        <h1 className="text-6xl tracking-wide font-bold mb-5">Best Product</h1>
        <p className="text-xl mb-2 tracking-wide w-[50%] mx-auto text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit
          laudantium amet voluptatibus natus vel ducimus beatae consequatur,
          labore atque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum, neque!
        </p>
        <div className="mt-4 mx-auto  py-2 px-5 w-fit rounded-md bg-amber-400 text-lg font-semibold tracking-wide">
          <button>Shop Now</button>
        </div>
      </div>
      <div></div>
      {/* Trending Section*/}
      <div className="bg-[rgb(243,244,246)] px-5 py-5">
        <div>
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-wide ">
              Trending Product
            </h1>
            <p className="text-xl text-blue-600 cursor-pointer pr-10 hover:text-blue-400 transition-all duration-200">
              Shop More Trending
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10 items-center justify-center w-full mt-5">
            <CardItem
              imageURL={
                'https://images-na.ssl-images-amazon.com/images/I/41oKX3NFrCL._SX160_QL100_AC_SCLZZZZZZZ_.jpg'
              }
            />
            <CardItem
              imageURL={
                'https://m.media-amazon.com/images/I/31hSvjeHCZL._AC_SY230_.jpg'
              }
            />
            <CardItem
              imageURL={
                'https://m.media-amazon.com/images/I/71i9X6F3raL._AC_UL320_.jpg'
              }
            />
            <CardItem
              imageURL={
                'https://m.media-amazon.com/images/I/71nV3Qr2RHL._AC_SX421_SY746_.jpg'
              }
            />
          </div>
        </div>
      </div>
      {/* Collections Section*/}
      <div className=" px-5 py-6">
        {' '}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">Shop by Category</h1>
          <div className="grid grid-cols-2 items-center justify-center mt-5">
            <div className="relative">
              <div className="px-10">
                <img
                  src="https://images.unsplash.com/photo-1622445270936-5dcb604970e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="w-full object-cover h-[740px] rounded-lg hue-rotate-15	brightness-75		"
                  alt=""
                />
              </div>
              <div className="absolute bottom-10 left-20 text-white">
                <p className="text-2xl font-bold">New Arrivals</p>
                <p className="text-lg">Shop now</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="relative">
                <div className="px-10">
                  <img
                    src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="w-full object-cover h-[350px] rounded-lg hue-rotate-15	brightness-75		"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-10 left-20 text-white">
                  <p className="text-2xl font-bold">Accessories</p>
                  <p className="text-lg">Shop now</p>
                </div>
              </div>
              <div className="relative">
                <div className="px-10">
                  <img
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="w-full object-cover h-[350px] rounded-lg hue-rotate-15	brightness-75		"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-10 left-20 text-white">
                  <p className="text-2xl font-bold">Electronics</p>
                  <p className="text-lg">Shop now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Highlights Section */}
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
        <div className="absolute bottom-10 right-20 flex items-center gap-5">
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
    </div>
  );
}

export default Hero;
