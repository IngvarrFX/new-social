import {SetUserDataType} from "./types";

export const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (userId: number, login: string, email: string): SetUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email}
})
