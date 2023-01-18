import { IEventItem } from '@interfaces/Calendar'
import { ECalendarActionType } from '@store/models/Calendar.models'

export const getCalendarEvents = () => ({
  type: ECalendarActionType.GET_EVENTS,
})

export const setCalendarEvents = (events: IEventItem[]) => ({
  type: ECalendarActionType.SET_EVENTS,
  payload: events,
})

export const userLogin = () => ({
  type: ECalendarActionType.LOGIN_USER,
})

export const userLogout = () => ({
  type: ECalendarActionType.LOGOUT_USER,
})
