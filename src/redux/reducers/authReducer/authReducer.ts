import {AuthActionsType, AuthUserDataType} from "./types";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthUserDataType = initialState, action: AuthActionsType): AuthUserDataType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload}
        }
        default: {
            return state;
        }
    }
}
