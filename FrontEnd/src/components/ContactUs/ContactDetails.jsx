import React from "react";
import CallIcon from "../../assets/blackCall.svg";
import EmailIcon from "../../assets/blackmessage.svg";
import LocationIcon from "../../assets/blacklocation.svg";

function ContactDetails() {
  return (
    <>
      <div className="mt-20 md:mt-38 lg:mt-44 mb-10 md:mb-20 flex flex-row md:flex-col gap-4 md:gap-16 md:pr-0 px-8">
        <div className="text-start md:text-center text-zinc-950 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[92px] font-normal font-['Inter'] leading-[55px] md:leading-[70px] flex items-center justify-center w-full">
          Let's build a brand together!
        </div>
        <div className=" flex justify-center items-start lg:items-center flex-col md:flex-row gap-4 md:gap-32 lg:gap-40">
          <div className="py-2.5 justify-end items-center  flex gap-2">
            <img src={CallIcon} alt="Contact" className="w-6 sm:w-auto" />
            <div className="text-zinc-950 text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-normal font-['Inter'] tracking-tight">
              +91 9799995778
            </div>
          </div>
          <div className="pl-2.5 py-2.5 justify-center items-center  flex gap-2">
            <img src={EmailIcon} alt="Mail" className="w-6 sm:w-auto" />

            <div className="text-zinc-950 text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-normal font-['Inter']">
              aquafree.co.in@gmail.com
            </div>
          </div>
          <div className="py-2.5 justify-start items-center flex gap-2">
            <div className="flex justify-center items-center gap-4">
              <img src={LocationIcon} alt="Location" className="w-6 sm:w-auto" />
              <div className="text-zinc-950 text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-normal font-['Inter'] leading-[18.61px] text-right">
                C-114 (I), Road no 8<br />
                <p className=" font-medium"> VKI, Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
