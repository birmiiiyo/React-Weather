import { takeLatest, put, call } from 'redux-saga/effects'
import { apiCalendar } from './../../utils/Calendar'
import { IEventsListResponse } from '../../interfaces/Calendar'

function* getEventsFromCalendarWorker() {
  try {
    const response: IEventsListResponse = yield call(apiCalendar.listUpcomingEvents, 10)
    yield put(setEvents(response))
  } catch (err) {
    console.log(err)
  }
}

export function* loadUpcomingEventsWatcher() {
  yield takeLatest(isSynchronize.type, getEventsFromCalendarWorker)
}