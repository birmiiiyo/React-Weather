import React, { useEffect } from 'react'

import { Calendar } from 'components/Calendar'
import { ErrorBoundary } from 'components/ErrorBoundary'
import { Information } from 'components/Information'
import { Login } from 'components/Login'
import { Weather } from 'components/Weather'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { getDailyWeather } from 'store/actionCreators/DailyWeatherActions'
import { setErrorAtLocation } from 'store/actionCreators/ErrorActions'
// import { getHourlyWeather } from 'store/actionCreators/HourlyWeatherActions' // всё нормально я обьяснял
import { setLocation } from 'store/actionCreators/LocationActions'
import { getCurrentTime } from 'store/actionCreators/TimeActions'

import { Background, Container } from './styles'

function App() {
  const dispatch = useAppDispatch()
  const img = useAppSelector(state => state.dailyWeather.img)

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { coords } = position
          dispatch(setLocation({ lat: coords.latitude, lon: coords.longitude }))
          dispatch(getDailyWeather())
          dispatch(getCurrentTime())
          // dispatch(getHourlyWeather())
        },
        error => {
          if (error.PERMISSION_DENIED) {
            dispatch(getDailyWeather())
            dispatch(getCurrentTime())
            // dispatch(getHourlyWeather())
          }
        },
      )
    } catch ({ message }) {
      dispatch(setErrorAtLocation(`${message}`))
    }
  }, [dispatch])

  return (
    <ErrorBoundary>
      <Background image={img}>
        <Container>
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
