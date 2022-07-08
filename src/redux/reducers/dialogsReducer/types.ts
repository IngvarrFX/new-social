import {ADD_MESSAGE, NEW_MESSAGE_TEXT} from "./actions";

export type DialogsActionsType = AddMessageACType
    | NewMessageTextACType


export type AddMessageACType = {
    type: typeof ADD_MESSAGE
    payload: {
        id: string
        message: string
    }
};

export type NewMessageTextACType = {
    type: typeof NEW_MESSAGE_TEXT
    payload: {
        value: string
    }
};
