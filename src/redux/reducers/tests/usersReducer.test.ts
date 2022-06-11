import {usersReducer} from "../usersReducer";
import {follow, setCurrentPage, setTotalCount, unFollow} from "../usersReducer/actions";
import {UsersStateType} from "../usersReducer/types";

let initialState: UsersStateType;

beforeEach(() => {
    initialState = {
        users: [{
            id: 1,
            name: "user",
            followed: false,
            photos: {small: "image", large: "image"},
            status: "Hello i am superman",
            uniqueUrlName: null,
        },
            {
                id: 2,
                name: "user2",
                followed: false,
                photos: {small: "image", large: "image"},
                status: "Hello i am superman",
                uniqueUrlName: null,
            }
        ],
        totalUsersCount: 30,
        currentPage: 1,
        pageSize: 5,
        isFetching: false,
        toggleFollowingProgress: []
    };
})

test("should be followed", () => {

    const newState = usersReducer(initialState, follow(initialState.users[0].id));

    expect(newState.users[0].followed).toBeTruthy();
    expect(newState.users[0].name).toBe("user");
})


test("should be unfollowed", () => {

    const newState = usersReducer(initialState, unFollow(initialState.users[1].id));

    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[1].name).toBe("user2");
})


test("should set total count users", () => {

    const newState = usersReducer(initialState, setTotalCount(300));

    expect(newState.totalUsersCount).toBe(300);
})


test("should set current page", () => {

    const newState = usersReducer(initialState, setCurrentPage(3));

    expect(newState.currentPage).toBe(3);
})

