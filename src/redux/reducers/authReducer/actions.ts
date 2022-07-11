import {SetUserDataType, SetUserIdType} from "./types";
import {Nullable} from "../../../types/types";

export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_ID = "SET_USER_ID";

export const setUserData = (userId: Nullable<number>, login: Nullable<string>, email: Nullable<string>, isAuth: boolean): SetUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

export const setUserId = (userId: Nullable<number>, isAuth: boolean): SetUserIdType => ({
    type: SET_USER_ID,
    payload: {userId, isAuth}
})
