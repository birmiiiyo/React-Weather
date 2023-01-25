import { combineReducers } from 'redux'

import { CalendarReducer } from './CalendarReducer'
import { DailyWeatherReducer } from './DailyWeaherReducer'
import { ErrorReducer } from './ErrorReducer'
import { HourlyWeatherReducer } from './HourlyWeatherReducer'
import { LocationReducer } from './LocationReducer'
import { TimeReducer } from './TimeReducer'

export const rootReducer = combineReducers({
  location: LocationReducer,
  dailyWeather: DailyWeatherReducer,
  time: TimeReducer,
  error: ErrorReducer,
  hourlyWeather: HourlyWeatherReducer,
  calendar: CalendarReducer,
})
