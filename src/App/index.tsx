import { Form } from '@components/Input';
import React, { useEffect, useState } from 'react';
import { Information } from '@components/Information';
import { Login } from '@components/Login';
import { Weather } from '@components/Weather';

import {Background, Container} from './styles'

const bgImg = 'https://krot.info/uploads/posts/2021-12/thumbs/1638363519_2-krot-info-p-solnechnii-peizazh-krasivie-foto-2.jpg'
const Img = "https://funart.pro/uploads/posts/2021-03/1617081925_43-p-oboi-solnechnii-peizazh-43.jpg"

function App() {
  const [lat,setLag] = useState(0)
  const [lng,setLng] = useState(0)
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position) => {
      setLag(position.coords.latitude)
      setLng(position.coords.longitude)
    })
  },[])
  return (
    <Background bodyImage={bgImg}>
      <Container image={Img}>
        <Form/>
        <Information/>
        <Weather/>
        <p>{lat}---{lng}</p>
        <p>{process.env.NOT_SECRET_CODE}</p>
      </Container>
      <Login/>
    </Background>
  );
}

export default App;
