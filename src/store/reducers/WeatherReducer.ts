// /* eslint-disable @typescript-eslint/default-param-last */
// import { apiNames } from 'constant';
// import { WeatherActions, WeatherActionTypes, WeatherStateType } from 'types';

// const initialState: WeatherStateType = {
//   nameAPI: apiNames.openWeather,
//   weatherData: [],
//   weatherLoading: false,
//   weatherStateError: null,
// };

// const weatherReducer = (
//   state = initialState,
//   action: WeatherActions,
// ): WeatherStateType => {
//   switch (action.type) {
//     case WeatherActionTypes.FETCH_WEATHER:
//       return { ...state, weatherLoading: true };
//     case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
//       return { ...state, weatherLoading: false, weatherData: action.payload };
//     case WeatherActionTypes.FETCH_WEATHER_ERROR:
//       return {
//         ...state,
//         weatherLoading: false,
//         weatherStateError: action.payload,
//       };
//     case WeatherActionTypes.CHANGE_WEATHER_API:
//       return { ...state, nameAPI: action.payload };

//     default:
//       return state;
//   }
// };

// export default weatherReducer;