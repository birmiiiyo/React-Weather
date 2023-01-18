import {
  EDailyWeatherActionType,
  IDailyWeatherState,
  TDailyWeatherType,
} from '@store/models/DailyWeather.model'

const initialState: IDailyWeatherState = {
  city: null,
  list: null,
  img: '',
}

export const DailyWeatherReducer = (
  state = initialState,
  action: TDailyWeatherType
): IDailyWeatherState => {
  switch (action.type) {
    case EDailyWeatherActionType.SET_DAILY_WEATHER:
      return { ...state, ...action.payload }
    case EDailyWeatherActionType.SET_WEATHER_IMG:
      return { ...state, img: action.payload }
    default:
      return state
  }
}
