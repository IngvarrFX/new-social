import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {AnyAction} from "redux";
import {authAPI} from "../../../api/api";
import {setUserData, setUserId} from "./actions";
import {setAuthorized, setInitialize} from "../appReducer";


export const authMeTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    dispatch(setInitialize(true));
    authAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
            dispatch(setAuthorized(true));
            dispatch(setInitialize(false));
        }
    })
}

export const loginTC = (data: any): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    authAPI.login(data).then(res => {
        if (res.resultCode === 0) {
            const {id} = data.data;
            dispatch(setUserId(id, true))
        }
    })
}

export const logOutTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    authAPI.logOut().then(res => {
        if (res.resultCode === 0) {
            dispatch(setUserId(null, true))
        }
    })
}
