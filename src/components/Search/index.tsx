/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dropdown } from "@components/Dropdown";
import { getDailyWeather } from "@store/actions/DailyWeatherActions";
import { addLocation } from "@store/actions/LocationActions";
import { getCurrentTime } from "@store/actions/TimeActions";
import { ILocation } from "interfaces/OpenWeather.location";
import axios from 'axios';
import { useAppDispatch } from "hooks/useAppDispatch";
import { useDebounce } from 'hooks/useDebounce';
import React, { useEffect, useRef, useState } from 'react'

import {Container,Input,Label} from './styles'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Array<ILocation>>([])
  const [dropdown, setDropdown] = useState<boolean>(true);
  const debounced = useDebounce(search);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setDropdown((debounced.length > 2) && (data?.length! > 0));
    axios.get(`${process.env.OPEN_WEATHER_CITY_PATH}?q=${debounced}&limit=10&appid=${process.env.OPEN_WEATHER_API_key}`)
    .then(responce => setData(responce.data))
  }, [data?.length, debounced]);

  const clickHandler = (lat:number, lon: number) => {
    dispatch(addLocation({lat,lon}))
    dispatch(getDailyWeather())
    dispatch(getCurrentTime())
    setDropdown(false);
    setSearch('')
  };
  return (
    <Container>
        <Label>Введите город:</Label>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for city..."
          value={search}/>
          <Dropdown search={search} cities={data} dropdown={dropdown} 
          clickHandler={clickHandler}/>
    </Container>
  )
}
