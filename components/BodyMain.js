import React, { useRef } from 'react';
import BodyCollections from './BodyCollections';
import BodyHero from './BodyHero';
import BodyHightlight from './BodyHightlight';
import BodyTrending from './BodyTrending';

function BodyMain() {
  return (
    <div className=" px-10">
      {/* BodyMain Section */}
      <BodyHero />
      {/* Trending Section*/}
      <BodyTrending />
      {/* Collections Section*/}
      <BodyCollections />
      {/* Highlights Section */}
      <BodyHightlight />
    </div>
  );
}

export default BodyMain;
