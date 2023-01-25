import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Dropdown } from 'components/Dropdown'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useDebounce } from 'hooks/useDebounce'
import { ILocation } from 'interfaces/OpenWeather.location'
import { getDailyWeather } from 'store/actionCreators/DailyWeatherActions'
import { getHourlyWeather } from 'store/actionCreators/HourlyWeatherActions'
import { setLocation } from 'store/actionCreators/LocationActions'
import { getCurrentTime } from 'store/actionCreators/TimeActions'

import { noDigits } from './helpers'
import { Container, Input, Label } from './styles'

export function Search() {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<Array<ILocation>>([])
  const [dropdown, setDropdown] = useState(true)
  const debounced = useDebounce(search)

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length > 0)
    axios
      .get(
        `${process.env.OPEN_WEATHER_CITY_PATH}?q=${debounced}&limit=10&appid=${process.env.OPEN_WEATHER_API_key}`,
      )
      .then(responce => setData(responce.data))
  }, [data?.length, debounced])

  const clickHandler = (lat: number, lon: number) => {
    dispatch(setLocation({ lat, lon }))
    dispatch(getDailyWeather())
    dispatch(getCurrentTime())
    dispatch(getHourlyWeather())
    setDropdown(false)
    setSearch('')
  }
  return (
    <Container>
      <Label>Введите город:</Label>
      <Input
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for city..."
        id="input"
        onKeyDown={noDigits}
        value={search}
      />
      <Dropdown
        search={search}
        cities={data}
        dropdown={dropdown}
        clickHandler={clickHandler}
      />
    </Container>
  )
}
