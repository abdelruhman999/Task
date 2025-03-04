import React from 'react'
import List from './List'
import Button from '../Button/Button'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Niavigation() {
  return (
    <div className='pt-[164px] w-full'>

    <div className='  bg-[#FAFAFA]'>
        <div className='flex  h-[192px]
        pt-[64px] pr-[120px] xs:pl-0 xs:flex-col
        pl-[120px] pb-[64px] xs:items-center xs:pr-0
        bg-[#FFF6E7] xs:gap-[20px] xs:h-[300px] justify-between xs:text-center'>
            
            <p className='text-wrap w-[327px] 
            font-normal text-[24px] 
            leading-[32px] '>
            Join Our Newsletter to Keep Up To Date With Us!
            </p>

            <div className='flex gap-[10px]'>
                <input
                placeholder='Enter your Email'
                className='w-[324px] h-[50px]
                rounded-[8px] pt-[10px]
                pr-[32px] pb-[10px] pl-[32px]
                bg-[#FFFFFF] text-[14px] font-normal
                leading-[18px] xs:w-[200px] text-[#909098] outline-none'
                type="text" />
                <Button name="Subscribe"/>
            </div>
        </div>

        <div className='pt-[64px] pl-[100px]
         pr-[100px] xs:pl-5 xs:pr-0
        flex flex-col w-full gap-[50px] '>

        <div className='flex justify-between  xs:gap-[15px] xs:flex-col'>
            <p className='patua-one-regular'>darf</p>


            <div className='flex xs:flex-col xs:gap-[50px] gap-[100px]'>
            <List
            header={'Company'}
            li={[
           ' About Us',
           ' Services',
          '  FAQ',
           ' Pricing'
            ]}
            />
            <List
            header={'Resources'}
            li={[
           ' My Events',
           ' Personal design',
          '  How to - Blog',
           ' Invitations'
            ]}
            />
            <List
            header={'Help'}
            li={[
           ' Contact Us',
           ' Cookie Policy',
          '  Terms & Conditions',
           ' Privacy Policy'
            ]}
            />
            </div>

           
            
        </div>

        <div className='bg-[#424255] w-[1200px] h-[1px]'></div>

        <div className='flex items-center justify-between'>
            <p className='text-wrap w-[223px]
            font-normal xs:text-[8px] text-[16px] leading-[20px]'>
                © 2024 darf. All rights reserved.
            </p>
            <div className='flex text-3xl xs:text-xl gap-[20px]'>
                <FaFacebook/>
                <FaLinkedin/>
                <FaTwitter/>

            </div>
        </div>

        </div>
        

    </div>
    </div>
  )
}
