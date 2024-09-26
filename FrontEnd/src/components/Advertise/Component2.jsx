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

function Component2() {

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
    <div className='flex flex-col justify-center items-center relative px-[130px] sm:px-[360px]'>
        <div className='flex justify-center relatives'>
            <img src={bottle} className='w-[101px] h-[200px] sm:w-auto sm:h-auto z-10'></img>
            <img src={line1} className='absolute left-[24%] top-[10%] w-[54px] sm:w-auto'></img>
            <img src={line2} className='absolute right-[24%] top-[70px] sm:top-[400px] w-[46px] sm:w-auto'></img>
            <img src={line3} className='absolute left-[24%] top-[130px] sm:top-[600px] w-[44px] sm:w-auto'></img>
            <img src={line4} className='absolute right-[24%] top-[155px] sm:top-[800px] w-[46px] sm:w-auto'></img>
        </div>
        <div className='flex flex-col items-center absolute top-2 left-2 sm:top-10 sm:left-2'>
          <img src={n1} className='w-[65px] h-[25px] sm:w-auto sm:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[28px] font-medium font-['Inter']">Cheaper than any<br></br>print advertising</div>
        </div>
        <div className='flex flex-col items-center absolute top-[40px] sm:top-[310px] right-1'>
          <img src={n2} className='w-[65px] h-[25px] sm:w-auto sm:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[28px] font-medium font-['Inter']">More interaction<br></br>than any other print<br></br>or social media</div>
        </div>
        <div className='flex flex-col items-center absolute top-[110px] sm:top-[500px] left-2'>
          <img src={n3} className='w-[65px] h-[25px] sm:w-auto sm:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[28px] font-medium font-['Inter']">Minimum<br></br>conversion ratio</div>
        </div>
        <div className='flex flex-col items-center absolute top-[145px] sm:top-[740px] right-2'>
          <img src={n4} className='w-[65px] h-[25px] sm:w-auto sm:h-auto'></img>
          <div className="text-center text-slate-50 text-[9px] sm:text-[28px] font-medium font-['Inter']">Connects websites,<br></br>coupons & videos</div>
        </div>
        <div className="text-stone-300 text-[8px] sm:text-2xl font-normal font-['Inter'] mt-4 sm:mt-10">Alumi-Tec Bottle</div>
        <div className="text-stone-300 text-[4px] sm:text-xs font-normal font-['Inter']">16 fl oz / 500 ml</div>
        <div className='mt-[7px] sm:mt-[36px] mb-[20px] sm:mb-[74px]'>
        <button onMouseEnter={handleHover} onMouseLeave={antiHover} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative hidden md:block">
          <img src={source}></img>
        </button>
        <button onClick={handleCl} className="bg-transparent rounded-full w-[85.3px] sm:w-auto relative md:hidden">
            <img src={source}></img>
        </button>
        </div>
    </div>
  )
}

export default Component2
