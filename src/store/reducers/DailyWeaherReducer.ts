import type { InferValueTypes } from 'interfaces/ActionCreators'
import { City, List } from 'interfaces/OpenWeather.weather'
import * as actions from 'store/actionCreators/DailyWeatherActions'

type DailyWeatherActionsTypes = ReturnType<InferValueTypes<typeof actions>>

interface IDailyWeatherState {
  city: City | null
  list: List[] | null
  img: string
}

const initialState: IDailyWeatherState = {
  city: null,
  list: null,
  img: '',
}

export const DailyWeatherReducer = (
  state = initialState,
  action: DailyWeatherActionsTypes,
): IDailyWeatherState => {
  switch (action.type) {
    case 'SET_DAILY_WEATHER':
      return { ...state, ...action.payload }
    case 'SET_WEATHER_IMG':
      return { ...state, img: action.payload }
    default:
      return state
  }
}
