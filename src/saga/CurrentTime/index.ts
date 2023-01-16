import { select, takeEvery, put, call } from 'redux-saga/effects';

import { getCurrentTimeFromAPI } from '@API/getCurrentTime';

import { RootState } from '@store/index';

import { ITime } from '@interfaces/TimeZoneDB';

import { setCurrentTime } from '@actions/TimeActions';
import {setErrorAtTime} from '@actions/ErrorActions'

import { ETimeActionType } from '@models/Time.model';

export function* workerCurrentTime() {
try {
    const {lat, lon} = yield select((state: RootState) => state.location)
    const data: ITime= yield call(getCurrentTimeFromAPI, {lat, lon})
    yield put(setCurrentTime({abbreviation: data.abbreviation,
    countryName: data.countryName,
    time: data.formatted as unknown as Date,
    zoneName: data.zoneName,
    gmtOffset:data.gmtOffset*1000
}))
} catch ({message}) {
    yield put(setErrorAtTime('Ошибка при запросе данных о времени' + message))
    }
}

export function* watcherCurrentTime() {
    yield takeEvery(ETimeActionType.GET_CURRENT_TIME, workerCurrentTime)
}