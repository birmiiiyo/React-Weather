import { combineReducers } from 'redux';

import Time from './TimeReducer'


export const rootReducer = combineReducers({
    Time,
});

export type RootState = ReturnType<typeof rootReducer>;