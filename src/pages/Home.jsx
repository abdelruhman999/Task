import React from 'react'
import Navpar from '../Components/Navpar/Navpar'
import Slider from '../Components/Slider/Slider'
import Get_ten_new_point from '../Components/Get_ten_new_point/Get_ten_new_point'
import Why_you_choose_us from '../Components/why_you_choose_us/Why_you_choose_us'
import Invitations from '../Components/What_type_of_invitations/invitations'
import Card_invitations from '../Components/Card_invitations/Card_invitations'
import logo1 from '../assets/4d25abb6113895ad5fb7287b5107511b.png'
import logo2 from '../assets/203670051c62c4be7dc78fc3642b1fb6.png'
import Suggestion from '../Components/Suggestion/Suggestion'
import Subscription_plans from '../Components/Subscription_plans/Subscription\'_plans'
import Niavigation from '../Components/Niavigation/Niavigation'

export default function Home() {
  return (
    <div className='flex flex-col gap-[20px] items-center w-full'>
    <Navpar/>
    <Slider/>
    <Get_ten_new_point/>
    <Why_you_choose_us/>
    <Invitations/>
    <Card_invitations
    text1='Card invitations'
    text2='CLASSIC STATIONERY-INSPIRED DESIGNS'
    text3='Elevate your event with curated envelopes, liners, and stamps'
    text4='Exclusive partner collections with world-class designers'
    text5='Send in minutes via email, text, or shareable link'
    logo={logo1}
    />
    <Card_invitations
      text1='Animated invitations'
      text2='CASUAL, ANIMATED INVITE TEMPLATES'
      text3='Customize any template with photos, GIFs, stickers, and fonts'
      text4='Hundreds of free designs for any occasion'
      text5='Send in minutes via email, text, or shareable link'
    logo={logo2}
    flexDirection='row-reverse'
    />
    <Suggestion/>
    <Subscription_plans/>
    <Niavigation/>
   
    </div>
  )
}
