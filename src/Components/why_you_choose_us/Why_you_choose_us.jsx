import React from 'react'
import logo1 from '../../assets/9c005274ad0fb36166e5594230eef2cb.png'
import logo2 from '../../assets/adfb7013718a4404b8cd59e17172dbbf.png'
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import Word from './Word';
import Words from '../words/Words';
import Button from '../Button/Button';

export default function Why_you_choose_us() {
  return ( 
    <div className='flex flex-col items-center w-full gap-[150px] pt-[50px] pb-[50px]'>

      <Words 
        header="why you choose us"
        text="Choose from our wide collections of invitations based on your special mood"
        width={708}
       />
  
    <div className='flex   gap-[400px]'>

      <div className='flex flex-col gap-[10px]'>

      <div className='flex  gap-[20px]'>
          <FaRegStar className='text-4xl'/>

        <div className='flex flex-col gap-[10px]'>
          <p className='font-normal text-[24px]
          leading-[32px]'>
            Diverse Designs
          </p>
          <p className='font-normal text-[16px]
          leading-[21px] text-wrap w-[491px]'>
           A collection of ready-made designs that can be easily customized in minutes.
          </p>
        </div>
        <MdKeyboardArrowUp className='text-4xl'/>
      </div>

      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word text='Custom Design'/>
     
      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word text='Easy & Flexible Editing'/>
      
      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word text='Track Confirmations & Declines'/>

      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word text='Multiple Sending Channels'/>

      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word text='Flexible Sending Options'/>

      <div className='bg-gray-200 w-full h-[0.5px]'></div>
      
      <Word text='Guest Coordination'/>

      <div className='bg-gray-200 w-full h-[0.5px]'></div>

      <Word
       text='Unique Code for Each Guest'
       />


      <div className='pt-[20px]'>
        <Button name=" Get Started"/>
        
      </div>
      </div>

      <div className=' relative'>
        <img src={logo2}  className='w-[291.6875915527344px]  h-[556px] rounded-[13.68px]' alt="" />
        <div className='absolute top-[-50px] left-[-100px]
         w-[305.98687744140625px] h-[543.9767456054688px]
        bg-[#EBF7F7] rounded-[12.83px] flex flex-col 
        gap-[10px] pt-[40px] items-center'>

          <p className='patua-one-regular'>darf</p>
          <div className='w-[248.61434936523438px]
           h-[381.6336669921875px] pt-[40px] gap-[10px]
           rounded-[28.24px]  bg-[#FFFFFF]
          flex flex-col items-center '>
            <div>
            <p className='font-normal text-[19.4px] leading-[23.44px] text-center'>Event Title Here</p>
            <p className='font-normal text-[11.82px] leading-[19.2px] text-center'>Please show QR code to enter</p>
            </div>
            <img src={logo1} className='w-[143.3605499267578px] h-[143.3605499267578px] rounded-[4.52px]' alt="" />
          
          <div className='flex gap-[50px] items-center pt-[20px]'>
            <div className='text-center'>
              <p className='text-[38.7px] font-normal leading-[46.77px] text-center'>5</p>
              <p className='text-[15.51px] font-normal leading-[19.94px] '>Guest</p>
            </div>
            <div className='text-center'>
              <p className='text-[12.23px] font-normal leading-[15.72px] '>EVENT DATE</p>
              <p className='text-[18.7px] font-normal leading-[22.6px] text-center'>15/5/2024</p>
            </div>
          </div>

          </div>
        </div>
      </div>

    </div>


    </div>
  )
}
