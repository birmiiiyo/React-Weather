import ApiCalendar from 'react-google-calendar-api'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { IEventsListResponse } from 'interfaces/Calendar'
import {
  setCalendarEvents,
  userLogin,
  userLogout,
} from 'store/actionCreators/CalendarActions'

export const useEvents = () => {
  const dispatch = useAppDispatch()
  const { isLogin } = useAppSelector(state => state.calendar)

  const setLogin = () => {
    if (!isLogin) {
      ApiCalendar.handleAuthClick().then(() => {
        ApiCalendar.listUpcomingEvents(4).then(
          ({ result }: IEventsListResponse) => {
            dispatch(userLogin())
            dispatch(setCalendarEvents(result.items))
          },
        )
      })
    } else {
      ApiCalendar.handleSignoutClick()
      dispatch(userLogout())
      dispatch(setCalendarEvents([]))
    }
  }

  return [isLogin, setLogin] as const
}
