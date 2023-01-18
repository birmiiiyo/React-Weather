import React, { useEffect } from 'react'

import { Search } from '@components/Search'
import { Weather } from '@components/Weather'
import { Information } from '@components/Information'
import { Login } from '@components/Login'
import { Calendar } from '@components/Calendar'
import { ErrorBoundary } from '@components/ErrorBoundary'

import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'

import { setLocation } from '@store/actions/LocationActions'
import { getDailyWeather } from '@store/actions/DailyWeatherActions'
import { getCurrentTime } from '@store/actions/TimeActions'
import { getHourlyWeather } from '@store/actions/HourlyWeatherActions'

import { Background, Container, Center } from './styles'
import { setErrorAtLocation } from '@store/actions/ErrorActions'

const App = () => {
  const dispatch = useAppDispatch()
  const { img } = useAppSelector(state => state.dailyWeather)

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { coords } = position
          dispatch(setLocation({ lat: coords.latitude, lon: coords.longitude }))
          dispatch(getDailyWeather())
          dispatch(getCurrentTime())
          //dispatch(getHourlyWeather())
        },
        error => {
          if (error.PERMISSION_DENIED) {
            dispatch(getDailyWeather())
            dispatch(getCurrentTime())
            //dispatch(getHourlyWeather())
          }
        }
      )
    } catch ({ message }) {
      dispatch(
        setErrorAtLocation('Ошибка при получении местоположения' + message)
      )
    }
  }, [dispatch])

  return (
    <ErrorBoundary>
      <Background image={img}>
        <Container>
          <Center>
            <Search />
          </Center>
          <Information />
          <Calendar />
          <Weather />
        </Container>
        <Login />
      </Background>
    </ErrorBoundary>
  )
}

export default App
