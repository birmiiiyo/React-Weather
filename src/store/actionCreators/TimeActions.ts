import { ITimeState } from '@store/reducers/TimeReducer'

export const getCurrentTime = () =>
  <const>{
    type: 'GET_CURRENT_TIME',
  }

export const setCurrentTime = (newLocation: ITimeState) =>
  <const>{
    type: 'SET_CURRENT_TIME',
    payload: newLocation,
  }
