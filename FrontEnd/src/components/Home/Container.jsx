import React from 'react'
import Component3 from './Component3'
import Component2 from './Component2'
import Component4 from './Component4'
import Component5 from './Component5'
import SubscribeForm from './SubscribeForm'

function Container() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-custom-gradient relative sm:p-0'>
        <div className='w-[320px] h-[602px] bg-[#0F40A8] flex-shrink-0 absolute right-0 top-0 hidden lg:inline-block'></div>
        <div className='w-[12px] h-[557.372px] flex-shrink-0 bg-[#83CCFF] absolute top-0 left-[80px] hidden lg:inline-block'></div>
        <div className='w-[12px] h-[1311px] flex-shrink-0 bg-[#3A65B1] absolute top-[557.372px] left-[80px] hidden lg:inline-block'></div>
        <Component2></Component2>
        <Component3></Component3>
        <Component4></Component4>
        <Component5></Component5>
        <div className='w-full px-4 py-10 lg:py-24 flex justify-center items-center'>
          <SubscribeForm></SubscribeForm>
        </div>
    </div>
  )
}

export default Container
