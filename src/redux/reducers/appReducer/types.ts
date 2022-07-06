import {SET_AUTHORIZED, SET_INITIALIZE} from "./actions";


export type AppInitialStateType = {
    initialized: boolean
    isAuthorized: boolean
}

export type AppActionsType = SetInitializedType | SetAuthorizedType

export type SetInitializedType = {
    type: typeof SET_INITIALIZE
    payload: {
        initialize: boolean
    }
}

export type SetAuthorizedType = {
    type: typeof SET_AUTHORIZED
    payload: {
        isAuthorized: boolean
    }
}
