import React from 'react'
import logo from '../../assets/WhatsApp Image 2025-03-04 at 04.41.58_68384c89.jpg'
export default function Slider() {
  return (
    <div className='relative xs:p-[10px]'>
        <img src={logo} alt="" className='rounded-[30px] xs:rounded-[20px]' />
        <div className='absolute flex flex-col
         items-start justify-center 
         pl-[50px] gap-[15px] xs:gap-[5px] inset-0 
         xs:pl-[15px] 
         '>
            <p className='font-normal text-[24px] 
            leading-[32px] text-wrap xs:leading-normal xs:w-[150px] xs:text-[10px]'
            >
             Online invitations and holiday cards
            </p>
            <p className='font-normal text-[48px] 
            leading-[58px] xs:leading-[29px] xs:text-[20px]'
            >
            20% OFF POINTS
            </p>
            <p className='font-normal 
            text-wrap w-[383px] text-[16px] 
            leading-[20px] xs:leading-[10px] xs:text-[8px] xs:leading-0 xs:w-[150px]'
            >
           Send someone a smile with beautifully designed cards, delivered in seconds. Use code JOY20
            </p>

            <div className='w-[153px] h-[64px]
            pt-[20px] pr-[38px] 
            pb-[20px] pl-[38px] xs:pl-[10px]
            xs:pr-[10px]
            rounded-[121px] font-Abel
             font-normal text-[18px]
             bg-white xs:w-[80px] xs:h-[40px]
             xs:leading-[0px] leading-[24px]
             text-center xs:text-[8px]
             '>

            View all
            </div>
        </div>

        <div className='absolute flex gap-[5px] xs:left-[30%] xs:bottom-[15px] left-[50%] bottom-[10px]'>
            <div className='size-[14px] rounded-full bg-[#CFD1D3] cursor-pointer'></div>
            <div className='size-[14px] rounded-full bg-[#CFD1D3] cursor-pointer'></div>
            <div className='size-[14px] rounded-full bg-[#CFD1D3] cursor-pointer'></div>
            <div className='w-[80px] h-[14px] rounded-[51px] bg-white cursor-pointer'></div>
           
        </div>
    </div>
  )
}
