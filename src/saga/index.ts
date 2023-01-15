import { RootState } from './../store/index';
import { all, select } from 'redux-saga/effects';
import { watcherCurrentTime } from './CurrentTime';
import { watcherDailyWeather } from './DailyWeather';
import { watcherHourlyWeather } from './HourlyWeather';
import { eventsWatcher } from './Calendar';

export function* rootSaga() {
  console.log('start sagas');
  yield all([watcherDailyWeather(), watcherCurrentTime(),
  watcherHourlyWeather(), eventsWatcher()])
}
