import React from 'react'

export default function List_navbar({li}) {
  return (

        <div 
       
        className='flex bg-gray-100 rounded-lg 
                  pl-[15px] pb-[20px] pt-[15px]
                  absolute top-[50px] w-[250px] left-[20px]  gap-[40px]
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
