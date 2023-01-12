import React from 'react'
import { useState, useEffect } from 'react'
import { Wrapper, TimeItem, Time, DayInfo } from './styles'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return function clear() {
      clearInterval(timerId)
    }
  }, [setCurrentTime])

  return (
    <Wrapper>
      <TimeItem>
        <Time>{currentTime.getUTCHours()+':'+ currentTime.getUTCMinutes()}</Time>
      </TimeItem>
      <DayInfo>{currentTime.getDay() +':' +currentTime.getMonth()+1  +':' +currentTime.getFullYear()}</DayInfo>
    </Wrapper>
  )
}