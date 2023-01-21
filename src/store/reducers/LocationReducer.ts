import * as actions from '../actionCreators/LocationActions'

import type { InferValueTypes } from '@interfaces/ActionCreators'

type LocationActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export interface ILocationState {
  lat: number
  lon: number
}

const initialState: ILocationState = {
  lat: 35.011665,
  lon: 135.768326,
}

export const LocationReducer = (
  state = initialState,
  action: LocationActionsTypes
): ILocationState => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...action.payload }
    default:
      return state
  }
}
