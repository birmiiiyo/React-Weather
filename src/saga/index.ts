import { all } from 'redux-saga/effects';

import { watcherCurrentTime } from './CurrentTime';
import { watcherDailyWeather } from './DailyWeather';
import { watcherHourlyWeather } from './HourlyWeather';
import { eventsWatcher } from './Calendar';

export function* rootSaga() {
  yield all([watcherDailyWeather(), watcherCurrentTime(),
  watcherHourlyWeather(), eventsWatcher()])
}
