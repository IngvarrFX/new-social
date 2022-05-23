import {usersReducer} from "../usersReducer";
import {followAC, unFollowAC} from "../usersReducer/actions";
import {UsersStateType} from "../usersReducer/types";

let initialState: UsersStateType;

beforeEach(() => {
    initialState = {
        users: [{
            id: 1,
            name: "user",
            followed: false,
            photos: {small:"image",large: "image"},
            status: 'Hello i am superman',
            uniqueUrlName: null,
        },
            {
                id: 2,
                name: "user2",
                followed: false,
                photos: {small:"image",large: "image"},
                status: 'Hello i am superman',
                uniqueUrlName: null,
            }
        ]
    };
})

test("should be followed", () => {

    const newState = usersReducer(initialState, followAC(initialState.users[0].id));

    expect(newState.users[0].followed).toBeTruthy();
    expect(newState.users[0].name).toBe("user");
})


test("should be unfollowed", () => {

    const newState = usersReducer(initialState, unFollowAC(initialState.users[1].id));

    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[1].name).toBe("user2");
})
