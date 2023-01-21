import * as actions from '../actionCreators/CalendarActions'

import type { InferValueTypes } from '@interfaces/ActionCreators'
import { IEventItem } from '@interfaces/Calendar'

type CalendarActionsTypes = ReturnType<InferValueTypes<typeof actions>>

interface ICalendarState {
  isLogin: boolean
  events: IEventItem[]
}

const initialState: ICalendarState = {
  isLogin: false,
  events: [],
}

export const CalendarReducer = (
  state = initialState,
  action: CalendarActionsTypes
): ICalendarState => {
  switch (action.type) {
    case 'SET_EVENTS':
      return { ...state, events: [...action.payload] }
    case 'LOGIN_USER':
      return { ...state, isLogin: true }
    case 'LOGOUT_USER':
      return { ...state, isLogin: false }
    default:
      return state
  }
}
