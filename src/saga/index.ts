import { all } from 'redux-saga/effects'

import { watcherCurrentTime } from './CurrentTime'
import { watcherDailyWeather } from './DailyWeather'
import { watcherHourlyWeather } from './HourlyWeather'

export function* rootSaga() {
  yield all([
    watcherDailyWeather(),
    watcherCurrentTime(),
    watcherHourlyWeather(),
  ])
}
