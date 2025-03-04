import React from 'react'

export default function Curds(props) {
  return (
    <div className='w-[143px] h-[190px]
    rounded-[13.32px] border-[2px]
    border-[#58BEBF] text-[#58BEBF]
     text-center flex flex-col items-center
     gap-[20px]
   '>
      <div>
       <p className=' text-[39.95px]
        text-center flex flex-col gap-[100px]
        font-bold'>
         {props.number1}
       </p>

       <p className='font-medium text-[16px] 
       leading-[14.32px] '>
        {props.text1} 
         </p>
      </div>
      <div className='w-[123.8435287475586px] h-[0.3px] bg-[#58BEBF]'></div>
      <div className='relative'>
       <p className='font-semibold text-[43.53px]
        leading-[54.41px]'>
         {props.number2} 
        </p>

       <p className='absolute font-bold
       text-[18.14px] leading-[22.97px] top-[-8px] 
       left-[-10px] font-Poppins
       '>
         SR
         </p>
      </div>

   </div>
  )
}
