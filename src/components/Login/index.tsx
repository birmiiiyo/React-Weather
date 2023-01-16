import React, { useEffect } from 'react'
import {Background,LoginButton} from './styles'
import { apiCalendar } from 'utils/Calendar'
import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { changeLoginStatus } from '@store/actions/CalendarActions'


export const Login = () => {
  const dispatch = useAppDispatch()
  const {isLogin} = useAppSelector(state => state.CalendarReducer)
  console.log(apiCalendar.tokenClient);

  const handleItemClick = () => {
        if (!isLogin) {
          console.log(apiCalendar.tokenClient);
          apiCalendar.handleAuthClick()
          console.log(apiCalendar.tokenClient);
        } else {
          apiCalendar.handleSignoutClick();
        }
      }
      console.log(apiCalendar.sign);
    return (<Background>
        <LoginButton onClick={()=>handleItemClick()}>{isLogin ? 'Выйти' : 'Войти'}</LoginButton>
    </Background>)
}