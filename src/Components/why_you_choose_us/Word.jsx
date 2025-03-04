import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export default function Word(props) {
  return (
    
      <div className='flex   xs:gap-[10px]  justify-between'>
   
           <div className='flex  gap-[20px]'>
             <FaRegStar className='text-4xl xs:text-2xl'/>
             <p className='font-normal  text-[24px]
             leading-[32px]'>
          {props.text}
             </p>
           </div>
           <MdOutlineKeyboardArrowDown className='text-4xl xs:text-2xl'/>
         </div>
  )
}
