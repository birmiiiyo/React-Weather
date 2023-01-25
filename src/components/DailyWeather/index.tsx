import React, { useState } from 'react'

import { weekDays } from 'constants/weekDays'
import { useAppSelector } from 'hooks/useAppSelector'
import {
  Button,
  Container,
  Day,
  Icon,
  List,
  Params,
  TimeOfDay,
  Value,
} from 'styles/weather'
import { getImage } from 'utils/getIcons'

export function DailyWeather() {
  const [time, setTime] = useState<'day' | 'night'>('day')
  const list = useAppSelector(state => state.dailyWeather.list)
  const dailyWeatherError = useAppSelector(
    state => state.error.dailyWeatherError,
  )
  const switchTime = () => {
    if (time === 'day') {
      setTime('night')
    } else {
      setTime('day')
    }
  }
  return (
    <Container id="dailyWeather">
      {dailyWeatherError || (
        <>
          {' '}
          <TimeOfDay>
            Weather at: <Button onClick={switchTime}>{time}</Button>
          </TimeOfDay>
          <List id="day">
            {list?.map(
              ({ dt, weather, temp, sunrise, feels_like, clouds, speed }) => (
                <Value key={sunrise}>
                  <Day>
                    {weekDays[new Date(dt * 1000).getDay()]}
                    <Icon src={getImage(weather[0].main)} />
                  </Day>
                  <Params>
                    {time}:{' '}
                    {(temp[time] - 273).toFixed(1) === '-0.0'
                      ? '0.0'
                      : (temp[time] - 273).toFixed(1)}
                    °C
                  </Params>
                  <Params>
                    Feels like: {(feels_like[time] - 273).toFixed(1)}°C
                  </Params>
                  <Params>Overcast: {clouds}%</Params>
                  <Params>Wind speed: {speed}m/s</Params>
                </Value>
              ),
            )}
          </List>
        </>
      )}
    </Container>
  )
}
