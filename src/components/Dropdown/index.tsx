/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { addLocation } from "@store/actions/LocationActions";
import { ILocation } from "@types/OpenWeather.location";

import React, { Dispatch, FC, SetStateAction} from 'react'
import { useDispatch } from "react-redux";

import {Background, Container} from './styles'

interface DropdownProps {
    cities: Array<ILocation>;
    dropdown:boolean;
    setDropdown: Dispatch<SetStateAction<boolean>>;
}

export const Dropdown:FC<DropdownProps> = ({ cities,dropdown,setDropdown }) => {
  const dispatch = useDispatch()
  const clickHandler = (cities: ILocation) => {
    const {lat,lon} = cities
    dispatch(addLocation({lat,lon}))
    setDropdown(false);
  };
  
  return (
            <ul>
              {dropdown && cities?.length === 0
                ? 'Нет элементов'
                : cities?.map(city => (
                    <li key={city.lat+city.lon} onClick={()=>clickHandler(city)}>
                      {city.name}+{city.state}+{city.country}
                    </li>
                  ))}
            </ul>
  )
}
