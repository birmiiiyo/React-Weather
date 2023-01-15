import {  put, call, takeEvery } from 'redux-saga/effects'
import { apiCalendar } from './../../utils/Calendar'
import { IEventsListResponse } from '../../interfaces/Calendar'
import { setCalendarEvents } from '@store/actions/CalendarActions'
import { ECalendarActionType } from '@store/models/Calendar.models'

function* getEventsFromCalendarWorker() {
  try {
    const response: IEventsListResponse = yield call(apiCalendar.listUpcomingEvents, 5)
    yield put(setCalendarEvents(response.result.items))    
  } catch (err) {
    console.log(err)
  }
} 

export function* eventsWatcher() {
  yield takeEvery(ECalendarActionType.GET_EVENTS, getEventsFromCalendarWorker)
}