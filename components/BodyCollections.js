import React from 'react';

function BodyCollections() {
  return (
    <div className=" px-5 py-6">
      {' '}
      <div>
        <h1 className="text-3xl font-bold tracking-wide">Shop by Category</h1>
        <div className="grid grid-cols-2 items-center justify-center mt-5">
          <div className="relative hover:shadow-md hover:shadow-gray-300 cursor-pointer transition-all duration-300 rounded-lg">
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
          <div className="flex flex-col gap-10 ">
            <div className="relative hover:shadow-md hover:shadow-gray-300 cursor-pointer transition-all duration-300 rounded-lg">
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
            <div className="relative hover:shadow-md hover:shadow-gray-300 cursor-pointer transition-all duration-300 rounded-lg">
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
  );
}

export default BodyCollections;
