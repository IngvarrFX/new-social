import {AddPostACType, NewPostTextACType} from "./types";

export const ADD_POST = "ADD_POST";
export const NEW_POST_MESSAGE = "NEW_POST_MESSAGE";

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
