import React, { ChangeEvent, FC } from 'react'

import { convertDateTimeToHours } from 'utils/convertDateTimeToHours'

import { Option, Select } from './styles'
import { ISelectTimeProps } from './types'

export const SelectTime: FC<ISelectTimeProps> = ({ hours, setActiveHours }) => {
  const handleSubmit = (event: ChangeEvent<HTMLSelectElement>) => {
    setActiveHours(Number(event.target.value) * 4)
    event.preventDefault()
  }

  return (
    <Select onChange={handleSubmit} id="selectTime">
      {hours?.slice(0, hours.length - 1)?.map(({ time }, index) => (
        <Option
          key={time.toString()}
          value={index}
          defaultValue={0}
          id="optionTime"
        >
          {convertDateTimeToHours(time)} -{' '}
          {convertDateTimeToHours(hours[index + 1]?.time)}
        </Option>
      ))}
    </Select>
  )
}
