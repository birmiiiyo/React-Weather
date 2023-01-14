import { ECalendarActionType, ICalendarState,TCalendarType } from "@store/models/Calendar.models";

const initialState: ICalendarState = {
    isLogin: false,
    events:[]
};

const CalendarReducer = (
  state = initialState,
  action: TCalendarType,
): ICalendarState => {
  switch (action.type) {
    case ECalendarActionType.SET_CURRENT_TIME:
        return {...action.payload}
    default:
      return state;
  }
};

export default CalendarReducer;