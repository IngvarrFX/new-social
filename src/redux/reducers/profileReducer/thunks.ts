import {profileAPI} from "../../../api/api";
import {AppThunk} from "../../redux-store";
import {setProfileStatus, setUserProfile} from "./actions";


export const getUserProfileTC = (userId: number): AppThunk => (dispatch) => {
    profileAPI.getUserProfile(Number(userId)).then((userProfileData) => {
        dispatch(setUserProfile(userProfileData));
        profileAPI.getProfileStatus(userProfileData.userId).then((status) => {
            dispatch(setProfileStatus(status))
        })
    });
}

export const updateProfileStatusTC = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateProfileStatus(status).then((res) => {
        dispatch(setProfileStatus(status))
    })
}
