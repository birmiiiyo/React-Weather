import { combineReducers } from 'redux';

import Location from './LocationReducer'
import DailyWeaher from './DailyWeaherReducer'
import Time from './TimeReducer'
import Error from './ErrorReducer'
import HourlyWeather from './HourlyWeatherReducer'

export const rootReducer = combineReducers({
    Location,
    DailyWeaher,
    Time,
    Error,
    HourlyWeather,
});
