import { ECalendarActionType,ICalendarState,TCalendarType } from "@store/models/Calendar.models";

const initialState: ICalendarState = {
    isLogin: false,
    events:[]
};

const CalendarReducer = (
  state = initialState,
  action: TCalendarType,
): ICalendarState => {
  switch (action.type) {
    case ECalendarActionType.SET_EVENTS:
        return {...state, events: [...action.payload]}
    case ECalendarActionType.LOGIN_USER:
        return {...state, isLogin: !state.isLogin}
    default:
      return state;
  }
};

export default CalendarReducer;