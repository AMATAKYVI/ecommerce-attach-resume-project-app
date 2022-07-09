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
        <span className="absolute right-5 bottom-0 text-xl bg-amber-200 px-4 py-4 rounded-full">
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

export default CardItem;
