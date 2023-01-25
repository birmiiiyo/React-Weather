import { call, put, select, takeEvery } from 'redux-saga/effects'

import { getCurrentTimeFromAPI } from 'api/getCurrentTime'
import { ITime } from 'interfaces/TimeZoneDB'
import { setErrorAtTime } from 'store/actionCreators/ErrorActions'
import { setCurrentTime } from 'store/actionCreators/TimeActions'
import { RootState } from 'store/index'

export function* workerCurrentTime() {
  try {
    const { lat, lon } = yield select((state: RootState) => state.location)
    const data: ITime = yield call(getCurrentTimeFromAPI, { lat, lon })
    yield put(
      setCurrentTime({
        abbreviation: data.abbreviation,
        countryName: data.countryName,
        time: data.formatted,
        zoneName: data.zoneName,
        gmtOffset: data.gmtOffset * 1000,
      }),
    )
  } catch ({ message }) {
    yield put(setErrorAtTime(`${message}`))
  }
}

export function* watcherCurrentTime() {
  yield takeEvery('GET_CURRENT_TIME', workerCurrentTime)
}
