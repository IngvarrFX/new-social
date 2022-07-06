import {AppActionsType, AppInitialStateType} from "./types";

const initialState: AppInitialStateType = {
    initialized: false,
    isAuthorized: false,
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZE": {
            return {...state, initialized: action.payload.initialize}
        }
        case "SET_AUTHORIZED": {
            return {...state, isAuthorized: action.payload.isAuthorized}
        }
        default: {
            return state;
        }
    }
}
