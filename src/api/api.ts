import axios, {AxiosResponse} from "axios";
import {AuthMeType, FollowingType, UsersResponseType} from "./types";
import {UserProfileType} from "../redux/types";
import {LoginDataType} from "../redux/reducers/authReducer/types";

const api = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        // @ts-ignore
        "api-key": process.env.REACT_APP_API_KEY,
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
    login(data: LoginDataType): Promise<any> {
        return api.post(`auth/login`, data).then((res: AxiosResponse) => res.data)
    },
    logOut(): Promise<any> {
        return api.delete(`auth/login`).then((res: AxiosResponse) => res.data)
    },
}

export const profileAPI = {
    getUserProfile(userId: number): Promise<UserProfileType> {
        return api.get(`profile/${userId}`).then((res: AxiosResponse) => res.data)
    },
    getProfileStatus(userId: number) {
        return api.get(`profile/status/${userId}`).then((res: AxiosResponse) => res.data)
    },
    updateProfileStatus(status: string) {
        return api.put(`profile/status`, {status}).then((res: AxiosResponse) => res.data)
    }
}


