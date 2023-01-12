import { ETimeActionType, ITimeState,TTimeType } from "@store/models/Time.model";

const initialState: ITimeState = {
    countryName:'',
    zoneName:'',
    abbreviation:'',
    time: new Date(),

};

const TimeReducer = (
  state = initialState,
  action: TTimeType,
): ITimeState => {
  switch (action.type) {
    case ETimeActionType.SET_CURRENT_TIME:
        return {...action.payload}
    // case ETimeActionType.INCREASE_MINUTES:
    //     return{...state, time:state.time + 60000}
    default:
      return state;
  }
};

export default TimeReducer;