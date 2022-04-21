import {profilePageType} from "../state";
import {v1} from "uuid";

const ADD_POST = "ADD_POST";
const NEW_POST_MESSAGE = "NEW_POST_MESSAGE";

export const ProfileReducer = (state: profilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            state.posts.unshift({
                id: v1(),
                message: state.newPostText,
                likes: 0
            });
            state.newPostText = "";
            return state;
        }
        case NEW_POST_MESSAGE: {
            state.newPostText = action.payload.value;
            return state;
        }
        default: {
            return state;
        }
    }
};

export const addPostAC = () => {
    return {
        type: ADD_POST, payload: {value: ""} as const
    }
};

export const newPostTextAC = (value: string) => {
    return {
        type: NEW_POST_MESSAGE, payload: {value},
    }
};
