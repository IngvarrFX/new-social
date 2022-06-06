import {AddPostACType, NewPostTextACType, SetUserProfileACType} from "./types";
import {UserProfileType} from "../../store";

export const ADD_POST = "ADD_POST";
export const NEW_POST_MESSAGE = "NEW_POST_MESSAGE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPostAC = (): AddPostACType => {
    return {
        type: ADD_POST
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
