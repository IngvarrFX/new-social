import {ADD_POST, NEW_POST_MESSAGE, SET_PROFILE_STATUS, SET_USER_PROFILE} from "./actions";
import {UserProfileType} from "../../types";

export type ProfileActionsType = AddPostACType | NewPostTextACType | SetUserProfileACType | SetProfileStatusACType

export type AddPostACType = {
    type: typeof ADD_POST
};

export type NewPostTextACType = {
    type: typeof NEW_POST_MESSAGE
    payload: {
        value: string
    }
};

export type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    payload: {
        userProfile: UserProfileType
    }
};

export type SetProfileStatusACType = {
    type: typeof SET_PROFILE_STATUS
    payload: {
        status: string
    }
};
