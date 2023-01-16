import {  put, call, takeEvery } from 'redux-saga/effects'

import { apiCalendar } from '@utils/Calendar'

import { IEventsListResponse } from '@interfaces/Calendar'

import { ECalendarActionType } from '@models/Calendar.models'

import { setCalendarEvents } from '@actions/CalendarActions'
import { setErrorAtCalendar } from '@actions/ErrorActions'

function* getEventsFromCalendarWorker() {
  try {
    const response: IEventsListResponse = yield call(apiCalendar.listUpcomingEvents, 5)
    yield put(setCalendarEvents(response.result.items))    
  } catch ({message}) {
   setErrorAtCalendar("Ошибка при запросе календаря" + message)
  }
} 

export function* eventsWatcher() {
  yield takeEvery(ECalendarActionType.GET_EVENTS, getEventsFromCalendarWorker)
}