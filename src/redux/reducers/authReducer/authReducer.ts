import {AuthActionsType, InitialStateType} from "./types";

const initialState = {
    userId: null,
    login: null,
    email: null,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload}
        }
        default: {
            return state;
        }
    }
}
