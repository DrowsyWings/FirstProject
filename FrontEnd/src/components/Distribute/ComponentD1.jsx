import React from "react";
import {Link} from "react-router-dom"
import callIcon from '../../assets/callIcon2.svg'
import dots from '../../assets/dot.svg'
import distbottle from '../../assets/Distriburtbottle.svg'
// import { banner } from "../../assets/banner.png";

function ComponentD1({ handleScrollToForm }) {
  return (
    <div className="w-full flex flex-col-reverse text-zinc-950 p-4 sm:p-16 md:flex-row md:justify-between relative">
      <div className="flex flex-col justify-start  w-full md:px-10">
        <h1 className="w-full text-[40px] sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-zinc-950 mt-10 text-start md:text-center" >
          Distribute
          <br/>
          FreeWater
        </h1>
        <p className="w-[311px] text-center sm:text-start sm:w-full py-10 text-[10px] sm:text-xl">
          Fill up your stores your parties, events , business gatherings
          <br />
          with FreeWater.
        </p>
        <div>
          <ul>
            <li>
              <div className="flex justify-start py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] md:text-xl">Increase Foot Traffic</p>
              </div>
            </li>
            <li>
              <div className="flex justify-start py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] md:text-xl">Improve Sales</p>
              </div>
            </li>
            <li>
              <div className="flex justify-start py-6">
                <img src={dots} className="w-[16px] sm:w-[18px] md-w-auto"></img>
                <p className="px-3 text-[8px] md:text-xl">Gain Amazing PR</p>
              </div>
            </li>
          </ul>
          <Link to="/contact-us">
              <button className="bg-transparent hover:bg-gray-700 rounded-full w-[85.3px] sm:w-auto mt-[16px]">
                <img src={callIcon}></img>
              </button>
          </Link>
        </div>
        <div className="absolute right-0 top-0 hidden md:block">
          <img src={distbottle}></img>
        </div>
      </div>
    </div>
  );
}

export default ComponentD1;

