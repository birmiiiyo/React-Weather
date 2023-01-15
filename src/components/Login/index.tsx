import React from 'react'
import {Background,LoginButton} from './styles'
import { apiCalendar } from 'utils/Calendar'
import { useAppSelector } from '@hooks/useAppSelector'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { changeLoginStatus } from '@store/actions/CalendarActions'


export const Login = () => {
  const dispatch = useAppDispatch()
  const {isLogin} = useAppSelector(state => state.CalendarReducer)
  
  const handleItemClick = () => {
        if (!isLogin) {
          apiCalendar.handleAuthClick()
        } else {
          apiCalendar.handleSignoutClick();
        }
        dispatch(changeLoginStatus())
      }
    return (<Background>
        <LoginButton onClick={()=>handleItemClick()}>{isLogin ? 'Выйти' : 'Войти'}</LoginButton>
    </Background>)
}