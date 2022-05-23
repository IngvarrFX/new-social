import {AddMessageACType, NewMessageTextACType} from "./types";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";


export const addMessageAC = (id: string): AddMessageACType => {
    return {
        type: ADD_MESSAGE, payload: {id}
    }
};



export const newMessageTextAC = (messageBody: string): NewMessageTextACType => {
    return {
        type: NEW_MESSAGE_TEXT, payload: {value: messageBody},
    }
};
