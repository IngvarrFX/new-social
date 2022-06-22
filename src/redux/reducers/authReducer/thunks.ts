import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {AnyAction} from "redux";
import {authAPI} from "../../../api/api";
import {setUserData} from "./actions";


export const authMeTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    authAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
        }
    })
}
