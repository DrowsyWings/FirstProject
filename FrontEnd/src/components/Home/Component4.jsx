import React from 'react'
import { Link } from 'react-router-dom'
import image01 from '../../assets/Image 1.png'
import image02 from '../../assets/Image 2.jpg'
import image03 from '../../assets/Image 3.jpg'
import image04 from '../../assets/Image 4.jpg'

function Component4() {
  return (
    <div className='w-[1077px] flex justify-between mt-[102px]'>
        <div className='flex pl-[1.63px] justify-center  items-start gap-[35px] flex-col'>
            <div className='flex items-start gap-[24px] font-nunito font-normal'>
                <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Brand</p>
                </div>
                <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Reach</p>
                </div>
            </div>
            <div className='flex flex-col gap-[32px]'>
                <p className='w-[362px] text-[#070707] font-playfair text-[36px] font-medium not-italic leading-normal'>
                    Most sought out advertising medium
                </p>
                <p className='w-[461px] text-[#3D3D3D] font-montserrat text-[20px] not-italic font-medium leading-normal'>   
                    BlueWave provides exceptional benefit of over 1 hour interaction with your ad in a print medium circulated directly to high paying Grade A audience like shopping malls, cafes, tourist spots. Every ad has an attached QR code for easy conversion. The QR code also helps in tracking the efficiency of advertising.
                </p>
            </div>
            <Link>
                <button className='flex px-[16px] py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF]'>See Case Study</button>
            </Link>
        </div>
        <div className='flex'>
            <div className='w-1/3 flex flex-col'>
                <img src={image01} className='rounded-full w-[180px] h-[180px]'></img>
                <div className='w-[180px] h-[180px] py-[64px] px-[25px] bg-[#FD763A] text-[#FFF] '>
                    <h3 className='font-inter text-[24px] not-italic leading-normal font-semibold'>10x</h3>
                    <h4 className='font-playfair text-[16px] font-semibold leading-normal not-italic'>More Interactions</h4>
                </div>
                <img src={image02} className='w-[180px] h-[180px] rounded-t-[72px]'></img>
            </div>
            <div className='w-1/3 flex flex-col'>
                <div className='w-[180px] h-[180px] py-[55px] px-[25px] bg-[#3D3D3D] rounded-r-[72px] text-[#FFF] '>
                    <h3 className='font-inter text-[24px] not-italic leading-normal font-semibold'>70%</h3>
                    <h4 className='font-playfair text-[16px] font-semibold leading-normal not-italic'>Cheaper than any Print Advertising</h4>
                </div>
                <img src={image04} className='rounded-full'></img>
                <div className='w-[180px] h-[180px] pt-[50px] pb-[37px] px-[43px] bg-[#3D3D3D] rounded-t-[72px] text-[#FFF] '>
                    <h3 className='font-inter text-[24px] not-italic leading-normal font-semibold'>150+</h3>
                    <h4 className='font-playfair text-[24px] font-semibold leading-normal not-italic'>Clients Reached</h4>
                </div>
            </div>
            <div className='w-1/3 flex flex-col'>
                <div className='w-[180px] h-[360px] bg-[#83CCFF] rounded-t-[72px]'></div>
                <img src={image03} className='rounded-full w-[180px] h-[180px]'></img>
            </div>
        </div>
    </div>
  )
}

export default Component4
