import { IEventItem } from "interfaces/Calendar";

export interface ICalendarState {
    isLogin: boolean
    events:  IEventItem[]

}

export enum ECalendarActionType {
  SET_EVENTS = 'SET_EVENTS'
}

export interface ICalendarSet {
  type: ECalendarActionType.SET_EVENTS;
  payload: ICalendarState;
}

export type TLocationsType = ICalendarSet;