import React from 'react'

import { useEvents } from '@hooks/useEvents'

import {Background,LoginButton} from './styles'

export const Login = () => {
    const [isLogin, setLogin] = useEvents()
    return (<Background>
        <LoginButton onClick={setLogin}>{isLogin ? 'Выйти' : 'Войти'}</LoginButton>
    </Background>)
}