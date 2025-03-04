import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { BsBell } from "react-icons/bs"; 
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import List_navbar from './List_navbar';
import { CiBoxList } from "react-icons/ci";
export default function Navpar() {
  const [active , setActive] = useState(0)
  const [show,setShow] = useState(false)
  return (
    <div className='w-full '>
    <div className='flex bg-white xs:p-[10px] shadow-lg  pt-[16px]  flex-col gap-[20px] '>
    <div className=' pl-[100px] xs:pl-0 xs:pr-0 pr-[100px] xs:justify-center xs:gap-[20px] items-center flex justify-between'>
    
    
    
      <p className='patua-one-regular '>draf</p>

      <div className='relative '>
        <input
         placeholder='Search'
         type="search"
         className='w-[380px] h-[44px] 
        pt-[2px] xs:w-[250px]  outline-none
         text-[16px] pl-[40px] 
        rounded-[169px] border-gray-50
         text-[#417284] poppins-thin 
         border-[1px] bg-[#FAFAFA]
        ' />
        <div className='absolute top-[8px] xs:top-[12px] left-[10px]'>
          <BiSearchAlt className='xs:text-[20px] text-[30px]'/>
        </div>
      </div>

      <div className='flex xs:hidden items-center gap-2'>

        <div className='size-[48px] rounded-[12px]
        border-[1px] xs:size-[40px] p-[12px] border-gray-200
        flex justify-center items-center'>
            <BsBell/>
        </div>

        <div className='w-[80px] h-[48px]
         rounded-[10px] border-[1px]
         p-[12px] gap-[10px] xs:w-[80px]
         xs:h-[40px] border-gray-200
         flex justify-center items-center'>
           <IoPersonOutline />
           <IoIosArrowDown />
          
        </div>

        <div className='w-[48px]
        h-[50px] text-sm
        rounded-[10px]
        border-[1px] p-[12px]
         border-gray-200
          xs:w-[80px]
         xs:h-[40px]
        flex justify-center
         text-blue-500 items-center
         '>
            العربيه
        </div>
      </div>

      <div className=' relative hidden xs:block pr-1'>
      <CiBoxList
      onClick={()=>{
        setShow(!show)
      setActive(0)
      }}
      className='text-3xl cursor-pointer' 
      />
      {
      show&&

      <div className='absolute 
      flex flex-col bg-gray-100
      rounded-lg  z-10
       gap-[10px] top-[40px]
        right-[50px] pb-[20px]
       '>

    <div className='font-normal
     text-[18px]  
     flex flex-col p-[20px] 
     items-start
     gap-[10px]  text-xs
     leading-[23px] '>
     <div
     onClick={()=>{
      setActive(0)
     }}
     className={`cursor-pointer flex items-center justify-center ${active === 0 ? ' bg-[#58BEBF] text-white text-sm w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Home
     </div>

     <div
      className='relative '
     onClick={()=>{
      setActive(1)
     }}
    >
       <p 
        className={`cursor-pointer flex text-center items-center justify-center ${active === 1 ? ' bg-[#58BEBF] text-white text-sm w-[79px] h-[40px] rounded-[101px] ': ''} `}>Wedding</p>
      {
        active === 1 &&
       
            <List_navbar
            li={[
              'Classic',
              'Modern',
              ' Floral',
              'Greenery',
              'Romantic'
            ]}
            />
     
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
        <List_navbar
      
        li={[
          'New porn',
          'Baby shower',
          ' Bachelorhood',
        
        ]}
        />
       
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
        <List_navbar
      
        li={[
          'Lanch Parties',
          'Business Anniversaries',
          ' Soft Openings',
        
        ]}
        />
       
      }
     </div>
     <div
     className='relative'
     onClick={()=>{
      setActive(4)
     }}
    >
      <p  className={`cursor-pointer  flex justify-center items-center ${active === 4 ? ' bg-[#58BEBF] text-sm text-white w-[79px] h-[40px] rounded-[101px] ': ''}`}>
      Kids
      </p>

      {
        active === 4 &&
      
                <List_navbar
        
                li={[
                  ' Birthday',
                  ' Graduation',
                  '  parties',
                
                ]}
              />
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

        <List_navbar
        
        li={[
          ' Save the date',
          ' GraBaby Showerduation',
          '  Bachelorette',
          '  Professional',
        
        ]}
      />
       
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
        <List_navbar
        
        li={[
          ' After Partise',
        ]}
      />
      }
     </div>
     
    </div>

          

         <div className='flex p-2 items-center gap-2'>
            <div className='size-[48px] rounded-[12px]
            border-[1px] xs:size-[40px] p-[12px] border-gray-200
            flex justify-center items-center'>
                <BsBell/>
            </div>

            <div className='w-[80px] h-[48px]
            rounded-[10px] border-[1px]
            p-[12px] gap-[10px] xs:w-[80px]
            xs:h-[40px] border-gray-200
            flex justify-center items-center'>
              <IoPersonOutline />
              <IoIosArrowDown />
            </div>

            <div className='w-[48px]
            h-[50px] text-sm
            rounded-[10px]
            border-[1px] p-[12px]
            border-gray-200
              xs:w-[80px]
            xs:h-[40px]
            flex justify-center
            text-blue-500 items-center
            '>
                العربيه
            </div>

        </div>

                    

      </div>

      }

      </div>

    </div>

    <div className=' bg-gray-100 h-[0.5px] xs:hidden'></div>


    <div className='font-normal
     text-[18px] pl-[100px]  
     flex p-1 items-center
      gap-[40px]  xs:hidden
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
       
            <List_navbar
         
            li={[
              'Classic',
              'Modern',
              ' Floral',
              'Greenery',
              'Romantic'
            ]}
            />
     
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
        <List_navbar
      
        li={[
          'New porn',
          'Baby shower',
          ' Bachelorhood',
        
        ]}
        />
       
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
        <List_navbar
      
        li={[
          'Lanch Parties',
          'Business Anniversaries',
          ' Soft Openings',
        
        ]}
        />
       
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
      
                <List_navbar
        
                li={[
                  ' Birthday',
                  ' Graduation',
                  '  parties',
                
                ]}
              />
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

        <List_navbar
        
        li={[
          ' Save the date',
          ' GraBaby Showerduation',
          '  Bachelorette',
          '  Professional',
        
        ]}
      />
       
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
        <List_navbar
        
        li={[
          ' After Partise',
        ]}
      />
      }
     </div>
     
    </div>
    </div>



    </div>
  )
}
