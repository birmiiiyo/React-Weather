import { all } from 'redux-saga/effects';
import { watcherCurrentTime } from './CurrentTime';
import { watcherDailyWeather } from './DailyWeather';

export function* rootSaga() {
  console.log('start sagas');
  yield all([watcherDailyWeather(), watcherCurrentTime()])
}