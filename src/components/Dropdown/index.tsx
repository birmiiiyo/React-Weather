/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { getDailyWeather } from "@store/actions/DailyWeatherActions";
import { addLocation } from "@store/actions/LocationActions";
import { getCurrentTime } from "@store/actions/TimeActions";
import { ILocation } from "@types/OpenWeather.location";

import React, { Dispatch, FC, SetStateAction} from 'react'
import { useDispatch } from "react-redux";

import {Item,List} from './styles'

interface DropdownProps {
  search: string
    cities: Array<ILocation>;
    dropdown:boolean;
    setDropdown: Dispatch<SetStateAction<boolean>>;
}

export const Dropdown:FC<DropdownProps> = ({search, cities,dropdown,setDropdown }) => {
  const dispatch = useDispatch()
  const clickHandler = (city: ILocation) => {
    const {lat,lon} = city
    dispatch(addLocation({lat,lon}))
    dispatch(getDailyWeather())
    dispatch(getCurrentTime())
    setDropdown(false);
  };
  return (
    <>{dropdown && (
      <List>
        {(!cities.length && search.length > 2)  ? <Item>Not found</Item> :
        (cities?.map(city => (
          <Item key={city.lat+city.lon} onClick={()=>clickHandler(city)}>
            {city.name} {city.state} {city.country}
          </Item>
        )))}
      </List>
    )}</>         
  )
}
