import React from 'react'
import Button from '../Button/Button'

export default function Get_ten_new_point() {
  return (
    <div className='w-[1239px] h-[218px]
      rounded-[16px] bg-[#F8F8F8]
     flex xs:w-[350px]  xs:flex-col xs:pb-[10px] xs:text-center justify-between  items-center pr-[50px] pl-[50px]'>

        <div className='flex flex-col gap-[10px]'>
            <p className='font-normal xs:text-[24px] text-[32px] leading-[52px] text-[#101B21]'>
            Get 10 free point 
            </p>
            <p className='w-[494px] text-wrap xs:text-[9px] xs:w-[200px] font-normal text-[18px] text-[#101B21]'>
            send your first TST invitation!  Experience how your guests receive their invitations and track their status seamlessly. Try it now and make your event planning effortless!
            </p>
        </div>
        <Button name="Start Now"/> 
    </div>
  )
}
