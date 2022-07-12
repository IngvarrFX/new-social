import {Nullable} from "../../../types/types";
import {SET_USER_DATA, SET_USER_ID} from "./actions";


export type AuthUserDataType = {
    userId: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
    isAuth: boolean
}

export type AuthActionsType = SetUserDataType | SetUserIdType

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: Nullable<number>
        login: Nullable<string>
        email: Nullable<string>
        isAuth: boolean
    }
}

export type SetUserIdType = {
    type: typeof SET_USER_ID
    payload: {
        userId: Nullable<number>
        isAuth: boolean
    }
}

export type LoginDataType  = {
    email: string
    password: string
    rememberMe: boolean
}
