import React from 'react'

export default function Words(props) {
  return (
    <div className='text-center'>
    <p className='font-normal text-[32px] leading-[52px] text-[#101B21]'>{props.header}</p>
    <p className={`text-[21px] font-normal
        leading-[28px]  text-[#1B566C] text-center
        text-wrap`}
        style={{width:`${props.width}`}}
     >
        {props.text}
    </p>
</div>
  )
}
