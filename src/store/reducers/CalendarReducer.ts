import { ECalendarActionType,ICalendarState,TCalendarType } from "@store/models/Calendar.models";

const initialState: ICalendarState = {
    isLogin: false,
    events:[]
};

export const CalendarReducer = (
  state = initialState,
  action: TCalendarType,
): ICalendarState => {
  switch (action.type) {
    case ECalendarActionType.SET_EVENTS:
        return {...state, events: [...action.payload]}
    case ECalendarActionType.LOGIN_USER:
        return {...state, isLogin: true}
    case ECalendarActionType.LOGOUT_USER:
        return {...state, isLogin: false}
    default:
      return state;
  }
};