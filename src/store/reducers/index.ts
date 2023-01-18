import { combineReducers } from 'redux'

import { LocationReducer } from './LocationReducer'
import { DailyWeatherReducer } from './DailyWeaherReducer'
import { TimeReducer } from './TimeReducer'
import { ErrorReducer } from './ErrorReducer'
import { HourlyWeatherReducer } from './HourlyWeatherReducer'
import { CalendarReducer } from './CalendarReducer'

export const rootReducer = combineReducers({
  location: LocationReducer,
  dailyWeather: DailyWeatherReducer,
  time: TimeReducer,
  error: ErrorReducer,
  hourlyWeather: HourlyWeatherReducer,
  calendar: CalendarReducer,
})
