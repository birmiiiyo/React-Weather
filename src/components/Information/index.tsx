import React from 'react'

import { Clock } from '@components/Time'

import { useAppSelector } from '@hooks/useAppSelector'

import { InfoContainer, Title } from './styles'
import { Search } from '@components/Search'

export const Information = () => {
  const { countryName } = useAppSelector(state => state.time)
  const { city } = useAppSelector(state => state.dailyWeather)

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
