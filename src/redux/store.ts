import {DialogsType, PostType} from "../types";
import {PotentialString} from "../types/types";


export type stateType = {
    profilePage: profilePageType
    messagePage: messagePageType
    sideBar: {}
}

export type profilePageType = {
    posts: PostType[]
    newPostText: string
    userProfile: null | UserProfileType
}

export type messagePageType = {
    dialogs: DialogsType[]
    newMessage: string
}

export type UserProfileType = {
    "aboutMe": PotentialString,
    "contacts": {
        "facebook": PotentialString,
        "website": PotentialString,
        "vk": PotentialString,
        "twitter": PotentialString,
        "instagram": PotentialString,
        "youtube": PotentialString,
        "github": PotentialString,
        "mainLink": PotentialString
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": PotentialString,
    "fullName": PotentialString,
    "userId": number,
    "photos": {
        "small": PotentialString,
        "large": PotentialString,
    }
}

type StoreType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (subscriber: (state: stateType) => void) => void
    dispatch: (action: { type: string, payload: any }) => void
}
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: "Hello world!", likes: 3},
//                 {id: v1(), message: "My first post!", likes: 5},
//             ],
//             newPostText: "",
//         },
//         messagePage: {
//             dialogs: [
//                 {
//                     id: v1(),
//                     name: "Igor",
//                     messages: [
//                         "Hello", "My name is Igor", "How are you feel?",
//                     ]
//                 },
//                 {
//                     id: v1(),
//                     name: "Oxi",
//                     messages: [
//                         "Hi", "My name is Oxi", "I am so happy!",
//                     ]
//                 },
//                 {
//                     id: v1(),
//                     name: "Marcy",
//                     messages: [
//                         "Meow", "I am hungry", "Let's go play",
//                     ]
//                 },
//             ],
//             newMessage: "",
//         },
//         sideBar: {},
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber(state: stateType) {
//         console.log("Subscriber")
//     },
//     subscribe(subscriber) {
//         this._callSubscriber = subscriber;
//     },
//     dispatch(action: { type: string, payload?: any }) {
//         profileReducer(this._state.profilePage, action);
//         dialogsReducer(this._state.messagePage, action);
//         this._callSubscriber(this._state);
//     }
// };
//
// //@ts-ignore
// window.store = store.getState();
