import { EDailyWeatherActionType, IDailyWeatherState,TDailyWeatherType } from "@store/models/DailyWeather.model";

const initialState: IDailyWeatherState = {
city:null,
list: null,
};

const DailyWeatherReducer = (
  state = initialState,
  action: TDailyWeatherType,
): IDailyWeatherState => {
  switch (action.type) {
    case EDailyWeatherActionType.SET_DAILY_WEATHER:
        return {...action.payload}
    default:
      return state;
  }
};

export default DailyWeatherReducer;