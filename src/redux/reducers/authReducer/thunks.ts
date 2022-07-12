import {AppThunk} from "../../redux-store";
import {authAPI} from "../../../api/api";
import {setUserData} from "./actions";
import {setAuthorized, setInitialize} from "../appReducer";


export const authMeTC = (): AppThunk => (dispatch) => {
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

export const loginTC = (data: any): AppThunk => (dispatch) => {
    authAPI.login(data).then(res => {
        if (res.resultCode === 0) {
            dispatch(authMeTC())
        }
    })
}

export const logOutTC = (): AppThunk => (dispatch) => {
    authAPI.logOut().then(res => {
        if (res.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}
