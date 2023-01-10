import React from 'react'

import {Container,Input,Label} from './styles'

export const Form = () => {
  return (
    <Container>
        <Label>Введите город:</Label>
        <Input placeholder='City'/>
    </Container>
  )
}
