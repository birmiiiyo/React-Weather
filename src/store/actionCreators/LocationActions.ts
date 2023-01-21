import { ILocationState } from '@store/reducers/LocationReducer'

export const setLocation = (newLocation: ILocationState) =>
  <const>{
    type: 'SET_LOCATION',
    payload: { ...newLocation },
  }
