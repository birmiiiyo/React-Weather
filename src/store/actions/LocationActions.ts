import { ELocationActionType, ILocationState } from "@store/models/Location.model";

export const setLocation = (newLocation: ILocationState) => ({
    type: ELocationActionType.SET_LOCATION, 
    payload: {...newLocation}
})