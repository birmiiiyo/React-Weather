import { ELocationActionType, ILocationState, TLocationsType } from "@store/models/Location.model";

const initialState: ILocationState = {
lat:35.011665,
lon:135.768326,
};

const locationReducer = (
  state = initialState,
  action: TLocationsType,
): ILocationState => {
  switch (action.type) {
    case ELocationActionType.ADD_LOCATION:
        return {...action.payload}
    default:
      return state;
  }
};

export default locationReducer;