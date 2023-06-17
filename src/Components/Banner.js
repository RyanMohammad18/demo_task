import React from "react";
import { BannerImg, Play } from "./SVGcomponents";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <div className="w-full lg:w-[781px]">
            <h1 className="text-[126px] leading-[144px] mb-[42px]">
              Lore <span className="font-extrabold">ipsum. </span>Dolor{" "}
              <span className="font-extrabold">sit.</span>
            </h1>
            <h6 className="w-full lg:w-[658px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
              omnis iste natus error.
            </h6>
            <div className="mt-12">
              <div className="hidden md:flex items-center space-x-6">
                <div className="border-2 py-[14px] px-[33px] rounded-[10px] font-bold text-[18px]">
                  <a href="">Viverra orci sagittis</a>
                </div>
                <div className="flex justify-center items-center gap-3 bg-primary py-[14px] px-[33px] rounded-[10px] font-bold text-[18px]">
                  <Play />
                  <a href="" className="text-white">
                    Get a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BannerImg />
        </div>
      </div>
    </div>
  );
};

export default Banner;
