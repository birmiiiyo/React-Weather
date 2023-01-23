import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { convertDateTimeToHours } from '@utils/convertDateTimeToHours'

import { Hour } from '@interfaces/StormGlass'

import { Option, Select } from './styles'

interface ISelectTimeProps {
  hours: Hour[]
  setActiveHours: Dispatch<SetStateAction<number>>
}

export const SelectTime: FC<ISelectTimeProps> = ({ hours, setActiveHours }) => {
  const handleSubmit = (event: ChangeEvent<HTMLSelectElement>) => {
    setActiveHours(Number(event.target.value) * 4)
    event.preventDefault()
  }

  return (
    <Select onChange={handleSubmit} id="selectTime">
      {hours?.slice(0, hours.length - 1)?.map((hour, index) => (
        <Option
          key={hour?.time.toString()}
          value={index}
          defaultValue={0}
          id="optionTime"
        >
          {hour.time.toString().slice(11, 16)} -{' '}
          {hours[index + 1]?.time.toString().slice(11, 16)}
        </Option>
      ))}
    </Select>
  )
}
