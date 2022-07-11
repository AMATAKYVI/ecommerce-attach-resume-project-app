import { useRouter } from 'next/router';
import React from 'react';
function Header() {
  const router = useRouter();
  return (
    <div className=" px-5 bg-[rgb(17,24,40)]">
      <div className="flex items-center text-white justify-between ">
        <div
          className="text-lg flex items-center cursor-pointer"
          onClick={() => {
            router.push('/');
          }}
        >
          <img
            src="logowithrmbg.png"
            className="w-[70px] h-[70px] object-contain"
            alt=""
          />
          <p>PG</p>
        </div>
        <div className="w-[56%]">
          <div className="relative flex items-center ">
            <input
              type="text"
              name=""
              className="w-[100%] outline-none tracking-wide     text-black py-2 rounded-sm px-5"
              placeholder="Search..."
              id=""
            />
            <div className="absolute right-0 top-0 bg-amber-500 py-2 px-2 rounded-r-sm text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center  ">
          <div className="cursor-pointer hover:text-gray-300 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div className="text-sm text-gray-300">
              <p>US</p>
              <p></p>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                router.push('/cart');
              }}
              className="cursor-pointer hover:text-gray-300 transition-all duration-300 text-white flex flex-col items-center font-semibold "
            >
              <div className="relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-1 bg-amber-400 rounded-full text-sm px-1  font-bold text-black">
                  0
                </span>
              </div>

              <p className="text-sm text-gray-300">Cart</p>
            </div>
          </div>
          <button className="px-10 rounded-lg font-semibold tracking-wide py-2 bg-[rgb(76,85,100)]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
