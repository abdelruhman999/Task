import React from 'react'

export default function List({header,li}) {
  return (
    <div className='flex flex-col gap-[20px]'>

    <h1 className='font-normal text-[24px] 
    leading-[32px] text-[#122626]'
    >
        {header}
    </h1>

    <ul className='font-normal text-[16px]
    leading-[20px] text-[#122626]
    flex flex-col gap-[5px]'>
        {
            li.map((el)=>{
                return(
                    <li>{el}</li>
                )
            })
        }
      
    </ul>

    </div>
    
  )
}
