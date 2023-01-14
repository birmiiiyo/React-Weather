import React, { useState } from 'react'
import {Background,LoginButton} from './styles'

export const Login = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    return (<Background>
        <LoginButton onClick={()=>setIsLogin(!isLogin)}>{isLogin ? 'выйти' : 'войти'}</LoginButton>
    </Background>)
}