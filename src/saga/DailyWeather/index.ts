import { RootState } from '@store/index'
import { select, takeEvery, put, call } from 'redux-saga/effects'

import { getDailyWeatherFromAPI } from '@API/getDailyWeather'
import { getWeatherImagesAPI } from '@API/getImage'

import { EDailyWeatherActionType } from '@store/models/DailyWeather.model'

import {
  setDailyWeather,
  setWeatherImg,
} from '@store/actions/DailyWeatherActions'
import { setErrorAtDailyWeather } from '@store/actions/ErrorActions'

import { IOpenWeather } from '@interfaces/OpenWeather.weather'
import { MockapiRequest } from '@interfaces/Mockapi'

import { randomInteger } from '@utils/randomInt'

export function* workerDailyWeather() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const data: IOpenWeather = yield call(getDailyWeatherFromAPI, { lat, lon })
    yield put(setDailyWeather({ city: data.city, list: data.list }))
    const image: MockapiRequest[] = yield call(
      getWeatherImagesAPI,
      data.list[0].weather[0].main
    )
    yield put(setWeatherImg(image[randomInteger()].src))
  } catch ({ message }) {
    yield put(
      setErrorAtDailyWeather('Ошибка при запросе времени по дням' + message)
    )
  }
}

export function* watcherDailyWeather() {
  yield takeEvery(EDailyWeatherActionType.GET_DAILY_WEATHER, workerDailyWeather)
}
