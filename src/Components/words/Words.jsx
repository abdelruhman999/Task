import React from 'react'

export default function Words(props) {
  return (
    <div className='text-center  flex flex-col items-center'>
    <p className='font-normal xs:text-[20px] text-[32px] leading-[52px] text-[#101B21]'>{props.header}</p>
    <p className={`text-[21px] font-normal
        leading-[28px] xs:leading-normal  xs:text-wrap
           xs:text-[10px] xs:w-[300px] 
           text-[#1B566C] text-center
        text-wrap w-[992px]`}
     >
        {props.text}
    </p>
</div>
  )
}
