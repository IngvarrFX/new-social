import {FollowACType, SetUsersACType, UnFollowACType, UserType} from "./types";


export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

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

