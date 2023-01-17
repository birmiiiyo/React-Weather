import React from "react"

import { useAppSelector } from "@hooks/useAppSelector"

import {Event,List} from './styles'
import { weekDays } from "constants/weekDays"

export const Calendar = () => {
  const {events,isLogin} = useAppSelector(state => state.calendar)
  return (
      <List>
        {!isLogin ? <h1 style={{color:'black'}}>Login to view events</h1> : events.length === 1 ? <h1 style={{color:'black'}}>no upcoming events</h1> : events.map(event => <Event key={event.start.dateTime}>
          {weekDays[new Date(event.start.dateTime).getDay()]} {event.start.dateTime.slice(11,16)}, {event.summary}
          </Event>)}
      </List>
  )
}
