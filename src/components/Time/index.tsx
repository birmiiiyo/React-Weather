import { getCurrentTime } from '@store/actions/TimeActions'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import React, {  useEffect } from 'react'
import { Wrapper, DayInfo,Time } from './styles'

export const Clock = () => {
  const dispatch = useAppDispatch()
  const {time} = useAppSelector (state => state.time)
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
     <Time>{time?.toString().slice(-8,-3)}</Time>
      <DayInfo>{time?.toString().slice(0,10)}</DayInfo>
    </Wrapper>
  )
}