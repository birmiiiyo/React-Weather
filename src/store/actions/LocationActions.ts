import { ELocationActionType, ILocationState } from "@store/models/Location.model";

export const addLocation = (newLocation: ILocationState) => {
    return {type: ELocationActionType.ADD_LOCATION, payload: {...newLocation}}
}