import React, { useState } from 'react'

import { SelectTime } from '@components/Select'

import { convertDateTimeToHours } from '@utils/convertDateTimeToHours'

import { useAppSelector } from '@hooks/useAppSelector'

import { Container, List, Value, Params } from '@styles/weather'

import { filterPerFourHour } from './helpers'

export const HourlyWeather = () => {
  const { hours } = useAppSelector(state => state.hourlyWeather)
  const [activeHours, setActiveHours] = useState(0)
  console.log(hours)

  return (
    <Container id="hourlyWeather">
      <SelectTime
        hours={filterPerFourHour(hours)}
        setActiveHours={setActiveHours}
      />
      <List id="hour">
        {hours?.slice(activeHours, activeHours + 4)?.map(hour => (
          <Value key={hour.humidity.noaa + hour.pressure.noaa}>
            <Params>Time: {convertDateTimeToHours(hour.time)}</Params>
            <Params>temp: {hour.airTemperature.noaa}°C</Params>
            <Params>pressure: {hour.pressure.noaa}mm Hg</Params>
            <Params>visibility: {hour.visibility.noaa}km</Params>
          </Value>
        ))}
      </List>
    </Container>
  )
}
