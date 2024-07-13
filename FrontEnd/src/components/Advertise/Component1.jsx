import React from 'react'
import barIcon from '../../assets/bar.svg'
import '../../index.css';

function Component1() {
  return (
    <div className='bg-transparent w-[92%] z-10 flex flex-col items-center pb-[115px]'>
        <h1 className='text-[#F7F7F7] font-inter text-[96px] not-italic font-medium leading-[156px] tracking-[-0.96px] text-center'>We're more than just</h1>
        <div className='flex gap-8 justify-center text-[#F7F7F7] font-inter text-[96px] not-italic font-medium leading-[156px] tracking-[-0.96px] text-center'>
            <div className='relative bordered-word-container'>
                <span className='bordered-word px-[32px]'>advertisers</span>
                <span className='dot top-left'></span>
                <span className='dot top-right'></span>
                <span className='dot bottom-left'></span>
                <span className='dot bottom-right'></span>
            </div>
            <img src={barIcon}/>
            <h1>we're your</h1>
        </div>
        <h1 className='text-[#F7F7F7] font-inter text-[96px] not-italic font-medium leading-[156px] tracking-[-0.96px] text-center'>brand's best friend</h1>
        <div className='w-[42%] text-center text-[#F7F7F7] font-inter text-[20px] not-italic font-medium leading-normal mt-[25px] z-10'>
          <p>Receive meaningful impressions and utilize the greatest brand loyalty platform in the ad industry.</p>
        </div>
        <button className='px-[24px] py-[10px] bg-[#FC581C] rounded-[33px] text-[#F7F7F7] font-inter text-[24px] leading-normal not-italic font-medium mt-[45px] hover:opacity-80 active:opacity-50 z-10'>Get a Quote</button>
    </div>
  )
}

export default Component1
