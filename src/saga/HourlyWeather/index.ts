import { select, takeEvery, put, call } from 'redux-saga/effects'

import { setErrorAtHourlyWeather } from '@store/actionCreators/ErrorActions'
import { setHourlyWeather } from '@store/actionCreators/HourlyWeatherActions'

import { RootState } from '@store/index'

import { IStormGlass } from '@interfaces/StormGlass'

import { getHourlyWeatherFromAPI } from '@API/getHourlyWeather'

export function* workerHourlyWeather() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const { time } = yield select((state: RootState) => state.time)

    const data: IStormGlass = yield call(getHourlyWeatherFromAPI, {
      lat,
      lon,
      formatted: time,
    })
    yield put(setHourlyWeather({ hours: data.hours }))
  } catch ({ message }) {
    yield put(
      setErrorAtHourlyWeather('Ошибка при запросе погоды по часам' + message)
    )
  }
}

export function* watcherHourlyWeather() {
  yield takeEvery('GET_HOURLY_WEATHER', workerHourlyWeather)
}
