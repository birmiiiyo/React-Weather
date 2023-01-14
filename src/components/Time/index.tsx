import { getCurrentTime } from '@store/actions/TimeActions'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import React from 'react'
import { useState, useEffect } from 'react'
import { getTime } from 'utils/Clock'
import { Wrapper, TimeItem, Time, DayInfo } from './styles'

export const Clock = () => {
  const dispatch = useAppDispatch()
  const {time} = useAppSelector (state => state.Time)
  // const {hours, minutes} = getTime(time)
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(getCurrentTime())
    }, 1000*60)

    return function clear() {
      clearInterval(timerId)
    }
  }, [dispatch, time])
  return (
    <Wrapper>
      <TimeItem>
        {time.toString().slice(0,-3)}
      </TimeItem>
        
    </Wrapper>
  )
}