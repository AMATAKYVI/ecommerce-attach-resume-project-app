import React from 'react';
import {useRouter} from 'next/router';
function BodyHero() {
  const router = useRouter();
  return (
    <div className="px-10 h-[300px] flex flex-col justify-center w-full text-center py-10">
      <h1 className="text-6xl tracking-wide font-bold mb-5">Best Product</h1>
      <p className="text-xl mb-2 tracking-wide w-[50%] mx-auto text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit
        laudantium amet voluptatibus natus vel ducimus beatae consequatur,
        labore atque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Earum, neque!
      </p>
      <div className="mt-4 mx-auto  py-2 px-5 w-fit rounded-md bg-amber-400 text-lg font-semibold tracking-wide" onClick={()=>{router.push('/shopnow')}}>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default BodyHero;
