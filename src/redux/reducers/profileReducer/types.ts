import {ADD_POST, NEW_POST_MESSAGE, SET_USER_PROFILE} from "./actions";
import {UserProfileType} from "../../types";

export type ProfileActionsType = AddPostACType | NewPostTextACType | SetUserProfileACType

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
