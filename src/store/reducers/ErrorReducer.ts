import { InferValueTypes } from 'interfaces/ActionCreators'
import * as actions from 'store/actionCreators/ErrorActions'

type ErrorActionsTypes = ReturnType<InferValueTypes<typeof actions>>

interface IErrorState {
  locationError: string
  dailyWeatherError: string
  hourlyWeatherError: string
  timeError: string
}

const initialState: IErrorState = {
  dailyWeatherError: '',
  hourlyWeatherError: '',
  locationError: '',
  timeError: '',
}

export const ErrorReducer = (
  state = initialState,
  action: ErrorActionsTypes,
): IErrorState => {
  switch (action.type) {
    case 'DAILY_WEATHER_ERROR':
      return { ...state, dailyWeatherError: action.payload }
    case 'LOCATION_ERROR':
      return { ...state, hourlyWeatherError: action.payload }
    case 'TIME_ERROR':
      return { ...state, locationError: action.payload }
    case 'HOURLY_WEATHER_ERROR':
      return { ...state, timeError: action.payload }
    default:
      return state
  }
}
