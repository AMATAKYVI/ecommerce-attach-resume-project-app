import React from 'react';

function CardItem({ imageURL }) {
  return (
    <div className=" border-black rounded-lg w-[380px] bg-white px-2 pb-2">
      <div className="relative">
        <img
          src={imageURL}
          alt=""
          className=" h-[350px] object-contain  rounded-t-lg card-image-mask"
        />
        <span className="absolute font-semibold right-5 bottom-0 text-xl bg-amber-200 px-4 py-4 rounded-full">
          $12.31
        </span>
      </div>
      <div className="mt-2">
        <h1 className="text-lg font-bold tracking-wide ">Jean Here</h1>
        <p>Description of the product...</p>
        <div className="w-full text-lg tracking-wide cursor-pointer bg-amber-400 py-2 text-center rounded-lg mt-3">
          <button className=" ">Add to bag</button>
        </div>
      </div>
    </div>
  );
}
function BodyTrending() {
  return (
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
  );
}

export default BodyTrending;
