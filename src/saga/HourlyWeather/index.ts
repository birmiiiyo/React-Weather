import { select, takeEvery, put, call } from 'redux-saga/effects'

import { setErrorAtHourlyWeather } from '@store/actions/ErrorActions'
import { setHourlyWeather } from '@store/actions/HourlyWeatherActions'

import { RootState } from '@store/index'

import { IStormGlass } from '@interfaces/StormGlass'

import { getHourlyWeatherFromAPI } from '@API/getHourlyWeather'

import { EHourlyWeatherActionType } from '@store/models/HourlyWeather.model'

export function* workerHourlyWeather() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const { time: date } = yield select((state: RootState) => state.time)
    const data: IStormGlass = yield call(getHourlyWeatherFromAPI, {
      lat,
      lon,
      date,
    })
    yield put(setHourlyWeather({ hours: data.hours }))
    yield put(setErrorAtHourlyWeather(''))
  } catch ({ message }) {
    yield put(
      setErrorAtHourlyWeather('Ошибка при запросе погоды по часам' + message)
    )
  }
}

export function* watcherHourlyWeather() {
  yield takeEvery(
    EHourlyWeatherActionType.GET_HOURLY_WEATHER,
    workerHourlyWeather
  )
}
