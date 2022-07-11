import React from 'react';

//Was created in 07/11/2022 Monday

const CartItem = ({ item }) => {
  return (
    <div className="">
      <div>img</div>
      <div>
        <div>
          <h1>{item.name}</h1>
          <div>
            <p>{item.description}</p>
            <p>{item.size}</p>
          </div>
          <p>${item.price}</p>
        </div>
        <div>{item.inStock ? 'true' : 'false'}</div>
      </div>
      <div>Quanity 1 - +</div>
      <div>x remove</div>
    </div>
  );
};
const dummyData = [
  {
    id: 1,
    name: 'Basic Tee',
    description: 'Sienna',
    size: 'Large',
    price: 32,
    inStock: true,
  },
  {
    id: 2,
    name: 'Basic Tee',
    description: 'Sienna',
    size: 'Large',
    price: 32,
    inStock: true,
  },
  {
    id: 3,
    name: 'Basic Tee',
    description: 'Sienna',
    size: 'Large',
    price: 32,
    inStock: true,
  },
];
function CartContainer() {
  return (
    <div className="flex gap-10">
      <div className="flex-1 px-10 py-10">
        <div>Total</div>
        <div>
          {dummyData.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="flex-[0.6] px-10 py-10">div2</div>
    </div>
  );
}

export default CartContainer;
