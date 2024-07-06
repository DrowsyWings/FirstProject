import React from 'react';
import image1 from '../../assets/Rectangle 61.jpg';
import image2 from '../../assets/Rectangle 61 (1).jpg';
import image3 from '../../assets/Rectangle 61 (2).jpg';
import { Link } from 'react-router-dom';

function Component3() {
  return (
    <div className='bg-transparent flex justify-between w-[1077px] z-10 mt-[190px]'>
        <div className='flex gap-[15px] items-center py-10'>
            <img src={image1} alt=""  className='rounded-[51px]'/>
            <img src={image2} alt=""  className='rounded-[51px]'/>
            <img src={image3} alt=""  className='rounded-[51px]'/>
        </div>
        <div className='flex w-[481px] pl-[1.63px] justify-between items-start flex-col'>
            <div className='flex items-start gap-[24px] font-nunito font-normal'>
                <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Right to live</p>
                </div>
                <div className='flex px-[12px] justify-center items-center gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[24px] font-normal leading-normal'>Service</p>
                </div>
            </div>
            <div className='flex flex-col gap-[32px]'>
                <p className='w-[488px] text-[#070707] font-playfair text-[36px] font-medium not-italic leading-normal'>
                    We support Paani Foundation to build Water Wells
                </p>
                <p className='w-[461px] text-[#3D3D3D] font-montserrat text-[20px] not-italic font-medium leading-normal'>   
                    1Rs per bottle consumed is donated by BlueWave to Paani Foundation for building sustainable water channels across the country preventing droughts and saving lives
                </p>
            </div>
            <Link>
                <button className='flex px-[16px] py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF]'>See Case Study</button>
            </Link>
        </div>
    </div>
  )
}

export default Component3
