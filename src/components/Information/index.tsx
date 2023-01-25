import React from 'react'

import { Search } from 'components/Search'
import { Clock } from 'components/Time'
import { useAppSelector } from 'hooks/useAppSelector'

import { InfoContainer, Title } from './styles'

export function Information() {
  const countryName = useAppSelector(state => state.time.countryName)
  const city = useAppSelector(state => state.dailyWeather.city)

  return (
    <InfoContainer>
      <Clock />
      <Search />
      <Title id="city">
        {city?.name}, {countryName}
      </Title>
    </InfoContainer>
  )
}
