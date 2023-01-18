import {
  EErrorActionType,
  IErrorState,
  TErrorType,
} from '@store/models/Error.model'

const initialState: IErrorState = {
  calendarError: '',
  dailyWeatherError: '',
  hourlyWeatherError: '',
  locationError: '',
  timeError: '',
}

export const ErrorReducer = (
  state = initialState,
  action: TErrorType
): IErrorState => {
  switch (action.type) {
    case EErrorActionType.DAILY_WEATHER_ERROR:
      return { ...state, dailyWeatherError: action.payload }
    case EErrorActionType.HOURLY_WEATHER_ERROR:
      return { ...state, hourlyWeatherError: action.payload }
    case EErrorActionType.LOCATION_ERROR:
      return { ...state, locationError: action.payload }
    case EErrorActionType.TIME_ERROR:
      return { ...state, timeError: action.payload }
    case EErrorActionType.CALENDAR_ERROR:
      return { ...state, calendarError: action.payload }
    default:
      return state
  }
}
