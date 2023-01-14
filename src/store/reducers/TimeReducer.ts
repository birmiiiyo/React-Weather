import { ETimeActionType, ITimeState,TTimeType } from "@store/models/Time.model";

const initialState: ITimeState = {
    countryName:'',
    zoneName:'',
    abbreviation:'',
    time: new Date(),
    gmtOffset:0,

};

const TimeReducer = (
  state = initialState,
  action: TTimeType,
): ITimeState => {
  switch (action.type) {
    case ETimeActionType.SET_CURRENT_TIME:
        return {...action.payload}
    default:
      return state;
  }
};

export default TimeReducer;