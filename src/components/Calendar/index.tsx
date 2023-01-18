import React from 'react'

import { useAppSelector } from '@hooks/useAppSelector'

import { weekDays } from 'constants/weekDays'

import { Event, List, InfoText } from './styles'

export const Calendar = () => {
  const { events, isLogin } = useAppSelector(state => state.calendar)
  const { calendarError } = useAppSelector(state => state.error)

  if (calendarError) {
    return <InfoText>{calendarError}</InfoText>
  }
  return (
    <List>
      {!isLogin ? (
        <InfoText>Login to view events</InfoText>
      ) : events.length === 0 ? (
        <InfoText>No upcoming events</InfoText>
      ) : (
        events.map(event => (
          <Event key={event.start.dateTime}>
            {weekDays[new Date(event.start.dateTime).getDay()]}{' '}
            {event.start.dateTime.slice(11, 16)}, {event.summary}
          </Event>
        ))
      )}
    </List>
  )
}
