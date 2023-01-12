import { combineReducers } from 'redux';

import Location from './LocationReducer'
import DailyWeaher from './DailyWeaherReducer'
import Time from './TimeReducer'

export const rootReducer = combineReducers({
    Location,
    DailyWeaher,
    Time
});
