import { getCurrentTimeFromAPI } from './../../API/getCurrentTime';
import { RootState } from '@store/index';
import { ITime } from '@types/TimeZoneDB';
import { select, takeEvery, put, call } from 'redux-saga/effects';
import { setCurrentTime } from '@store/actions/TimeActions';
import { ETimeActionType } from '@store/models/Time.model';


export function* workerCurrentTime() {
    const {lat, lon} = yield select((state: RootState) => state.Location)
    const data: ITime= yield call(getCurrentTimeFromAPI, {lat, lon})
    yield put(setCurrentTime({abbreviation: data.abbreviation,
    countryName: data.countryName,
    formatted: data.formatted,
    timestamp: data.timestamp,
    zoneName: data.zoneName}))
}

export function* watcherCurrentTime() {
    yield takeEvery(ETimeActionType.GET_CURRENT_TIME, workerCurrentTime)
}