import { errorAtHourlyWeather } from '@store/actions/ErrorActions';
import { RootState } from '@store/index';
import { StormGlass } from 'interfaces/StormGlass';
import { select, takeEvery, put, call } from 'redux-saga/effects';
import { getHourlyWeatherAPI } from './../../API/getHourlyWeather';
import {EHourlyWeatherActionType} from '@store/models/HourlyWeather.model'
import { setHourlyWeather } from '@store/actions/HourlyWeatherActions';




export function* workerHourlyWeather() {
try {
    const {lat, lon} = yield select((state: RootState) => state.Location)
    const {time} = yield select((state: RootState) => state.Time)
    const data: StormGlass= yield call(getHourlyWeatherAPI, {lat, lon, date: time})
    yield put(setHourlyWeather({hours: data.hours}))
} catch (error) {
    yield put(errorAtHourlyWeather('Ошибка при запросе времени по дням'))
}
}

export function* watcherHourlyWeather() {
    yield takeEvery(EHourlyWeatherActionType.GET_HOURLY_WEATHER, workerHourlyWeather)
}