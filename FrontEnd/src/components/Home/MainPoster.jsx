import React from 'react'
import bottleImage from '../../assets/bOTTLE iMAGE.png'
import commaIcon from '../../assets/comma.svg'
import vectorImage from '../../assets/vector.svg'
import callIcon from '../../assets/callIcon.svg'
import '../../index.css'
import { Link } from 'react-router-dom'

function MainPoster() {
  return (
    <div className='flex'>
      <div className='bg-[#436CB4] w-1/2 h-[1024px] flex flex-col justify-center items-start pl-[20px] sm:pl-[40px] md:pl-[70px] lg:pl-[100px]'>
        <div className='font-montserrat font-medium w-[444px] h-[520px] text-[96px] leading-[104px] -tracking-[4.8px]'>
          <h1 className='text-[#F2F5FF]'>Place</h1>
          <h1 className='text-[#F2F5FF]'>your</h1>
          <h1 className='font-montserrat font-bold text-[#83CCFF]'>billboard</h1>
          <h1 className='text-[#F2F5FF]'>in every</h1>
          <h1 className='font-montserrat font-bold text-[#83CCFF]'>hand</h1>
        </div>
        <div className='w-[444px]'>
          <p className='font-montserrat text-[#F7F7F7] text-[20px] font-normal '>We provide sustainable advertising medium that imprints your brand in everyone’s mind at dirt cheap cost.</p>
        </div>
        <div className='pt-20'>
            <Link to="/contact-us">
              <button className="bg-transparent hover:bg-gray-700 rounded-full">
                <img src={callIcon}></img>
              </button>
            </Link>
        </div>
      </div>
      <div className='bg-[#0F40A8] w-1/2 h-[1024px] flex-shrink-0 flex items-center justify-center'>
          <div className=' absolute right-[114px] top-[370px]'>
            <h1 className='font-montserrat font-bold text-[#4971B6] w-[930px] h-[313px] text-[300px] leading-normal flex-col justify-end flex-shrink-0 transform rotate-90'>bottle</h1>
          </div>
          <div className='absolute left-[516px] top-[119px]'>
            <img src={bottleImage}></img> 
          </div>
          <div className='w-[286px] absolute right-[99.56] top-[255px] font-montserrat'>
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

export default MainPoster
