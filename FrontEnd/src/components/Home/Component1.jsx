import React from 'react'
import bottleImage from '../../assets/bottle.svg'
import commaIcon from '../../assets/comma.svg'
import vectorImage from '../../assets/vector.svg'
import callIcon from '../../assets/callIcon.svg'
import '../../index.css'
import { Link } from 'react-router-dom'

function Component1() {
  return (
    <div className='flex relative  justify-center items-center'>
      <div className='w-1/2 h-[1024px] bg-[#436CB4] flex-shrink-0 flex justify-center items-center pt-10 pb-5'>
        <div className='mt-[39px]'>
          <div className='font-montserrat font-medium w-[444px] h-[520px] text-[96px] leading-[104px] -tracking-[4.8px] inline-block'>
            <h1 className='text-[#F2F5FF]'>Place</h1>
            <h1 className='text-[#F2F5FF]'>your</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>billboard</h1>
            <h1 className='text-[#F2F5FF]'>in every</h1>
            <h1 className='font-montserrat font-bold text-[#83CCFF]'>hand</h1>
          </div>
          <div className='w-[444px] h-[74px] mt-[32px]'>
            <p className='font-montserrat text-[#F7F7F7] text-[20px] font-normal not-italic leading-1'>We provide sustainable advertising medium that imprints your brand in everyone’s mind at dirt cheap cost.</p>
          </div>
          <div className='mt-[76px]'>
            <Link to="/contact-us">
              <button className="bg-transparent hover:bg-gray-700 rounded-full">
                <img src={callIcon}></img>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute z-10'>
        <img src={bottleImage} className="w-full h-full object-cover"></img> 
      </div>
      <div className='w-1/2 h-[1024px] bg-[#0F40A8] flex-shrink-0 relative flex justify-start items-center pt-10 pb-5'>
        <div className='w-[313px] h-[930px] inline-block absolute -left-12'>
          <h1 className="font-montserrat font-bold text-[#4971B6] text-[300px] leading-none transform rotate-90 m-0 p-0">
            bottle
          </h1>
        </div>
        <div className='w-[286px] absolute right-[100px] top-[255px] font-montserrat'>
          <img src={commaIcon}></img>
          <p className='font-normal text-[#F7F7F7] text-[20px] leading-[25px]'>We had an amazing experience with BlueWave. Their elite market targetting and QR codes conversation strategy won us more clients than any other medium evercould</p>
          <h2 className='font-normal w-[125px] text-[#83CCFF] text-[20px] h-[24px]'>-Brent Foley</h2>
        </div>
        <div className='absolute -right-[112.44px] top-[526px]'>
          <img src={vectorImage} className='w-[320px] h-[320px]'></img>
        </div>
      </div>      
    </div>
  )
}

export default Component1
