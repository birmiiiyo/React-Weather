import { getCurrentTimeFromAPI } from './../../API/getCurrentTime';
import { RootState } from '@store/index';
import { ITime } from '@types/TimeZoneDB';
import { select, takeEvery, put, call } from 'redux-saga/effects';
import { setCurrentTime } from '@store/actions/TimeActions';
import {errorAtTime} from '@store/actions/ErrorActions'
import { ETimeActionType } from '@store/models/Time.model';


export function* workerCurrentTime() {
try {
    const {lat, lon} = yield select((state: RootState) => state.Location)
    const data: ITime= yield call(getCurrentTimeFromAPI, {lat, lon})
    yield put(setCurrentTime({abbreviation: data.abbreviation,
    countryName: data.countryName,
    time: data.formatted as unknown as Date,
    zoneName: data.zoneName}))
} catch (error) {
    yield put(errorAtTime('Ошибка при запросе данных о времени'))
}
}

export function* watcherCurrentTime() {
    yield takeEvery(ETimeActionType.GET_CURRENT_TIME, workerCurrentTime)
}