import React from 'react'
import { Link } from 'react-router-dom'
import image01 from '../../assets/rect01.svg'
import image02 from '../../assets/rect02.svg'
import image03 from '../../assets/rect03.svg'

function Component4() {
  return (
    <div className='lg:w-[950px] sm:w-[800px] xl:w-[1077px] w-[254px] flex justify-between sm:flex-row flex-col-reverse mt-[60px] sm:mt-[102px] gap-[35px] sm:px-6 lg:px-0'>
        <div className='flex sm:w-[481px] w-[228px] pl-[1.63px] justify-between sm:items-start items-center flex-col'>
            <div className='flex justify-center sm:justify-start gap-[24px] font-nunito font-normal w-full'>
                <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Brand</p>
                </div>
                <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Reach </p>
                </div>
            </div>
            <div className='flex flex-col gap-[16px] sm:gap-[32px] items-center sm:items-start'>
                <p className='w-[235px] sm:w-[362px] text-[#070707] font-playfair text-[24px] sm:text-[36px] font-medium not-italic leading-normal text-center sm:text-start'>
                    Most sought out advertising medium
                </p>
                <p className='sm:w-full text-[#3D3D3D] font-montserrat w-[208px] text-[10px] sm:text-[20px] not-italic font-medium leading-normal text-center sm:text-start'>   
                    Aquafree provides exceptional benefit of over 1 hour interaction with your ad in a print medium circulated directly to high paying Grade A audience like shopping malls, cafes, tourist spots. Every ad has an attached QR code for easy conversion. The QR code also helps in tracking the efficiency of advertising.
                </p>
            </div>
            <Link>
                <button className='flex px-[5.8px] py-[4.3px] sm:px-[16px] sm:py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF] text-[8.775px] sm:text-[16px] mt-[16px] sm:mt-[16px]'>See Case Study</button>
            </Link>
        </div>
        <div className='flex'>
            <div className='w-1/3 flex flex-col'>
                <div className='rounded-full sm:w-[180px] w-[84px] sm:h-[180px] h-[84px] bg-[#4184d6]'></div>
                <div className='sm:w-[180px] w-[84px] sm:h-[180px] h-[84px] py-[30px] sm:py-[64px] px-[12px] sm;px-[25px] bg-[#FD763A] text-[#FFF] '>
                    <h3 className='font-inter text-[12px] sm:text-[24px] not-italic leading-normal font-semibold'>10x</h3>
                    <h4 className='font-playfair text-[8px] sm:text-[16px] font-semibold leading-normal not-italic'>More Interactions</h4>
                </div>
                <img src={image01} className='sm:w-[180px] w-[84px] sm:h-[180px] h-[84px]  -rotate-90'></img>
            </div>
            <div className='w-1/3 flex flex-col'>
                <div className='sm:w-[180px] w-[84px] sm:h-[180px] h-[84px] py-[15px] sm:py-[55px] px-[12px] sm:px-[25px] bg-[#3D3D3D] rounded-r-[33px] sm:rounded-r-[72px] text-[#FFF] '>
                    <h3 className='font-inter text-[12px] sm:text-[24px] not-italic leading-normal font-semibold'>70%</h3>
                    <h4 className='font-playfair text-[8px] sm:text-[16px] font-semibold leading-normal not-italic'>Cheaper than any Print Advertising</h4>
                </div>
                <div className='rounded-full bg-[#83ccff] sm:w-[180px] w-[84px] sm:h-[180px] h-[84px]'></div>
                <div className='sm:w-[180px] w-[84px] sm:h-[180px] h-[84px] pt-[15px] sm:pt-[50px] pb-[15px] sm:pb-[37px] px-[25px] sm:px-[43px] bg-[#3D3D3D] rounded-t-[72px] text-[#FFF] '>
                    <h3 className='font-inter text-[12px] sm:text-[24px] not-italic leading-normal font-semibold'>150+</h3>
                    <h4 className='font-playfair text-[12px] sm:text-[24px] font-semibold leading-normal not-italic'>Clients Reached</h4>
                </div>
            </div>
            <div className='w-1/3 flex flex-col'>
                <img src={image02} className='sm:w-[180px] w-[84px] sm:h-[360px] h-[170px] rounded-t-[33px] sm:rounded-t-[72px]'></img>
                <img src={image03} className='rounded-full sm:w-[180px] w-[84px] sm:h-[180px] h-[84px]'></img>
            </div>
        </div>
    </div>
  )
}

export default Component4
