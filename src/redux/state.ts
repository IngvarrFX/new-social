import {DialogsType, PostType} from "../types";


export type stateType = {
    profilePage: profilePageType
    messagePage: messagePageType
    sideBar: {}
}

type profilePageType = {
    posts: PostType[]
}

type messagePageType = {
    dialogs: DialogsType[]
}

export const state: stateType = {
    profilePage: {
        posts: [
            {message: "Hello world!", likes: 3},
            {message: "My first post!", likes: 5},
        ],
    },
    messagePage: {
        dialogs: [
            {
                id: 1,
                name: "Igor",
                messages: [
                    "Hello", "My name is Igor", "How are you feel?",
                ]
            },
            {
                id: 2,
                name: "Oxi",
                messages: [
                    "Hi", "My name is Oxi", "I am so happy!",
                ]
            },
            {
                id: 3,
                name: "Marcy",
                messages: [
                    "Meow", "I am hungry", "Let's go play",
                ]
            },

        ],

    },
    sideBar: {},
};


