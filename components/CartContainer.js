import { Divider } from '@chakra-ui/react';
import React from 'react';
import { dummyData } from '../dummyData';
import { truncateString } from '../lib/helperFunction';
//Was created in 07/11/2022 Monday

const CartItem = ({ item }) => {
  return (
    <div className="flex py-10 ">
      <div className="flex-1 cursor-pointer">
        <img
          src={item.img}
          alt=""
          className="w-[80%] mx-auto rounded-lg h-[80%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between ">
        <div>
          <h1 className="font-semibold cursor-pointer mb-2">{item.name}</h1>
          <div className="flex items-center gap-5 text-gray-600 text-sm mb-2">
            <p>{truncateString(item.description, 50)}...</p>/<p>{item.size}</p>
          </div>
          <p className="font-bold text-lg">${item.price}</p>
        </div>
        <div className="">
          {item.inStock ? (
            <div className="flex items-center  gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>In Stock</div>
            </div>
          ) : (
            'false'
          )}
        </div>
      </div>
      <div className="flex-1 flex gap-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>{' '}
        <div>1</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>{' '}
      </div>
    </div>
  );
};

function CartContainer() {
  return (
    <div className="flex gap-10">
      <div className="flex-1 px-10 py-10">
        <div className="text-4xl font-bold mb-10">Shopping Cart</div>
        <Divider className="bg-gray-500 pt-[0.4px] " />
        <div>
          {dummyData.map((item) => {
            return (
              <div key={item.id}>
                <Divider className="bg-gray-500 pt-[0.4px] " />
                <CartItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-[0.6] px-10 py-10">
        <div className="my-20 border py-8 px-8 flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Order Summary</h1>
          <div className="border-b py-2 flex justify-between">
            <p className="text-gray-600 text-lg">Subtotal</p>
            <p className="font-semibold">$99.99</p>
          </div>
          <div className="border-b py-2 flex justify-between">
            <p className="text-gray-600 text-lg">Shipping estimate</p>
            <p className="font-semibold">$99.99</p>
          </div>
          <div className="border-b py-2 flex justify-between">
            <p className="text-gray-600 text-lg">Tax estimate</p>
            <p className="font-semibold">$99.99</p>
          </div>
          <div className=" py-2 flex justify-between">
            <p className=" text-2xl font-semibold">Order total</p>
            <p className="font-semibold text-2xl">$99.99</p>
          </div>
          <div className="bg-amber-400 py-3 rounded-md text-center font-semibold text-xl">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
