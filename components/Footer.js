import { Divider } from 'antd';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div>
      {' '}
      <div className="grid grid-cols-6 bg-[rgb(17,24,40)] text-white py-10 px-10">
        <div className="col-span-2">
          <div>
            <img src="logowithbg.png" className="w-[100px] rounded-lg" alt="" />
          </div>
          <p className="text-lg px-2 py-2 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            corporis nesciunt ea provident nihil sit!
          </p>
          <div className="flex px-2 gap-5">
            <span className="cursor-pointer">
              <InstagramIcon />
            </span>
            <span className="cursor-pointer">
              <FacebookIcon />
            </span>
            <span className="cursor-pointer">
              <LinkedInIcon />
            </span>
            <span className="cursor-pointer">
              <TwitterIcon />
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg  font-semibold">Lorem</h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="cursor-pointer">Marketing</div>
              <div className="cursor-pointer">Commerce</div>
              <div className="cursor-pointer">Analytics</div>
              <div className="cursor-pointer">Insights</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg  font-semibold">Lorem</h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="cursor-pointer">Marketing</div>
              <div className="cursor-pointer">Commerce</div>
              <div className="cursor-pointer">Analytics</div>
              <div className="cursor-pointer">Insights</div>
              <div className="cursor-pointer">Insights</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg  font-semibold">Lorem</h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="cursor-pointer">Marketing</div>
              <div className="cursor-pointer">Commerce</div>
              <div className="cursor-pointer">Analytics</div>
              <div className="cursor-pointer">Insights</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg  font-semibold">Lorem</h2>
            <div className="flex flex-col gap-3 text-sm">
              <div className="cursor-pointer">Marketing</div>
              <div className="cursor-pointer">Commerce</div>
              <div className="cursor-pointer">Analytics</div>
              <div className="cursor-pointer">Insights</div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="bg-gray-500 pt-[0.4px]" />
      <div className="text-lg text-center pb-5 pt-3 text-white font-bold bg-[rgb(45,54,77)]">
        C 2022 Amatak, All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
