import {messagePageType} from "../state";

const ADD_MESSAGE = "ADD_MESSAGE";
const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";

export const DialogsReducer = (state: messagePageType, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let oldState = state.dialogs
            state.dialogs = oldState.map((item) => item.id === action.payload.id ? {...item, messages:[...item.messages, state.newMessage]}: item);
            state.newMessage = "";
            return state;
        }
        case NEW_MESSAGE_TEXT: {
            state.newMessage = action.payload.value;
            return state;
        }
        default: {
            return state;
        }
    }
};

export const addMessageAC = (id: string) => {
    return {
        type: ADD_MESSAGE, payload: {id} as const
    }
};

export const newMessageTextAC = (messageBody: string) => {
    return {
        type: NEW_MESSAGE_TEXT, payload: {value: messageBody},
    }
};
