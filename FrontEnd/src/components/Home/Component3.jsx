import React from 'react';
import image1 from '../../assets/image1.jfif';
import { Link } from 'react-router-dom';

function Component3() {
  return (
    <div className='bg-transparent flex justify-between items-center sm:flex-row flex-col w-[325px] sm:w-[1077px] z-10 mt-[30px] sm:mt-[190px]'>
        <div className='flex items-center py-10'>
            <img src={image1} alt=""  className='rounded-[26px] sm:rounded-[50px] sm:w-[500px] w-[250px] sm:h-[326px] h-[160px]'/>
        </div>
        <div className='flex sm:w-[481px] w-[228px] pl-[1.63px] justify-between sm:items-start items-center flex-col'>
            <div className='flex justify-center sm:justify-start gap-[24px] font-nunito font-normal w-full'>
                <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Right to live</p>
                </div>
                <div className='flex px-[4.388px] sm:px-[12px] justify-center items-center gap-[3.656px] sm:gap-[10px] rounded-[28px] bg-[#989898]'>
                    <p className='text-[#F7F7FC] text-center text-[8.775px] sm:text-[24px] font-normal leading-normal'>Service</p>
                </div>
            </div>
            <div className='flex flex-col gap-[16px] sm:gap-[32px] items-center sm:items-start'>
                <p className='w-[235px] sm:w-[362px] text-[#070707] font-playfair text-[24px] sm:text-[36px] font-medium not-italic leading-normal text-center sm:text-start'>
                    We support Paani Foundation to build Water Wells
                </p>
                <p className='sm:w-full text-[#3D3D3D] font-montserrat w-[208px] text-[10px] sm:text-[20px] not-italic font-medium leading-normal text-center sm:text-start'>   
                    1Rs per bottle consumed is donated by BlueWave to Paani Foundation for building sustainable water channels across the country preventing droughts and saving lives
                </p>
            </div>
            <Link>
                <button className='flex px-[5.8px] py-[4.3px] sm:px-[16px] sm:py-[12px] rounded-[15px] hover:opacity-80 active:opacity-50 bg-[#FD763A] text-[#FFFFFF] text-[8.775px] sm:text-[16px] mt-[16px] sm:mt-[16px]'>See Case Study</button>
            </Link>
        </div>
    </div>
  )
}

export default Component3
