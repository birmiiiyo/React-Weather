import { ILocation } from "interfaces/OpenWeather.location";

import React, { FC } from 'react'

import {Item,List} from './styles'

interface DropdownProps {
  search: string
  cities: Array<ILocation>;
  dropdown:boolean;
  clickHandler: (lat:number, lon:number) => void,
}

export const Dropdown:FC<DropdownProps> = ({search, cities,dropdown,clickHandler }) => {
  const changeLocation = (lat: number,lon: number) => {
    clickHandler(lat, lon)
  }
  return (
    <>{dropdown && (
      <List>
        {(!cities.length && search.length > 2)  ? <Item>Not found</Item> :
        (cities?.map(city => (
          <Item key={city.lat+city.lon} onClick={()=> changeLocation(city.lat, city.lon)}>
            {city.name} {city.state} {city.country}
          </Item>
        )))}
      </List>
    )}</>         
  )
}
