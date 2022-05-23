import {profilePageType} from "../../store";
import {v1} from "uuid";
import {ProfileActionsType} from "./types";
import {ADD_POST, NEW_POST_MESSAGE} from "./actions";

const initialState: profilePageType = {
    posts: [
        {id: v1(), message: "Hello world!", likes: 3},
        {id: v1(), message: "My first post!", likes: 5},
    ],
    newPostText: "",
};

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likes: 0}, ...state.posts],
                newPostText: ""
            };
        }
        case NEW_POST_MESSAGE: {
            return {...state, newPostText: action.payload.value};
        }
        default: {
            return state;
        }
    }
};


