import React, { useState } from 'react'
import bottleImage from '../../assets/bottle.svg'
import commaIcon from '../../assets/comma.svg'
import vectorImage from '../../assets/vector.svg'
import callIcon from '../../assets/callIcon.svg'
import callIcon2 from '../../assets/call2.svg'
import '../../index.css'
import { Link } from 'react-router-dom'

function Component1() {

  const [source,setSource] = useState(callIcon);
  const [isSet,setIsSet] = useState(true);

  const handleCl=()=>{
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
        <div className='sm:mt-[39px] mt-[15px] z-10 absolute left-6 sm:left-0 w-[188px] sm:w-auto sm:relative'>
          <div className='font-montserrat font-medium text-[30px] sm:text-[96px] leading-normal sm:leading-[104px] -tracking-[-2px] sm:-tracking-[4.8px] inline-block not-italic '>
            <h1 className='text-[#F2F5FF]'>Place</h1>
            <h1 className='text-[#F2F5FF]'>your</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>billboard</h1>
            <h1 className='text-[#F2F5FF]'>in every</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>hand</h1>
          </div>
          <div className=' w-[143px] h-[90px] sm:w-[444px] sm:h-[74px] mt[19px] sm:mt-[32px]'>
            <p className='font-montserrat text-[#F7F7F7] text-[12px] sm:text-[20px] font-normal not-italic leading-1'>We provide sustainable advertising medium that imprints your brand in everyone’s mind at dirt cheap cost.</p>
          </div>
          <div className='mt-[33px] sm:mt-[76px]'>
              <button onMouseEnter={handleHover} onMouseLeave={antiHover} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative hidden md:display-block">
                <img src={source}></img>
              </button>
              <button onClick={handleCl} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative md:hidden">
                <img src={source}></img>
              </button>
          </div>
        </div>
        <div className='absolute left-2  sm:hidden'>
          <h1 className="font-montserrat font-semibold sm:font-bold text-[#4971B6] text-[150px] sm:text-[300px] leading-none transform -rotate-90 m-0 p-0">
            bottle
          </h1>
        </div>
      </div>
      <div className='absolute right-[12px] top-[140px] sm:right-auto sm:top-auto z-10 w-[112px] h-[343px] sm:w-[248px] sm:h-[758px]'>
        <img src={bottleImage} className="w-full h-full object-cover"></img> 
      </div>
      <div className='w-[21.5%] sm:w-1/2 h-[548px] sm:h-[1024px] sm:bg-[#0F40A8] bg-[#436CB4] flex-shrink-0 relative flex justify-start items-center pt-10 pb-5'>
        <div className='w-[313px] h-[930px] absolute -left-12 hidden sm:inline-block'>
          <h1 className="font-montserrat font-bold text-[#4971B6] text-[300px] leading-none transform rotate-90 m-0 p-0">
            bottle
          </h1>
        </div>
        <div className='w-[286px] absolute right-[100px] top-[255px] font-montserrat hidden sm:block'>
          <img src={commaIcon}></img>
          <p className='font-normal text-[#F7F7F7] text-[20px] leading-[25px]'>We had an amazing experience with BlueWave. Their elite market targetting and QR codes conversation strategy won us more clients than any other medium evercould</p>
          <h2 className='font-normal w-[125px] text-[#83CCFF] text-[20px] h-[24px]'>-Brent Foley</h2>
        </div>
        <div className='absolute -right-[112.44px] top-[526px] hidden sm:block'>
          <img src={vectorImage} className='w-[320px] h-[320px]'></img>
        </div>
      </div>      
    </div>
  )
}

export default Component1
