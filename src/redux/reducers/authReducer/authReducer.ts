import {AuthActionsType, AuthUserDataType} from "./types";

const initialState: AuthUserDataType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    error: null
}

export const authReducer = (state: AuthUserDataType = initialState, action: AuthActionsType): AuthUserDataType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload}
        }
        case "SET_USER_ID": {
            return {...state, userId: action.payload.userId, isAuth: action.payload.isAuth}
        }
        case "SET_ERROR": {
            return {...state, error: action.payload.error}
        }
        default: {
            return state;
        }
    }
}
