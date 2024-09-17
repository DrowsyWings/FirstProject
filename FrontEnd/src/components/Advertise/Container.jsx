import React, { Component } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import SubscribeForm from '../Home/SubscribeForm'

function Container() {
  return (
    <div className='w-full bg-[#0F143E] flex flex-col items-center pt-[100px] sm:pt-[120px] relative'>
      <Component1></Component1>
      <Component2></Component2>
      <div className='w-full flex items-center justify-center bg-gradient-to-r from-blue-50 via-blue-100 to-sky-200 px-6 py-16 lg:py-24'>
        <SubscribeForm></SubscribeForm>
      </div>
    </div>
  )
}

export default Container
