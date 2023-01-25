import { call, put, select, takeEvery } from 'redux-saga/effects'

import { getDailyWeatherFromAPI } from 'Api/getDailyWeather'
import { getWeatherImagesAPI } from 'Api/getImage'
import { MockapiRequest } from 'interfaces/Mockapi'
import { IOpenWeather } from 'interfaces/OpenWeather.weather'
import {
  setDailyWeather,
  setWeatherImg,
} from 'store/actionCreators/DailyWeatherActions'
import { setErrorAtDailyWeather } from 'store/actionCreators/ErrorActions'
import { RootState } from 'store/index'
import { randomInteger } from 'utils/randomInt'

export function* workerDailyWeather() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const data: IOpenWeather = yield call(getDailyWeatherFromAPI, { lat, lon })
    yield put(setDailyWeather({ city: data.city, list: data.list }))
    const image: MockapiRequest[] = yield call(
      getWeatherImagesAPI,
      data.list[0].weather[0].main,
    )
    yield put(setWeatherImg(image[randomInteger()].src))
    yield put(setErrorAtDailyWeather(''))
  } catch ({ message }) {
    yield put(setErrorAtDailyWeather(`${message}`))
  }
}

export function* watcherDailyWeather() {
  yield takeEvery('GET_DAILY_WEATHER', workerDailyWeather)
}
