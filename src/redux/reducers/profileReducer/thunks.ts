import {profileAPI} from "../../../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {AnyAction} from "redux";
import {setUserProfile} from "./actions";


export const getUserProfileTC = (userId: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    profileAPI.getUserProfile(Number(userId)).then((userProfileData) => {
        dispatch(setUserProfile(userProfileData));
    });
}
