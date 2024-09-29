import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bottle from '../../assets/bottle.gif.gif'
import line1 from '../../assets/S1 Line.svg'
import line2 from '../../assets/S2 Line.svg'
import line3 from '../../assets/S3 LIne.svg'
import line4 from '../../assets/S4 Line.svg'
import n1 from '../../assets/N1 number.svg'
import n2 from '../../assets/N2 number.svg'
import n3 from '../../assets/N3 number.svg'
import n4 from '../../assets/N4 number.svg'
import callIcon from '../../assets/callIcon.svg'
import callIcon2 from '../../assets/call2.svg'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Component2() {

  const textToCopy = "9799995778";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch(err => {
        toast.error("Failed to copy text!");
      });
  };


  const [source,setSource] = useState(callIcon);
  const [isSet,setIsSet] = useState(true);

  const handleCl=()=>{
    handleCopy();
    if(isSet){
      setSource(callIcon2);
      setIsSet(false);
    }
    else{
      setSource(callIcon)
      setIsSet(true)
    }
  }

  const handleHover=()=>{
    setSource(callIcon2)
  }

  const antiHover=()=>{
    setSource(callIcon)
  }
  return (
    <div className='flex flex-col justify-center items-center relative px-[130px] lg:px-[360px]'>
        <div className='flex justify-center relatives'>
            <img src={bottle} className='w-[101px] h-[200px]  sm:w-[250px] sm:h-auto lg:w-auto z-10'></img>
            <img src={line1} className='absolute left-[24%] top-[10%] sm:left-[10%] lg:left-[24%]   w-[54px] sm:w-auto'></img>
            <img src={line2} className='absolute right-[24%] top-[70px] sm:right-[10%] lg:right-[24%] sm:top-[220px] lg:top-[400px] w-[46px] sm:w-auto'></img>
            <img src={line3} className='absolute left-[24%] top-[130px] sm:left-[10%] lg:left-[24%] sm:top-[380px] lg:top-[600px] w-[44px] sm:w-auto'></img>
            <img src={line4} className='absolute right-[24%] top-[155px] sm:right-[10%] lg:right-[24%] sm:top-[550px] lg:top-[800px] w-[46px] sm:w-auto'></img>
        </div>
        <div className='flex flex-col items-center absolute top-2 left-2 sm:top-10 sm:-left-28 lg:left-2'>
          <img src={n1} className='w-[65px] h-[25px] lg:w-auto lg:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[18px] lg:text-[28px] font-medium font-['Inter']">Cheaper than any<br></br>print advertising</div>
        </div>
        <div className='flex flex-col items-center absolute top-[40px] sm:top-[180px] lg:top-[310px] right-1 sm:-right-28 lg:right-1'>
          <img src={n2} className='w-[65px] h-[25px] lg:w-auto lg:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[18px] lg:text-[28px] font-medium font-['Inter']">More interaction<br></br>than any other print<br></br>or social media</div>
        </div>
        <div className='flex flex-col items-center absolute top-[110px] sm:top-[350px] lg:top-[500px] left-2 sm:-left-24 lg:left-2'>
          <img src={n3} className='w-[65px] h-[25px] lg:w-auto lg:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[18px] lg:text-[28px] font-medium font-['Inter']">Minimum<br></br>conversion ratio</div>
        </div>
        <div className='flex flex-col items-center absolute top-[145px] sm:top-[540px] lg:top-[740px] right-2 sm:-right-28 lg:right-2'>
          <img src={n4} className='w-[65px] h-[25px] lg:w-auto lg:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[18px] lg:text-[28px] font-medium font-['Inter']">Connects websites,<br></br>coupons & videos</div>
        </div>
        <div className="text-stone-300 text-[8px] sm:text-2xl font-normal font-['Inter'] mt-4 sm:mt-10">Alumi-Tec Bottle</div>
        <div className="text-stone-300 text-[4px] sm:text-xs font-normal font-['Inter']">16 fl oz / 500 ml</div>
        <div className='mt-[7px] sm:mt-[36px] mb-[20px] sm:mb-[74px]'>
        <button onMouseEnter={handleHover} onMouseLeave={antiHover} onClick={handleCopy} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative hidden md:block">
          <img src={source}></img>
        </button>
        <button onClick={handleCl} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative md:hidden">
            <img src={source}></img>
        </button>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  )
}

export default Component2
