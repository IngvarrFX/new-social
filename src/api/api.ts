import axios, {AxiosResponse} from "axios";
import {AuthMeType, FollowingType, UsersResponseType} from "./types";
import {UserProfileType} from "../redux/types";


const api = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "1690be4a-0b2f-42a4-9e71-302df103dbfe",
    }
});


export const userAPI = {
    getUsers(currentPage: number, pageSize: number): Promise<UsersResponseType> {
        return api.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res: AxiosResponse) => res.data)
    },
    followOnUser(userId: number): Promise<FollowingType> {
        return api.post(`follow/${userId}`, {}).then((res: AxiosResponse) => res.data)
    },
    unFollowOnUser(userId: number): Promise<FollowingType> {
        return api.delete(`follow/${userId}`, {}).then((res: AxiosResponse) => res.data)
    },
}

export const authAPI = {
    authMe(): Promise<AuthMeType> {
        return api.get("auth/me").then((res: AxiosResponse) => res.data)
    },
}

export const profileAPI = {
    getUserProfile(userId: number): Promise<UserProfileType> {
        return api.get(`profile/${userId}`).then((res: AxiosResponse) => res.data)
    },
}


