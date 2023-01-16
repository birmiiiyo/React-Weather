import React, { useEffect } from 'react';

import { Search } from '@components/Search';
import { Information } from '@components/Information';
import { Login } from '@components/Login';
import { Clock } from '@components/Time';
import { Calendar } from '@components/Calendar';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { setLocation } from '@actions/LocationActions';
import { getDailyWeather } from '@actions/DailyWeatherActions';
import { getCurrentTime } from '@actions/TimeActions';
import { getHourlyWeather } from '@actions/HourlyWeatherActions';

import {Background, Container, Center,
  InfoContainer, Title } from './styles'

const App = () => {
  const dispatch = useAppDispatch()
  const {countryName} = useAppSelector(state => state.time)
  const {city} = useAppSelector(state => state.dailyWeather)
  const {img} = useAppSelector(state => state.dailyWeather)

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {coords} = position
        dispatch(setLocation({lat: coords.latitude, lon:coords.longitude}))
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
    <Background image={img}>
      <Container>
        <Center>
          <Search/>
        </Center>
        <InfoContainer>
          <Clock/>
          <Title>{city?.name}, {countryName}
            </Title>
        </InfoContainer>
        <Calendar/>
        <Information/>
      </Container>
      <Login/>
    </Background>
  );
}

export default App;
