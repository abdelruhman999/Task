import React from 'react'
import Button from '../Button/Button'

export default function Suggestion() {
  return (
    <div className='w-[1240px] h-[164px] pl-[100px] pr-[100px] 
    justify-between bg-[#DEF2F2] xs:h-[220px] xs:flex-col items-center 
    flex xs:pb-[10px] rounded-[16px]'>
        <div className='flex flex-col xs:pt-[10px] gap-[15px] xs:text-center'>
            <p className='text-[32px] xs:text[18px] font-normal leading-[40px] text-[#101B21]'>Suggestion:</p>
            <p className='text-[16px] xs:text-[12px] xs:w-[300px] text-wrap w-[803px] font-normal leading-[20px] text-[#1B566C]'>Do you have an event type you’d like us to add to our website? We’d love to hear your ideas! Suggest a type of social occasion you’d like to see on our platform, and we’ll be happy to include it in our options!</p>
        </div>
        <Button name="Contact Us"/>
       
    </div>
  )
}
