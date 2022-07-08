import {messagePageType} from "../../types";
import {v1} from "uuid";
import {DialogsActionsType} from "./types";
import {ADD_MESSAGE} from "./actions";


const initialState: messagePageType = {
    dialogs: [
        {
            id: v1(),
            name: "Igor",
            messages: [
                "Hello", "My name is Igor", "How are you feel?",
            ]
        },
        {
            id: v1(),
            name: "Oxi",
            messages: [
                "Hi", "My name is Oxi", "I am so happy!",
            ]
        },
        {
            id: v1(),
            name: "Marcy",
            messages: [
                "Meow", "I am hungry", "Let's go play",
            ]
        },
    ],
};


export const dialogsReducer = (state: messagePageType = initialState, action: DialogsActionsType): messagePageType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, dialogs: state.dialogs.map((dialog)=> dialog.id === action.payload.id ? {...dialog,messages : [...dialog.messages, action.payload.message]} : dialog)};
        }
        default: {
            return state;
        }
    }
};



