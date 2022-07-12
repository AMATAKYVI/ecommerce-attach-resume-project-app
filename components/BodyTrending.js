import React from 'react';
import { dummyData } from '../dummyData';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlices';
import { truncateString } from '../lib/helperFunction';

function BodyTrending() {
  const state = useSelector((state) => state.cart.item.cartItems);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };
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
              return (
                <div
                  key={item.id}
                  className=" border-black rounded-lg w-[300px]  bg-white px-5 pb-2 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <div className="flex justify-center">
                      {' '}
                      <img
                        src={item.img}
                        alt=""
                        className=" h-[300px] object-contain  rounded-t-lg card-image-mask flex"
                      />
                    </div>

                    <span className="absolute font-semibold right-5 bottom-0 text-xl bg-amber-200 px-4 py-4 rounded-full">
                      ${item.price}
                    </span>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-lg font-bold tracking-wide ">
                      {item.name}
                    </h1>
                    <p>{truncateString(item.description, 60)}...</p>
                    <div
                      className="w-full text-lg tracking-wide cursor-pointer bg-amber-400 py-2 text-center rounded-lg mt-3"
                      onClick={() => handleAddItem(item)}
                    >
                      <button className=" ">Add to bag</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BodyTrending;
