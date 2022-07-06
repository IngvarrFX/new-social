import {SetAuthorizedType, SetInitializedType} from "./types";

export const SET_INITIALIZE = "SET_INITIALIZE";
export const SET_AUTHORIZED = "SET_AUTHORIZED";

export const setInitialize = (initialize: boolean): SetInitializedType => ({
    type: SET_INITIALIZE,
    payload: {initialize}
})

export const setAuthorized = (isAuthorized: boolean): SetAuthorizedType => ({
    type: SET_AUTHORIZED,
    payload: {isAuthorized}
})
