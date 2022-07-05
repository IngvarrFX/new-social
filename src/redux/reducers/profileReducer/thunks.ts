import {profileAPI} from "../../../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {AnyAction} from "redux";
import {setProfileStatus, setUserProfile} from "./actions";


export const getUserProfileTC = (userId: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    profileAPI.getUserProfile(Number(userId)).then((userProfileData) => {
        dispatch(setUserProfile(userProfileData));
        profileAPI.getProfileStatus(userProfileData.userId).then((status) => {
            dispatch(setProfileStatus(status))
        })
    });
}

export const updateProfileStatusTC = (status: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    profileAPI.updateProfileStatus(status).then((res) => {
        dispatch(setProfileStatus(status))
    })
}
