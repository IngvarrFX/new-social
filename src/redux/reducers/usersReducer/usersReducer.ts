import {UsersActionsType, UsersStateType} from "./types";

const initialState: UsersStateType = {
    users: []
};

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)
            }
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default: {
            return state;
        }
    }
};




