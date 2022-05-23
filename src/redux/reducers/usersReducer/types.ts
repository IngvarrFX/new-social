import {FOLLOW, SET_USERS, UNFOLLOW} from "./actions";


export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType

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

export type UsersStateType = {
    users: UserType[] | []
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
