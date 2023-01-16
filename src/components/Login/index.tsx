import React from 'react'

import { apiCalendar } from '@utils/Calendar'
import { useAppSelector } from '@hooks/useAppSelector'

import {Background,LoginButton} from './styles'

export const Login = () => {
  const {isLogin} = useAppSelector(state => state.calendar)

  const handleItemClick = () => {
        if (!isLogin) {
          apiCalendar.handleAuthClick()
        } else {
          apiCalendar.handleSignoutClick();
        }
      }
    return (<Background>
        <LoginButton onClick={()=>handleItemClick()}>{isLogin ? 'Выйти' : 'Войти'}</LoginButton>
    </Background>)
}