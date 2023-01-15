import { ECalendarActionType,ICalendarState,TLocationsType } from "@store/models/Calendar.models";

const initialState: ICalendarState = {
    isLogin: false,
    events:[]
};

const CalendarReducer = (
  state = initialState,
  action: TLocationsType,
): ICalendarState => {
  switch (action.type) {
    case ECalendarActionType.SET_EVENTS:
        return {...state, events: [...action.payload]}
    default:
      return state;
  }
};

export default CalendarReducer;