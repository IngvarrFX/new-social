import {v1} from "uuid";
import {addPostAC, newPostTextAC} from "../profileReducer/actions";
import {profileReducer} from "../profileReducer";
import {profilePageType} from "../../types";

let initialState: profilePageType;
beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: "Hello world!", likes: 3},
            {id: v1(), message: "My first post!", likes: 5},
        ],
        newPostText: "",
        userProfile: null,
        profileStatus: "",
    };
})

test("should be add new post", () => {

    const newState = profileReducer(initialState, addPostAC());

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].message).toBe("");
})


test("should be change newPostText", () => {

    const newState = profileReducer(initialState, newPostTextAC("Hello i am in the train!"));

    expect(newState.newPostText).toBe("Hello i am in the train!");
})
