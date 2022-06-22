import {AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux-store";
import {userAPI, UsersResponseType} from "../../../api";
import {
    follow,
    setCurrentPage,
    setFollowingInProgress,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "./actions";

export const followTC = (id: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    userAPI.followOnUser(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(id))
            dispatch(setFollowingInProgress(false, id))
        }
    }).catch((error) => console.error(error))
}

export const unFollowTC = (id: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    userAPI.unFollowOnUser(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unFollow(id))
            dispatch(setFollowingInProgress(false, id))
        }
    }).catch((error) => console.error(error))
}

export const getUsersTC = (pageNumber?: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch, getState) => {
    debugger
    dispatch(toggleIsFetching(true));
    if (pageNumber) {
        dispatch(setCurrentPage(pageNumber));
    }
    const {currentPage, pageSize} = getState().users;
    userAPI.getUsers(currentPage, pageSize).then((data: UsersResponseType) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    });
}

