import React from "react";
import HeaderNav from "../Header/HeaderNav";

function Advertise() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <section className=" w-full ">
        <div className=" w-full min-h-screen relative bg-blue-800">
          {/* <div className="w-full h-[9px] left-[633px] top-auto  " /> */}
          <div className=" grid grid-flow-row">
            <div className="leading-[156px] mt-32">
              <p className="text-7xl text-neutral-100 text-center w-full font-medium font-['Inter'] ">
                We are more than just
              </p>
            </div>
            <div className=" flex justify-between">
              <div className="w-[574px] h-[164px] px-8 py-1 border-2 border-slate-50 justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-8xl font-medium font-['Inter'] leading-[156px]">
                  advertisers
                </div>
              </div>
              <div>
                <div className="w-[118px] h-[9px] bg-neutral-100 mt-20  "></div>
              </div>
              <div className="text-center text-white text-8xl font-medium font-['Inter'] leading-[156px] ">
                we're your
              </div>
            </div>
            <div></div>
          </div>
          <div className="left-[371px] top-[649px] absolute text-center text-neutral-100 text-xl md:text-2xl font-medium font-['Inter']">
            Receive meaningful impressions and utilize the greatest <br />
            brand loyalty platform in the ad industry.
          </div>
          <div className="px-6 py-2.5 left-[547px] top-[742px] absolute bg-orange-600 rounded-[33px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-100 text-2xl font-medium font-['Inter']">
              Get a Quote
            </div>
          </div>
          <div className="w-[592px] h-[755.17px] left-[353px] top-[906px] absolute">
            <div className="w-[592px] h-[755.17px] left-0 top-0 absolute">
              <div className="mix-blend-hard-light w-[592px] h-[755.17px] left-0 top-0 absolute">
                <div className="opacity-40 mix-blend-multiply w-[592px] h-[124.15px] left-0 top-[631.02px] absolute"></div>
                <img
                  className="w-[264.57px] h-[624.88px] left-[157.32px] top-[78.11px] absolute"
                  src="https://via.placeholder.com/265x625"
                />
                <div className="opacity-30 w-[87.90px] h-[603.43px] left-[160.54px] top-[85.62px] absolute"></div>
                <div className="mix-blend-multiply w-[88.51px] h-[603.43px] left-[329.16px] top-[85.62px] absolute"></div>
                <div className="mix-blend-multiply w-[129.13px] h-[603.43px] left-[288.54px] top-[85.62px] absolute"></div>
                <img
                  className="w-[188.98px] h-[65.51px] left-[195.11px] top-0 absolute"
                  src="https://via.placeholder.com/189x66"
                />
              </div>
              <div className="w-[196.55px] h-[87.57px] left-[191.40px] top-0 absolute">
                <img
                  className="w-[188.98px] h-[65.51px] left-[4.70px] top-0 absolute"
                  src="https://via.placeholder.com/189x66"
                />
              </div>
            </div>
            <div className="left-[231px] top-[680px] absolute origin-top-left -rotate-90 mix-blend-overlay text-center text-white text-8xl font-medium font-['Inter']">
              BLUE WAVE
            </div>
          </div>
          <div className="left-[542px] top-[1706px] absolute text-stone-300 text-2xl font-normal font-['Inter']">
            Alumi-Tec Bottle
          </div>
          <div className="left-[590px] top-[1735px] absolute text-stone-300 text-xs font-normal font-['Inter']">
            16 fl oz / 500 ml
          </div>
          <div className="w-[271px] left-[88px] top-[1341px] absolute text-center text-slate-50 text-[28px] font-medium font-['Inter']">
            More interaction than any other print or social media
          </div>
          <div className="w-[215px] left-[922px] top-[1124px] absolute text-center text-slate-50 text-[28px] font-medium font-['Inter']">
            Minimum conversion ratio
          </div>
          <div className="w-[267px] left-[914px] top-[1485px] absolute text-center text-slate-50 text-[28px] font-medium font-['Inter']">
            Connects websites, coupons & videos
          </div>
          <div className="w-[235px] left-[119px] top-[954px] absolute text-center text-slate-50 text-[28px] font-medium font-['Inter']">
            Cheaper than any print advertising
          </div>
          <div className="w-[286px] h-28 left-[896px] top-[1022px] absolute text-center text-teal-200 text-8xl font-extrabold font-['Inter']">
            24%
          </div>
          <div className="w-[286px] h-28 left-[905px] top-[1381px] absolute text-center text-teal-200 text-8xl font-extrabold font-['Inter']">
            QR
          </div>
          <div className="w-[286px] h-28 left-[90px] top-[854px] absolute text-center text-teal-200 text-8xl font-extrabold font-['Inter']">
            70%
          </div>
        </div>
      </section>
    </>
  );
}

export default Advertise;
