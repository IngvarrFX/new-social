import {UserType} from "../redux/reducers/usersReducer/types";

export type UsersResponseType = {
    error: null
    items: UserType[]
    totalCount: number
}

export type FollowingType = {
    data: {}
    fieldsErrors: [] | string[]
    messages: [] | string[]
    resultCode: number
}

export type AuthMeType = {
    data: {
        email: string
        id: number
        login: string
    }
    fieldsErrors: [] | string[]
    messages: [] | string[]
    resultCode: number
}
