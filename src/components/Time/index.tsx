import { useAppSelector } from 'hooks/useAppSelector'
import React from 'react'
import { useState, useEffect } from 'react'
import { getTime } from 'utils/Clock'
import { Wrapper, TimeItem, Time, DayInfo } from './styles'

export const Clock = () => {
  const {countryName,zoneName}= useAppSelector(state => state.Time)
  const [currentTime, setCurrentTime] = useState(new Date())
  const {hours,minutes,period, date,seconds} = getTime(currentTime)

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
        <Time>{`${hours}:${minutes}:${seconds}  ${period}`}</Time>
        <h1>{countryName + ' '+ zoneName}</h1>
      </TimeItem>
      <DayInfo>{date}</DayInfo>
    </Wrapper>
  )
}