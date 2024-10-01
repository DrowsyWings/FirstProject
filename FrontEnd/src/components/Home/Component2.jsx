import React from 'react'
import { Link } from 'react-router-dom'
import babyImage from '../../assets/babyImage.png'
import recycleIcon from '../../assets/recycle.svg'
import envirIcon from '../../assets/envir.svg'
import icon from '../../assets/icon.svg'

function Component2() {
  return (
        <div className='flex w-[328px] sm:w-[800px] lg:w-[950px] xl:w-[1077px] flex-col-reverse sm:flex-row justify-between z-10 mt-[77px] h-[425px] sm:px-6 lg:px-0'>
            <div className='flex sm:w-[461px] w-[326px] sm:items-start items-center flex-col justify-between'>
                <div className='flex justify-center sm:justify-start gap-[24px] font-nunito font-normal w-full'>
                    <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                        <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Purity</p>
                    </div>
                    <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                        <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Trust</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px] sm:gap-[32px] items-center sm:items-start'>
                    <p className='w-[362px] text-[#070707] font-playfair text-[24px] sm:text-[36px] font-medium not-italic leading-normal text-center sm:text-start'>
                        Pure Water with food grade packaging
                    </p>
                    <p className='sm:w-full text-[#3D3D3D] font-montserrat w-[208px] text-[10px] sm:text-[20px] not-italic font-medium leading-normal text-center sm:text-start'>   
                        Aquafree sources premium alkaline water with reverse osmosis technology and provides it in durable sustainable packaging promoting recycling, moving away from single-use plastic bottles.
                    </p>
                </div>
                <Link>
                    <button className='flex px-[5.8px] py-[4.3px] sm:px-[16px] sm:py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF] text-[8.775px] sm:text-[16px] mt-[16px] sm:mt-[16px]'>See Case Study</button>
                </Link>
            </div>
            <div className='flex items-center justify-center sm:justify-start'>
                <div className='relative'>
                    <div className='flex gap-[60px] sm:gap-[85px] relative'>
                        <div className='sm:w-[305px] sm:h-[238px] w-[151px] h-[118.3px] rounded-[10px_64px] bg-[#B6DEFF] mt-[45px] sm:mt-[90px]'></div>
                        <div className='sm:w-[463.238px] w-[230px] h-[140px] sm:h-[280px] bg-cover absolute right-[24px] top-[6px] sm:top-[24px]' style={{  backgroundImage: `url(${babyImage})`, borderRadius: '10px 64px' }}></div>
                        <div className='sm:w-[122px] sm:h-[120px] w-[60px] h-[60px] rounded-[10px_64px] bg-[#B6DEFF]'></div>
                    </div>
                    <div className='bg-[#FD763A] pl-[12px] sm:pl-[24px] pr-[10px] sm:pr-[20px] pt-[6px] sm:pt-[12px] pb-[6px] sm:pb-[12px] inline-block rounded-[10px] sm:rounded-[20px] shadow-custom-shadow absolute -right-[12px] top-[125px] sm:top-[287px]'>
                        <img src={recycleIcon} className='w-[85px] sm:w-auto'></img>
                        <p className='sm:w-[137px] w-[68px] font-playfair text-[#FFF] text-[7px] sm:text-[14px] not-italic font-medium leading-[100%] mt-[8px]'>Bottles <span className='font-extrabold'>recycled</span> for production</p>
                    </div>
                    <div className='p-[12px] bg-[#FD763A] rounded-[8.95px] sm:rounded-[18px] inline-block absolute -left-[20px] top-[60px] sm:top-[130px]'>
                        <img src={icon} className='w-[14px] h-[14px] sm:w-auto sm:h-auto'></img>
                    </div>
                    <div className='bg-[#F2F5FF] pl-[9.945px] sm:pl-[24px] pr-[12px] sm:pr-[20px] pt-[12px] pb-[6px] sm:pb-[12px] inline-block rounded-[10px] sm:rounded-[20px] shadow-custom-shadow2 absolute left-[80px] sm:left-[131px] -top-[30px] sm:-top-[50px]'>
                        <img src={envirIcon} className='w-[85px] sm:w-[auto]'></img>
                        <p className='sm:w-[137px] w-[68px] font-playfair text-[#070707] text-[7px] sm:text-[14px] not-italic font-medium leading-[100%] mt-[8px]'>TDS content below the permissible limit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component2
