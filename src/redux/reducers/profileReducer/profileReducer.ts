import {profilePageType} from "../../types";
import {v1} from "uuid";
import {ProfileActionsType} from "./types";
import {ADD_POST, SET_PROFILE_STATUS, SET_USER_PROFILE} from "./actions";

const initialState: profilePageType = {
    posts: [
        {id: v1(), message: "Hello world!", likes: 3},
        {id: v1(), message: "My first post!", likes: 5},
    ],
    userProfile: null,
    profileStatus: "",
};

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: v1(), message: action.newPost, likes: 0}, ...state.posts],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: {...action.payload.userProfile}}
        }
        case SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.payload.status}
        }
        default: {
            return state;
        }
    }
};


