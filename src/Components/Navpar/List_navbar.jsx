import React from 'react'

export default function List_navbar({li}) {
  return (

        <div 
       
        className='flex bg-gray-100 xs:bg-gray-400 rounded-lg 
                  pl-[15px] pb-[20px] pt-[15px] xs:left-[70px]
                  absolute top-[50px] xs:w-[150px]
                   w-[250px] left-[20px]  gap-[40px]
                   xs:text-xs xs:gap-[20px]
                  flex-col items-start z-10 font-semibold'>
                     
                         {
                            li.map((el)=>{
                                return(
                                    <p>{el}</p>
                                )
                            })
                        }
                     
                    
                </div>
      
  
  )
}
