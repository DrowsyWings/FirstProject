import React from 'react'
import { Link } from 'react-router-dom'
import bottle from '../../assets/advertiseBottle.svg'
import line1 from '../../assets/S1 Line.svg'
import line2 from '../../assets/S2 Line.svg'
import line3 from '../../assets/S3 LIne.svg'
import line4 from '../../assets/S4 Line.svg'
import n1 from '../../assets/N1 number.svg'
import n2 from '../../assets/N2 number.svg'
import n3 from '../../assets/N3 number.svg'
import n4 from '../../assets/N4 number.svg'
import callIcon from '../../assets/callIcon.svg'

function Component2() {
  return (
    <div className='flex flex-col justify-center items-center relative px-[360px]'>
        <div className='flex justify-center relatives'>
            <img src={bottle}></img>
            <img src={line1} className='absolute left-[250px] top-[75px]'></img>
            <img src={line2} className='absolute right-[250px] top-[229px]'></img>
            <img src={line3} className='absolute left-[250px] top-[435px]'></img>
            <img src={line4} className='absolute right-[250px] top-[561px]'></img>
        </div>
        <div className='flex flex-col items-center absolute top-0 left-0'>
          <img src={n1}></img>
          <div className="text-center text-slate-50 text-[28px] font-medium font-['Inter']">Cheaper than any<br></br>print advertising</div>
        </div>
        <div className='flex flex-col items-center absolute top-[140px] right-0'>
          <img src={n2}></img>
          <div className="text-center text-slate-50 text-[28px] font-medium font-['Inter']">More interaction<br></br>than any other print<br></br>or social media</div>
        </div>
        <div className='flex flex-col items-center absolute top-[355px] left-0'>
          <img src={n3}></img>
          <div className="text-center text-slate-50 text-[28px] font-medium font-['Inter']">Minimum<br></br>conversion ratio</div>
        </div>
        <div className='flex flex-col items-center absolute top-[500px] right-0'>
          <img src={n4}></img>
          <div className="text-center text-slate-50 text-[28px] font-medium font-['Inter']">Connects websites,<br></br>coupons & videos</div>
        </div>
        <div className="text-stone-300 text-2xl font-normal font-['Inter'] mt-10">Alumi-Tec Bottle</div>
        <div className="text-stone-300 text-xs font-normal font-['Inter']">16 fl oz / 500 ml</div>
        <div className='mt-[36px] mb-[74px]'>
            <Link to="/contact-us">
              <button className="bg-transparent hover:bg-gray-700 rounded-full">
                <img src={callIcon}></img>
              </button>
            </Link>
          </div>
    </div>
  )
}

export default Component2
