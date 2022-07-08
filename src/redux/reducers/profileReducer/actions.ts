import {AddPostACType, NewPostTextACType, SetProfileStatusACType, SetUserProfileACType} from "./types";
import {UserProfileType} from "../../types";

export const ADD_POST = "ADD_POST";
export const NEW_POST_MESSAGE = "NEW_POST_MESSAGE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

export const addPostAC = (newPost:string): AddPostACType => {
    return {
        type: ADD_POST,
        newPost
    }
};

export const newPostTextAC = (value: string): NewPostTextACType => {
    return {
        type: NEW_POST_MESSAGE, payload: {value},
    }
};

export const setUserProfile = (userProfile: UserProfileType): SetUserProfileACType => {
    return {
        type: SET_USER_PROFILE, payload: {userProfile},
    }
};

export const setProfileStatus = (status: string): SetProfileStatusACType => {
    return {
        type: SET_PROFILE_STATUS, payload: {status},
    }
};
