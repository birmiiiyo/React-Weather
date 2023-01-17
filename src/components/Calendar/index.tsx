import React from "react"

import { useAppSelector } from "@hooks/useAppSelector"

import {Event,List} from './styles'
import { days } from "constants/days"

export const Calendar = () => {
  const {events} = useAppSelector(state => state.calendar)
  return (
      <List>
        {events.map(event => <Event key={event.start.dateTime}>
          {days[new Date(event.start.dateTime).getDay()]} {event.start.dateTime.slice(11,16)} GTM+3, {event.summary}
          </Event>)}
      </List>
  )
}
