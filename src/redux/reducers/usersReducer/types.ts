import {FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_FETCHING, UNFOLLOW} from "./actions";


export type UsersActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetTotalUsersCountACType
    | SetCurrentPageACType
    | ToggleIsFetchingACType

export type FollowACType = {
    type: typeof FOLLOW
    payload: {
        id: number
    }
};

export type UnFollowACType = {
    type: typeof UNFOLLOW
    payload: {
        id: number
    }
};

export type SetUsersACType = {
    type: typeof SET_USERS
    payload: {
        users: UserType[]
    }
};

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    payload: {
        count: number
    }
};

export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    payload: {
        pageNumber: number
    }
};

export type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: {
        isFetching: boolean
    }
};

export type UsersStateType = {
    users: UserType[] | []
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
}

export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": null | string
    "photos": {
        "small": null | string
        "large": null | string
    },
    "status": null | string
    "followed": boolean
}
