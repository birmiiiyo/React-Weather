import { IEventItem } from '@interfaces/Calendar'

export const getCalendarEvents = () =>
  <const>{
    type: 'GET_EVENTS',
  }

export const setCalendarEvents = (events: IEventItem[]) =>
  <const>{
    type: 'SET_EVENTS',
    payload: events,
  }

export const userLogin = () =>
  <const>{
    type: 'LOGIN_USER',
  }

export const userLogout = () =>
  <const>{
    type: 'LOGOUT_USER',
  }
