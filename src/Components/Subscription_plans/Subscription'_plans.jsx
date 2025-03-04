import React from 'react'
import Words from '../words/Words'
import Curds from './Curds'

export default function Subscription_plans() {
  return (
    <div className='flex flex-col gap-[50px] pt-[100px]'>
        <Words 
              header="Subscription plans"
              text="Choose from our wide collections of invitations based on your special mood"
        />
        <div className='flex xs:flex-wrap xs:justify-center gap-[20px]'>

        <Curds 
        number1 = "25"
        text1="Guest"
        number2="167"
        />
        <Curds 
        number1 = "50"
        text1="Guest"
        number2="298"
        />
        <Curds 
        number1 = "100"
        text1="Guest"
        number2="498"
        />
        <Curds 
        number1 = "150"
        text1="Guest"
        number2="675"
        />
        <Curds 
        number1 = "200"
        text1="Guest"
        number2="887"
        />
        <Curds 
        number1 = "300"
        text1="Guest"
        number2="1329"
        />
        <Curds 
        number1 = "500"
        text1="Guest"
        number2="2215"
        />

        </div>

    </div>
  )
}
