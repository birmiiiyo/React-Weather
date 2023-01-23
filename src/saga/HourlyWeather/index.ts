import { select, put, call, takeLatest, join, fork } from 'redux-saga/effects'

import { setErrorAtHourlyWeather } from '@store/actionCreators/ErrorActions'
import { setHourlyWeather } from '@store/actionCreators/HourlyWeatherActions'

import { RootState } from '@store/index'

import { IStormGlass } from '@interfaces/StormGlass'

import { getHourlyWeatherFromAPI } from '@API/getHourlyWeather'
import { getCurrentTimeFromAPI } from '@API/getCurrentTime'
import { ITime } from '@interfaces/TimeZoneDB'

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
    yield put(
      setErrorAtHourlyWeather('Ошибка при запросе погоды по часам' + message)
    )
  }
}

export function* watcherHourlyWeather() {
  yield takeLatest('GET_HOURLY_WEATHER', workerHourlyWeather)
}
