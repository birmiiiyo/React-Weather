import React from "react"

import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { getCalendarEvents } from "@actions/CalendarActions"

import {Container,Event,List} from './styles'
import { days } from "constants/days"

export const Calendar = () => {
  const dispatch = useAppDispatch()
  const {events} = useAppSelector(state => state.calendar)
  
  return (
    <Container>
      <button onClick={()=> dispatch(getCalendarEvents())}>get events</button>
      <List>
        {events.map(event => <Event key={event.start.dateTime}>
          {days[new Date(event.start.dateTime).getDay()]} {event.start.dateTime.slice(11,16)} GTM+3, {event.summary}
          </Event>)}
      </List>
    </Container>
  )
}
