import { call, fork, join, put, select, takeLatest } from 'redux-saga/effects'

import { getCurrentTimeFromAPI } from 'Api/getCurrentTime'
import { getHourlyWeatherFromAPI } from 'Api/getHourlyWeather'
import { IStormGlass } from 'interfaces/StormGlass'
import { ITime } from 'interfaces/TimeZoneDB'
import { setErrorAtHourlyWeather } from 'store/actionCreators/ErrorActions'
import { setHourlyWeather } from 'store/actionCreators/HourlyWeatherActions'
import { RootState } from 'store/index'

function* getTime() {
  const { lat, lon } = yield select((state: RootState) => state.location)
  const data: ITime = yield call(getCurrentTimeFromAPI, { lat, lon })
  return data
}

export function* workerHourlyWeather() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const time = yield fork(getTime)
    const { formatted } = yield join(time)
    const data: IStormGlass = yield call(getHourlyWeatherFromAPI, {
      lat,
      lon,
      time: formatted,
    })

    yield put(setHourlyWeather({ hours: data.hours }))
  } catch ({ message }) {
    yield put(setErrorAtHourlyWeather(`${message}`))
  }
}

export function* watcherHourlyWeather() {
  yield takeLatest('GET_HOURLY_WEATHER', workerHourlyWeather)
}
