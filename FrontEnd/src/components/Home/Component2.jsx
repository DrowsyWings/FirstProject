import React from 'react'
import { Link } from 'react-router-dom'
import babyImage from '../../assets/babyImage.png'
import recycleIcon from '../../assets/recycle.svg'
import envirIcon from '../../assets/envir.svg'
import icon from '../../assets/icon.svg'

function Component2() {
  return (
        <div className='flex w-[1077px] justify-between z-10 mt-[77px] h-[425px]'>
            <div className='flex w-[461px] items-start flex-col justify-between'>
                <div className='flex items-start gap-[24px] font-nunito font-normal'>
                    <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                        <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Purity</p>
                    </div>
                    <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                        <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Trust</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[32px]'>
                    <p className='w-[362px] text-[#070707] font-playfair text-[36px] font-medium not-italic leading-normal'>
                        Pure Water with food grade packaging
                    </p>
                    <p className='w-full text-[#3D3D3D] font-montserrat text-[16px] not-italic font-medium leading-normal'>   
                        Bluewave sources pure drinking water with reverse osmosis technology and provides it in durable sustainable packaging promoting recycling, moving away from single-useplastic bottles.
                    </p>
                </div>
                <Link>
                    <button className='flex px-[16px] py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF]'>See Case Study</button>
                </Link>
            </div>
            <div className='flex items-center'>
                <div className='relative'>
                    <div className='flex gap-[85px] relative'>
                        <div className='w-[305px] h-[238px] rounded-[10px_64px] bg-[#B6DEFF] mt-[90px]'></div>
                        <div className='w-[463.238px] h-[280px] bg-cover absolute right-[24px] top-[24px]' style={{  backgroundImage: `url(${babyImage})`, borderRadius: '10px 64px' }}></div>
                        <div className='w-[122px] h-[120px] rounded-[10px_64px] bg-[#B6DEFF]'></div>
                    </div>
                    <div className='bg-[#FD763A] pl-[24px] pr-[20px] pt-[12px] pb-[12px] inline-block rounded-[20px] shadow-custom-shadow absolute -right-[12px] top-[287px]'>
                        <img src={recycleIcon}></img>
                        <p className='w-[137px] font-playfair text-[#FFF] text-[14px] not-italic font-medium leading-[100%] mt-[8px]'>Bottles <span className='font-extrabold'>recycled</span> for production</p>
                    </div>
                    <div className='p-[12px] bg-[#FD763A] rounded-[18px] inline-block absolute -left-[20px] top-[130px]'>
                        <img src={icon}></img>
                    </div>
                    <div className='bg-[#F2F5FF] pl-[24px] pr-[20px] pt-[12px] pb-[12px] inline-block rounded-[20px] shadow-custom-shadow2 absolute left-[131px] -top-[50px]'>
                        <img src={envirIcon}></img>
                        <p className='w-[137px] font-playfair text-[#070707] text-[14px] not-italic font-medium leading-[100%] mt-[8px]'>TDS content below the permissible limit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component2
