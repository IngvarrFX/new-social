import {
    FollowACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType, SetFollowingInProgressACType, ToggleIsFetchingACType,
    UnFollowACType,
    UserType
} from "./types";


export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

export const follow = (id: number): FollowACType => {
    return {
        type: FOLLOW, payload: {id}
    }
};

export const unFollow = (id: number): UnFollowACType => {
    return {
        type: UNFOLLOW, payload: {id},
    }
};

export const setUsers = (users: UserType[]): SetUsersACType => {
    return {
        type: SET_USERS, payload: {users},
    }
};

export const setTotalCount = (count: number): SetTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT, payload: {count},
    }
};

export const setCurrentPage = (pageNumber: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE, payload: {pageNumber},
    }
};

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING, payload: {isFetching},
    }
};

export const setFollowingInProgress = (isFetching: boolean, userId: number): SetFollowingInProgressACType => {
    return {
        type: SET_FOLLOWING_IN_PROGRESS, payload: {isFetching, userId},
    }
};

