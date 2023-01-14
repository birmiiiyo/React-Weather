import { Search } from '@components/Search';
import React, { useEffect } from 'react';
import { Information } from '@components/Information';
import { Login } from '@components/Login';

import {Background, Container, Center,
  InfoContainer } from './styles'

import { Clock } from '@components/Time';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addLocation } from '@store/actions/LocationActions';
import { getDailyWeather } from '@store/actions/DailyWeatherActions';
import { getCurrentTime } from '@store/actions/TimeActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { getHourlyWeather } from '@store/actions/HourlyWeatherActions';
import { Calendar } from '@components/Calendar';

const bgImg = 'https://krot.info/uploads/posts/2021-12/thumbs/1638363519_2-krot-info-p-solnechnii-peizazh-krasivie-foto-2.jpg'
const Img = "https://funart.pro/uploads/posts/2021-03/1617081925_43-p-oboi-solnechnii-peizazh-43.jpg"

function App() {
  const dispatch = useAppDispatch()
  const {countryName,zoneName} = useAppSelector(state => state.Time)
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {coords} = position
        dispatch(addLocation({lat: coords.latitude, lon:coords.longitude}))
        dispatch(getDailyWeather())
        dispatch(getCurrentTime())
        dispatch(getHourlyWeather())
    },
    error => {
      if(error.PERMISSION_DENIED)
      {
        dispatch(getDailyWeather())
        dispatch(getCurrentTime())
        dispatch(getHourlyWeather())
      }
})
  },[dispatch])

  return (
    <Background bodyImage={bgImg}>
      <Container image={Img}>
        <Center>
          <Search/>
        </Center>
        {/* <button onClick={()=> getHourlyWeatherAPI({lat:27,lon:53})}>hourly weather</button> */}
        <InfoContainer>
          <Clock/>
          <h1>Страна: {countryName}, часовой пояс: {zoneName}</h1>
        </InfoContainer>
        <Calendar/>
        <Information/>
      </Container>
      <Login/>
    </Background>
  );
}

export default App;
