import {v1} from "uuid";
import {addPostAC} from "../profileReducer/actions";
import {profileReducer} from "../profileReducer";
import {profilePageType} from "../../types";

let initialState: profilePageType;
beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: "Hello world!", likes: 3},
            {id: v1(), message: "My first post!", likes: 5},
        ],
        userProfile: null,
        profileStatus: "",
    };
})

test("should be add new post", () => {

    const newState = profileReducer(initialState, addPostAC("New post!!!"));

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].message).toBe("New post!!!");
})
