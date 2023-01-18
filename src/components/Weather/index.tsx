import React, { useState } from 'react'

import { DailyWeather } from '@components/DailyWeather'
import { HourlyWeather } from '@components/HourlyWeather'

import { Button, Container } from './styles'

export const Weather = () => {
  const [activeWeather, setActiveWeather] = useState<'daily' | 'hourly'>(
    'daily'
  )
  const switchWeather = () => {
    if (activeWeather === 'daily') {
      setActiveWeather('hourly')
    } else {
      setActiveWeather('daily')
    }
  }
  return (
    <Container>
      <Button onClick={switchWeather} disabled={activeWeather === 'daily'}>
        Daily
      </Button>
      <Button onClick={switchWeather} disabled={activeWeather === 'hourly'}>
        Hourly
      </Button>
      {activeWeather === 'daily' ? <DailyWeather /> : <HourlyWeather />}
    </Container>
  )
}
