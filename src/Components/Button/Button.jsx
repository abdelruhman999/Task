import React from 'react'

export default function Button(props) {
  return (
    <div className='w-[148px]  h-[48px]
    pt-[16px] pb-[16px]
    pr-[30px] pl-[28px]
    bg-[#58BEBF] shadow-lg cursor-pointer flex items-center
     justify-center font-normal leading-[24px]
     text-center text-[#FFFFFF] rounded-[95px]'>
        {props.name}
    </div>
  )
}
