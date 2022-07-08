import {AddMessageACType} from "./types";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";


export const addMessage = (id: string, message: string): AddMessageACType => {
    return {
        type: ADD_MESSAGE, payload: {id, message}
    }
};

/*

export const newMessageText = (messageBody: string): NewMessageTextACType => {
    return {
        type: NEW_MESSAGE_TEXT, payload: {value: messageBody},
    }
};*/
