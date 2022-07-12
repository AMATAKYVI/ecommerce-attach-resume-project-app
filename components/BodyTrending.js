import React from 'react';
import { dummyData } from '../dummyData';

function CardItem({ imageURL, item }) {
  return (
    <div className=" border-black rounded-lg w-[300px]  bg-white px-5 pb-2 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 cursor-pointer">
      <div className="relative">
        <div className="flex justify-center">
          {' '}
          <img
            src={imageURL}
            alt=""
            className=" h-[300px] object-contain  rounded-t-lg card-image-mask flex"
          />
        </div>

        <span className="absolute font-semibold right-5 bottom-0 text-xl bg-amber-200 px-4 py-4 rounded-full">
          ${item.price}
        </span>
      </div>
      <div className="mt-2">
        <h1 className="text-lg font-bold tracking-wide ">{item.name}</h1>
        <p>{item.description}</p>
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

        <div className="grid grid-cols-5 gap-10 items-center justify-center w-full mt-5">
          {dummyData
            .filter((item) => item.trending)
            .map((item) => {
              return <CardItem key={item.id} imageURL={item.img} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default BodyTrending;
