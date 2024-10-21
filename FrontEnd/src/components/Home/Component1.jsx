import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import bottleImage from '../../assets/Gif.gif'
import commaIcon from '../../assets/comma.svg'
import vectorImage from '../../assets/vector.svg'
import callIcon from '../../assets/callIcon.svg'
import callIcon2 from '../../assets/call2.svg'
import '../../index.css'

function Component1() {
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
    <div className='flex relative  justify-center items-center'>
      <div className='w-[78.5%] sm:w-1/2 h-[548px] sm:h-[1024px] sm:bg-[#436CB4] bg-[#0F40A8] flex-shrink-0 flex justify-center items-center pt-10 pb-5 relative'>
        <div className='sm:mt-[0px] lg:mt-[39px] mt-[15px] z-10 absolute left-6 sm:left-0 w-[188px] sm:w-auto sm:relative'>
          <div className='font-montserrat font-medium text-[30px] sm:text-[60px] lg:text-[96px] leading-normal sm:leading-[80px] lg:leading-[104px] -tracking-[-2px] sm:-tracking-[1.5px] lg:-tracking-[4.8px] inline-block not-italic '>
            <h1 className='text-[#F2F5FF]'>Place</h1>
            <h1 className='text-[#F2F5FF]'>your</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>billboard</h1>
            <h1 className='text-[#F2F5FF]'>in every</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>hand</h1>
          </div>
          <div className=' w-[143px] h-[90px] sm:w-[240px] lg:w-[400px] xl:w-[440px] sm:h-[80px] lg:h-[74px] mt[19px] sm:mt-[32px]'>
            <p className='font-montserrat text-[#F7F7F7] text-[12px] sm:text-[16px] lg:text-[20px] font-normal not-italic leading-1'>We provide sustainable advertising medium that imprints your brand in everyone’s mind at dirt cheap cost.</p>
          </div>
          <div className='mt-[33px] sm:mt-[76px]'>
              <button onMouseEnter={handleHover} onClick={handleCopy} onMouseLeave={antiHover} className="bg-transparent rounded-full w-[85.3px] sm:w-[150px] lg:w-auto relative hidden md:block">
                <img src={source}></img>
              </button>
              <button onClick={handleCl} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative sm:hidden">
                <img src={source}></img>
              </button>
          </div>
        </div>
        <div className='absolute left-2 sm:hidden'>
          <h1 className="font-montserrat font-semibold sm:font-bold text-[#4971B6] text-[150px] sm:text-[300px] leading-none transform -rotate-90 m-0 p-0">
            AQUA
          </h1>
        </div>
      </div>
      <div className='absolute right-[12px] top-[140px] sm:top-[180px] lg:right-auto lg:top-auto z-10 w-[112px] h-[343px] sm:w-[210px] sm:h-[658px] lg:w-[248px] lg:h-[758px]'>
        <img src={bottleImage} className="w-full h-full object-cover"></img> 
      </div>
      <div className='w-[21.5%] sm:w-1/2 h-[548px] sm:h-[1024px] sm:bg-[#0F40A8] bg-[#436CB4] flex-shrink-0 relative flex justify-start items-center pt-10 pb-5'>
        <div className='w-[313px] h-[930px] absolute -left-12 hidden sm:inline-block z-0'>
          <h1 className="font-montserrat font-bold text-[#4971B6] text-[300px] leading-none transform rotate-90 m-0 p-0">
            AQUA
          </h1>
        </div>
        <div className='w-[286px] absolute right-[100px] top-[255px] font-montserrat hidden lg:block'>
          <img src={commaIcon}></img>
          <p className='font-normal text-[#F7F7F7] text-[20px] leading-[25px]'>We had an amazing experience with Aquafree. Their elite market targeting and QR codes conversation strategy won us more clients than any other medium ever could</p>
          <h2 className='font-normal w-[125px] text-[#83CCFF] text-[20px] h-[24px]'>-Brent Foley</h2>
        </div>
        <div className='absolute -right-[112.44px] top-[526px] hidden lg:block'>
          <img src={vectorImage} className='w-[320px] h-[320px]'></img>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />      
    </div>
  )
}

export default Component1
