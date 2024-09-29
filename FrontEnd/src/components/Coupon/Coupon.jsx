import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/CompanyLogo.svg'
import logo2 from '../../assets/Logo2.svg'
import call from '../../assets/Call.svg'
import call2 from '../../assets/couponCall2.svg'
import msg from '../../assets/message.svg'
import location from '../../assets/location.svg'
import distbottle from '../../assets/couponBottle.svg'
import voucher from '../../assets/couponVoucher.svg'
import { useParams } from 'react-router-dom';

function Coupon() {
  const id = useParams();
  const [blur,setBlur] = useState(false);

  const handleClick=()=>{
    setBlur(true);
  }

  const handlereverse=()=>{
    setBlur(false);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handlereverse();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <div className={`${blur ? "display-flex" : "hidden"} absolute z-10 gap-4`}>
        <p className='hidden lg:block font-inter font-normal mb-2'>Press <span className='text-white bg-black font-bold border-solid border-white border-[2px] px-[6px] py-[4px]'>Esc</span> to go back.</p>
        <img src={voucher}></img>
      </div>
      <div onClick={blur ? handlereverse : null}  className={`${blur ? "blur-3xl" : "blur-0"}`}>
          <div className={`lg:flex gap-[100px] bg-[#0f40a8;] px-[100px] py-[24px] justify-center items-center hidden`}>
          <div>
            <Link to="/"><img src={logo}></img></Link>
          </div>
          <div className='gap-[80px] flex justify-center items-center text-[#ffffff] text-xl font-normal'>
            <div className='flex justify-center items-center gap-[24px]'>
              <img src={call}></img>
              <p>+91  9799995778</p>
            </div>
            <div className='flex justify-center items-center gap-[24px]'>
            <img src={msg}></img>
            <p>aquafree.co.in@gmail.com</p>
            </div>
            <div className='flex justify-center items-center gap-[24px]'>
            <img src={location}></img>
            <p>C-114 (I), Road no 8 VKI, Jaipur</p>
            </div>
          </div>
        </div>
        <div className='flex py-[24px] justify-center items-center bg-gradient-to-r from-[#edf7ff] via-[#d6ecff] to-[#abdaff] lg:hidden'>
          <div className='w-[311px] flex justify-between'>
            <div><img src={logo2}></img></div>
            <button className='px-[12px] py-[4.55px] bg-[#fc581c] text-white text-[9.1px] font-inter tracking-tight font-normal rounded-[21px] flex justify-start items-center gap-[10px]'>
              <p>+91  9799995778</p>
              <img src={call2}></img>
            </button>
          </div>
        </div>
        <div className='flex bg-gradient-to-r from-[#edf7ff] via-[#d6ecff] to-[#abdaff] justify-center items-center'>
          <div className="w-[40%]">
            <img src={distbottle}></img>
          </div>
          <div className='text-[#070707] w-[60%] flex flex-col gap-[15.28px] lg:gap-[48px] font-inter font-normal items-start py-[40px] lg:py-[85px]'>
            <h1 className='text-[40.74px] leading-[38.2px] lg:text-9xl lg:leading-[120px]'>Let’s build a brand together!</h1>
            <p className='text-[7.4px] leading-3 lg:text-2xl lg:leading-9 w-[215px] lg:w-[710px]'>We provide an actionable QR code for each of our advertisers, helping them to convert the leads by offering discounts or other attractions.</p>
            <button onClick={handleClick} className='px-[7.64px] py-[3.18px] lg:px-[24px] lg:py-[10px] text-[#f7f7f7] bg-[#fc581c] text-[7.64px] lg:text-2xl font-medium rounded-[33px] justify-center items-center gap-2.5 inline-flex'>View your Coupon</button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Coupon
