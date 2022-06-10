import {Nullable} from "../../../types/types";
import {SET_USER_DATA} from "./actions";


export type InitialStateType = {
    userId: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
}

export type AuthActionsType = SetUserDataType

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number
        login: string
        email: string
    }
}
