import React, { FC } from 'react'

import { Item, List } from './styles'
import { DropdownProps } from './types'

export const Dropdown: FC<DropdownProps> = ({
  search,
  cities,
  dropdown,
  clickHandler,
}) => {
  const changeLocation = (lat: number, lon: number) => () => {
    clickHandler(lat, lon)
  }
  return (
    <>
      {dropdown && (
        <List id="dropdown">
          {!cities.length && search.length > 2 ? (
            <Item>Not found</Item>
          ) : (
            cities?.map(city => (
              <Item
                key={city.lat + city.lon}
                onClick={changeLocation(city.lat, city.lon)}
              >
                {city.name} {city.state} {city.country}
              </Item>
            ))
          )}
        </List>
      )}
    </>
  )
}
