import { EErrorActionType,IErrorState,TErrorType} from "@store/models/Error.model";

const initialState: IErrorState = {
error:null,
message:''
};

const ErrorReducer = (
  state = initialState,
  action: TErrorType,
): IErrorState => {
  switch (action.type) {
    case EErrorActionType.DAILY_WEATHER_ERROR:
        return {error: "daily", message: action.payload} 
    case EErrorActionType.HOURLY_WEATHER_ERROR:
        return {error: "hourly", message: action.payload} 
    case EErrorActionType.LOCATION_ERROR:
        return {error: "location", message: action.payload} 
    case EErrorActionType.TIME_ERROR:
        return {error: "time", message: action.payload} 
    case EErrorActionType.CALENDAR_ERROR:
        return {error: "calendar", message: action.payload}
    default:
      return state;
  }
};

export default ErrorReducer;