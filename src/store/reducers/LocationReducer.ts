import { ELocationActionType, ILocationState, TLocationType } from "@store/models/Location.model";

const initialState: ILocationState = {
lat:35.011665,
lon:135.768326,
};

export const LocationReducer = (
  state = initialState,
  action: TLocationType,
): ILocationState => {
  switch (action.type) {
    case ELocationActionType.SET_LOCATION:
        return {...action.payload}
    default:
      return state;
  }
};