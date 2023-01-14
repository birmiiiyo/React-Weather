import { ECalendarActionType,ICalendarState } from "@store/models/Calendar.models";

export const setCalendarEvents = (events: ICalendarState) => ({
    type: ECalendarActionType.SET_EVENTS, 
    payload: events
    }
)