import React from 'react'
import {Background,LoginButton} from './styles'
import { apiCalendar } from 'utils/Calendar'


export const Login = () => {
    const handleItemClick = (name: string):void => {
        if (name === 'sign-in') {
          apiCalendar.handleAuthClick()
        } else if (name === 'sign-out') {
          apiCalendar.handleSignoutClick();
        }
      }
    return (<Background>
        <LoginButton onClick={()=>handleItemClick('sign-out')}>sign-out</LoginButton>
        <LoginButton onClick={()=>handleItemClick('sign-in')}>sign-in</LoginButton>
    </Background>)
}