import React, { useState } from 'react'

import { SelectTime } from 'components/Select'
import { useAppSelector } from 'hooks/useAppSelector'
import { Container, List, Params, Value } from 'styles/weather'

import { filterPerFourHour } from './helpers'

export function HourlyWeather() {
  const hours = useAppSelector(state => state.hourlyWeather.hours)
  const [activeHours, setActiveHours] = useState(0)

  return (
    <Container id="hourlyWeather">
      <SelectTime
        hours={filterPerFourHour(hours)}
        setActiveHours={setActiveHours}
      />
      <List id="hour">
        {hours?.slice(activeHours, activeHours + 4)?.map(hour => (
          <Value key={hour.humidity.noaa + hour.pressure.noaa}>
            <Params>Time: {hour.time.toString().slice(11, 16)}</Params>
            <Params>temp: {hour.airTemperature.noaa}°C</Params>
            <Params>pressure: {hour.pressure.noaa}mm Hg</Params>
            <Params>visibility: {hour.visibility.noaa}km</Params>
          </Value>
        ))}
      </List>
    </Container>
  )
}
