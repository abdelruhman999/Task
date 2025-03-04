import React from 'react'
import Button from '../Button/Button'

export default function Suggestion() {
  return (
    <div className='w-[1240px] h-[164px] pl-[100px] pr-[100px] 
    justify-between bg-[#DEF2F2] items-center 
    flex  rounded-[16px]'>
        <div className='flex flex-col gap-[15px]'>
            <p className='text-[32px] font-normal leading-[40px] text-[#101B21]'>Suggestion:</p>
            <p className='text-[16px] text-wrap w-[803px] font-normal leading-[20px] text-[#1B566C]'>Do you have an event type you’d like us to add to our website? We’d love to hear your ideas! Suggest a type of social occasion you’d like to see on our platform, and we’ll be happy to include it in our options!</p>
        </div>
        <Button name="Contact Us"/>
       
    </div>
  )
}
