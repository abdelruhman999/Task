import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { BsBell } from "react-icons/bs"; 
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navpar() {
  const [active , setActive] = useState(0)
  return (
    <div className='w-full '>
    <div className='flex bg-white shadow-lg  pt-[16px]  flex-col gap-[20px] '>
    <div className=' pl-[100px]  pr-[100px] items-center flex justify-between'>
    
      <div>
        <p className='patua-one-regular'>draf</p>
      </div>

      <div className='relative '>
        <input
         placeholder='Search'
         type="search"
         className='w-[380px] h-[44px] 
        pt-[2px] outline-none text-[16px] pl-[40px] 
        rounded-[169px] border-gray-50
         text-[#417284] poppins-thin 
         border-[1px] bg-[#FAFAFA]
        ' />
        <div className='absolute top-[8px] left-[10px]'>
          <BiSearchAlt className='  text-[30px]'/>
        </div>
      

      </div>

      <div className='flex gap-2'>

        <div className='size-[48px] rounded-[12px]
        border-[1px] p-[12px] border-gray-200
        flex justify-center items-center'>
            <BsBell/>
          
        </div>

        <div className='w-[80px] h-[48px]
         rounded-[10px] border-[1px]
         p-[12px] gap-[10px] border-gray-200
         flex justify-center items-center'>
           <IoPersonOutline />
           <IoIosArrowDown />
          
        </div>

        <div className='w-[48px]
        h-[50px] text-sm
        rounded-[10px]
        border-[1px] p-[12px]
         border-gray-200
        flex justify-center
         text-blue-500 items-center
         '>
            العربيه
        </div>
      </div>

    </div>

    <div className=' bg-gray-100 h-[0.5px]'></div>


    <div className='font-normal text-[18px] pl-[100px]  
     flex p-1 items-center
      gap-[40px] 
      leading-[23px] '>
     <div
     onClick={()=>{
      setActive(0)
     }}
     className={`cursor-pointer ${active === 0 ? ' bg-[#58BEBF] text-white text-sm w-[79px] h-[40px] rounded-[101px] pt-[8px] pb-[8px] pr-[20px] pl-[20px]': ''}`}>
      Home
     </div>

     <div
      className='relative '
     onClick={()=>{
      setActive(1)
     }}
    >
       <p 
        className={`cursor-pointer ${active === 1 ? ' bg-[#58BEBF] text-white text-sm w-[79px] h-[40px] rounded-[101px] ': ''} p-[10px]`}>Wedding</p>
      {
        active === 1 &&
        <div className='flex bg-gray-100 rounded-lg 
          pl-[15px] pb-[20px] pt-[15px]
          absolute top-[50px] left-[20px] w-[180px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>Classic</p>
          <p>Modern</p>
          <p>Floral</p>
          <p>Greenery</p>
          <p>Romantic</p>
        </div>
      }
     </div>
     <div
      className='relative '
     onClick={()=>{
      setActive(2)
     }}
    >
     <p  className={`cursor-pointer flex items-center justify-center  ${active === 2 ? ' bg-[#58BEBF] w-[79px]  h-[40px] rounded-[101px]  text-white text-sm': ''}`}>Parties</p>
      

      {
        active === 2 &&
        <div className='flex bg-gray-100 rounded-lg 
        pl-[15px] pb-[20px] pt-[15px]
         absolute top-[50px] left-[20px] w-[150px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>New porn</p>
          <p>Baby shower</p>
          <p>Bachelorhood</p>
         
        </div>
      }
     </div>
     <div
     className='relative'
     onClick={()=>{
      setActive(3)
     }}
    >
      <p  className={`cursor-pointer flex justify-center items-center ${active === 3 ? ' bg-[#58BEBF] text-sm text-white w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Business
      </p>

      {
        active === 3 &&
        <div className='flex bg-gray-100 rounded-lg 
        pl-[15px] pb-[20px] pt-[15px]
         absolute top-[50px] left-[20px] w-[250px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>Lanch Parties</p>
          <p>Business Anniversaries</p>
          <p>Soft Openings</p>
         
        </div>
      }
     </div>
     <div
     className='relative'
     onClick={()=>{
      setActive(4)
     }}
    >
      <p  className={`cursor-pointer flex justify-center items-center ${active === 4 ? ' bg-[#58BEBF] text-sm text-white w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Kids
      </p>

      {
        active === 4 &&
        <div className='flex bg-gray-100 rounded-lg 
        pl-[15px] pb-[20px] pt-[15px]
         absolute top-[50px] left-[20px] w-[250px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>Birthday</p>
          <p>Graduation</p>
          <p>parties</p>
         
        </div>
      }
     </div>
     <div
     className='relative'
     onClick={()=>{
      setActive(5)
     }}
    >
      <p  className={`cursor-pointer flex justify-center items-center ${active === 5 ? ' bg-[#58BEBF] text-sm text-white w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Flyers
      </p>

      {
        active === 5 &&
        <div className='flex bg-gray-100 rounded-lg 
        pl-[15px] pb-[20px] pt-[15px]
         absolute top-[50px] left-[20px] w-[250px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>Save the date</p>
          <p>Baby Shower</p>
          <p>Bachelorette</p>
          <p>Professional</p>
         
        </div>
      }
     </div>

     <div
     className='relative'
     onClick={()=>{
      setActive(6)
     }}
    >
      <p  className={`cursor-pointer flex justify-center items-center ${active === 6 ? ' bg-[#58BEBF] text-sm text-white w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Gradution
      </p>

      {
        active === 6 &&
        <div className='flex bg-gray-100 rounded-lg 
        pl-[15px] pb-[20px] pt-[15px]
         absolute top-[50px] left-[20px] w-[250px] gap-[40px]
          flex-col items-start z-10 font-semibold'>
          <p>After Partise</p>
          
         
        </div>
      }
     </div>
     
    </div>
    </div>



    </div>
  )
}
