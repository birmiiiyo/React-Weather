import React from "react"

import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { getCalendarEvents } from "@actions/CalendarActions"
import { apiCalendar } from "@utils/Calendar"

import {Container,Event,List} from './styles'

export const Calendar = () => {
  const dispatch = useAppDispatch()
  const {events} = useAppSelector(state => state.CalendarReducer)
  console.log(apiCalendar.handleAuthClick);
  
  return (
    <Container>
      <button onClick={()=> dispatch(getCalendarEvents())}>get events</button>
      <List>
        {events.map(event => <Event key={event.start.dateTime}>
          Time:{event.start.dateTime} - {event.end.dateTime}, Name: {event.summary}, Creator: {event.creator.email}
          </Event>)}
      </List>
    </Container>
  )
}
