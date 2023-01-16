import React, { useEffect } from 'react';

import { Search } from '@components/Search';
import { Information } from '@components/Information';
import { Login } from '@components/Login';
import { Clock } from '@components/Time';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addLocation } from '@actions/LocationActions';
import { getDailyWeather } from '@actions/DailyWeatherActions';
import { getCurrentTime } from '@actions/TimeActions';
import { useAppSelector } from '@hooks/useAppSelector';
import { getHourlyWeather } from '@actions/HourlyWeatherActions';
import { Calendar } from '@components/Calendar';

import {Background, Container, Center,
  InfoContainer } from './styles'

const App = () => {
  const dispatch = useAppDispatch()
  const {countryName,zoneName} = useAppSelector(state => state.Time)
  const {img} = useAppSelector(state => state.DailyWeaher)
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {coords} = position
        dispatch(addLocation({lat: coords.latitude, lon:coords.longitude}))
        dispatch(getDailyWeather())
        dispatch(getCurrentTime())
        //dispatch(getHourlyWeather())
    },
    error => {
      if(error.PERMISSION_DENIED)
      {
        dispatch(getDailyWeather())
        dispatch(getCurrentTime())
        //dispatch(getHourlyWeather())
      }
})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Background>
      <Container image={img}>
        <Center>
          <Search/>
        </Center>
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
