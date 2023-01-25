import React from 'react'

import { CalendarEvent } from 'components/Event'
import { useAppSelector } from 'hooks/useAppSelector'

import { InfoText, List } from './styles'

export function Calendar() {
  const { events, isLogin } = useAppSelector(state => state.calendar)

  return (
    <List id="calendars">
      {!isLogin ? (
        <InfoText>Login to view events</InfoText>
      ) : events.length === 0 ? (
        <InfoText>No upcoming events</InfoText>
      ) : (
        events.map(({ start, summary }) => (
          <CalendarEvent startTime={start.dateTime} summary={summary} />
        ))
      )}
    </List>
  )
}
