import React, { FC } from 'react'

import { weekDays } from 'constants/weekDays'
import { convertDateTimeToHours } from 'utils/convertDateTimeToHours'

import { Event } from './styles'
import { IEventProps } from './types'

export const CalendarEvent: FC<IEventProps> = ({ startTime, summary }) => (
  <Event key={startTime} id="event">
    {weekDays[new Date(startTime).getDay()]}{' '}
    {convertDateTimeToHours(startTime as unknown as Date)}, {summary}
  </Event>
)
