import React from 'react'


export default function Card_invitations({logo,flexDirection,text1,text2,text3,text4,text5}) {
  return (
    <div className='pt-[50px]'>
    <div
    className="bg-[#FFF3F5] xs:flex-col xs:w-[350px] 
    xs:gap-[0px] xs:h-[750px] xs:items-center flex  flex-row gap-[50px] w-[1240px] h-[448px] rounded-[20px]"
   style={{ flexDirection: `${flexDirection} ` }}
     >
   
        <img src={logo} className='w-[617px]   h-[448px] rounded-tl-[16px] rounded-bl-[16px]' />
        <div className='flex  flex-col gap-[40px] xs:pl-[25px] items-start xs:pt-[10px] pt-[96px] '>
            <div>
            <p className='font-normal text-[32px] leading-[52px] text-[#101B21]'>{text1}</p>
            <p className='font-normal text-[23px] leading-[30px] text-[#101B21]'>{text2}</p>
            </div>
            <ul className='list-disc font-normal text-[18px] leading-[23px] text-[#1B566C]'>
                <li>{text3}</li>
                <li> {text4}</li>
                <li> {text5}</li>
            </ul>
            <div className='xs:pb-[50px]'>
            <div className='w-[117px] h-[48px] 
            pt-[12px] pr-[32px] pb-[12px] pl-[32px]
            rounded-[101px] text-sm 
             text-center text-[#051116]
              bg-[#FFFFFF] cursor-pointer shadow'
            >
               View all
            </div>

            </div>
        </div>
        
    </div>

    </div>
  )
}
