import React, { useEffect } from 'react';

import { Search } from '@components/Search';
import { Information } from '@components/Information';
import { Login } from '@components/Login';
import { Clock } from '@components/Time';
import { Calendar } from '@components/Calendar';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { setLocation } from '@store/actions/LocationActions';
import { getDailyWeather } from '@store/actions/DailyWeatherActions';
import { getCurrentTime } from '@store/actions/TimeActions';
import { getHourlyWeather } from '@store/actions/HourlyWeatherActions';

import {Background, Container, Center,
  InfoContainer, Title } from './styles'
import ErrorBoundary from '@components/ErrorBoundary';

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
  },[dispatch])

  return (
<ErrorBoundary>
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
</ErrorBoundary>
  );
}

export default App;
