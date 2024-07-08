import React from "react";
import CallIcon from "../../assets/Call.svg";
import EmailIcon from "../../assets/message.svg";
import LocationIcon from "../../assets/location.svg";

function ContactDetails() {
  return (
    <>
      <div className=" mt-48 pb-20 grid grid-rows-2 gap-10">
        <div className="text-center text-zinc-950 text-[92px] font-normal font-['Inter'] leading-[70px]">
          Let's build a brand together!
        </div>
        <div className="grid grid-cols-3 flex-wrap">
          <div className="pl-2.5 py-2.5 justify-end items-center  flex">
            <img src={CallIcon} alt="Contact" />
            <div className="text-zinc-950 text-xl font-normal font-['Inter'] tracking-tight">
              +91 9799995778
            </div>
          </div>
          <div className="pl-2.5 py-2.5 justify-center items-center  flex">
            <img src={EmailIcon} alt="Mail" />

            <div className="text-zinc-950 text-xl font-normal font-['Inter']">
              givenid@gmail.com
            </div>
          </div>
          <div className="py-2.5 justify-start items-center flex">
            <div className="flex justify-center items-center">
              <img src={LocationIcon} alt="Location" />
              <div className="text-zinc-950 text-xl font-normal font-['Inter'] leading-[18.61px] text-right">
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
