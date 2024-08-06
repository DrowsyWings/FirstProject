import React from "react";
import {Link} from "react-router-dom"
import callIcon from '../../assets/callIcon2.svg'
import dots from '../../assets/dot.svg'
import distbottle from '../../assets/Distriburtbottle.svg'
import bottle from '../../assets/distBottles.svg'
// import { banner } from "../../assets/banner.png";

function ComponentD1({ handleScrollToForm }) {
  return (
    <div className="w-full flex flex-col-reverse text-zinc-950 p-4 sm:p-16 md:flex-row md:justify-between relative">
      <div className="flex flex-col justify-start  w-full md:px-10">
        <h1 className="w-full text-[40px] sm:text-6xl md:text-6xl  xl:text-8xl font-extrabold text-zinc-950 mt-10 lg:text-start text-center" >
          Distribute
          <br/>
          FreeWater
        </h1>
        <p className="md:w-full lg:w-[600px] xl:w-[800px] text-center lg:text-start sm:w-full py-4 sm:py-6 md:py-6 xl:py-10 text-[10px] sm:text-[14px] md:text-[16px] lg:text-xl">
          Fill up your stores your parties, events , business gatherings
          <br className="hidden xl:block" />
          with FreeWater.
        </p>
        <div className="flex lg:flex-col justify-center items-center lg:items-start gap-1">
          <ul>
            <li>
              <div className="flex justify-start py-3 md:py-4 xl:py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] sm:text-[12px] md:text-xl">Increase Foot Traffic</p>
              </div>
            </li>
            <li>
              <div className="flex justify-start py-3 md:py-4 xl:py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] sm:text-[12px] md:text-xl">Improve Sales</p>
              </div>
            </li>
            <li>
              <div className="flex  justify-start py-3 md:py-4 xl:py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] sm:text-[12px] md:text-xl">Gain Amazing PR</p>
              </div>
            </li>
          </ul>
          <Link to="/contactus">
              <button className="bg-transparent hover:bg-gray-700 rounded-full w-[85.3px] sm:w-auto mt-[16px] hidden lg:block cursor-pointer z-20">
                <img src={callIcon} className="w-[120px] lg:w-[140px] xl:w-auto"></img>
              </button>
          </Link>
          <div className="lg:hidden">
            <img src={bottle} className="sm:w-[330px]"></img>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden w-[50%] lg:flex md:justify-end z-0">
          <img src={distbottle} className="w-[62%]"></img>
        </div>
      </div>
    </div>
  );
}

export default ComponentD1;

