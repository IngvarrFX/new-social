import {messagePageType} from "../../types";
import {v1} from "uuid";
import {dialogsReducer} from "../dialogsReducer";
import {addMessage} from "../dialogsReducer/actions";


let initialState: messagePageType;
beforeEach(() => {
    initialState = {
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
})

test("should be add new message", () => {

    const id = initialState.dialogs[0].id;
    const newState = dialogsReducer(initialState, addMessage(id, "New Message for friends!"));

    expect(newState.dialogs[0].messages[newState.dialogs[0].messages.length - 1]).toBe("New Message for friends!");
    expect(newState.dialogs[0].messages.length).toBe(4);
})
