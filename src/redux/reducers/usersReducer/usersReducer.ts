import {UsersActionsType, UsersStateType} from "./types";

const initialState: UsersStateType = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 5,
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
            return {...state, users: [...action.payload.users]}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.payload.count}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.pageNumber}
        }
        default: {
            return state;
        }
    }
};




