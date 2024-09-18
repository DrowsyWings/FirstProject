import React from 'react'
import barIcon from '../../assets/bar.svg'
import '../../index.css';

function Component1({ scrollToForm }) {
  return (
    <div className='bg-transparent w-[92%] z-10 flex flex-col items-center pb-[30px] sm:pb-[115px]'>
        <h1 className='text-[#F7F7F7] font-inter text-[24px] sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[96px] not-italic font-medium leading-[45px] sm:leading-[156px] tracking-[-0.2px] sm:tracking-[-0.96px] text-center'>We're more than just</h1>
        <div className='flex gap-[8px] sm:gap-8 justify-center text-[#F7F7F7] font-inter text-[24px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[90px] not-italic font-medium leading-[45px] sm:leading-[78px] md:leading-[110px] lg:leading-[156px] tracking-[-0.2px] sm:tracking-[-0.96px] text-center items-center'>
            <div className='border-solid border-white border-[3px] px-[10px] sm:px-[16px] md-[28px] lg:px-[32px] py-[5px] md:py-[7px] lg:sm:py-[10px] text-[24px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[90px] inline-block'>advertisers</div>
            <img src={barIcon} className='w-[34px] h-[3px] sm:w-[48px] sm:h-[10px] lg:w-auto lg:h-auto'/>
            <h1>we're your</h1>
        </div>
        <h1 className='text-[#F7F7F7] font-inter text-[24px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[96px] not-italic font-medium leading-[45px] sm:leading-[156px] tracking-[-0.2px] sm:tracking-[-0.96px] text-center'>brand's best friend</h1>
        <div className='w-[42%] text-center text-[#F7F7F7] font-inter text-[6.9px] sm:text-[12px] md:text-[15px] lg:text-[20px] not-italic font-medium leading-normal mt-[25px] z-10'>
          <p>Receive meaningful impressions and utilize the greatest brand loyalty platform in the ad industry.</p>
        </div>
        <button
          className='px-[7px] sm:px-[14px] md:px-[16px] lg:px-[24px] py-[3px] sm:py-[6px] md:py-[8px] lg:py-[10px] bg-[#FC581C] rounded-[10px] sm:rounded-[33px] text-[#F7F7F7] font-inter text-[9px] sm:text-[16px] md:text-[19px] lg:text-[24px] leading-normal not-italic font-medium mt-[20px] sm:mt-[45px] hover:opacity-80 active:opacity-50 z-10'
          onClick={scrollToForm}
        >
          Get a Quote
        </button>
    </div>
  )
}

export default Component1
