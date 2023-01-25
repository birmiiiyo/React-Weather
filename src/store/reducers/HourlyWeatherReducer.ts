import type { InferValueTypes } from 'interfaces/ActionCreators'
import { Hour } from 'interfaces/StormGlass'
import * as actions from 'store/actionCreators/HourlyWeatherActions'

type HourlyWeatherActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export interface IHourlyWeatherState {
  hours: Hour[]
}
const initialState: IHourlyWeatherState = {
  hours: [],
}

export const HourlyWeatherReducer = (
  state = initialState,
  action: HourlyWeatherActionsTypes,
): IHourlyWeatherState => {
  switch (action.type) {
    case 'SET_HOURLY_WEATHER':
      return { ...action.payload }
    default:
      return state
  }
}
