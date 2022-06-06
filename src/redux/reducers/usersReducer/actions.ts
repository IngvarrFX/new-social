import {
    FollowACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    UnFollowACType,
    UserType
} from "./types";


export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export const followAC = (id: number): FollowACType => {
    return {
        type: FOLLOW, payload: {id}
    }
};

export const unFollowAC = (id: number): UnFollowACType => {
    return {
        type: UNFOLLOW, payload: {id},
    }
};

export const setUsersAC = (users: UserType[]): SetUsersACType => {
    return {
        type: SET_USERS, payload: {users},
    }
};

export const setTotalCountAC = (count: number): SetTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT, payload: {count},
    }
};

export const setCurrentPageAC = (pageNumber: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE, payload: {pageNumber},
    }
};

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING, payload: {isFetching},
    }
};

