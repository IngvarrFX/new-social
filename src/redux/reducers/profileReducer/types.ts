import {ADD_POST, NEW_POST_MESSAGE} from "./actions";

export type ProfileActionsType = AddPostACType | NewPostTextACType

export type AddPostACType = {
    type: typeof ADD_POST
};

export type NewPostTextACType = {
    type: typeof NEW_POST_MESSAGE
    payload: {
        value: string
    }
};
