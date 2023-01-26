import React, { useEffect, useRef, useState } from 'react'

import { months } from 'constants/months'
import { weekDays } from 'constants/weekDays'
import { convertDateTimeToHours } from 'utils/convertDateTimeToHours'

import { DateInfo, Time, Wrapper } from './styles'

export function Clock() {
  const [time, setTime] = useState<Date>(() => new Date())
  const timeRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    timeRef.current = setInterval(() => {
      const date = new Date()
      if (date.getMinutes() !== time.getMinutes()) {
        setTime(date)
      }
    }, 1000)

    return () => clearInterval(timeRef.current)
  }, [time])
  return (
    <Wrapper>
      <Time id="hour">{convertDateTimeToHours(time)}</Time>
      <DateInfo>{`${weekDays[time.getDay()]}, ${months[time.getMonth()]}
         ${time.getDate()}, ${time.getFullYear()}`}</DateInfo>
    </Wrapper>
  )
}
