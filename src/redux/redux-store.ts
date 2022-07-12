import { combineReducers,applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {ProfileActionsType} from "./reducers/profileReducer/types";
import {DialogsActionsType} from "./reducers/dialogsReducer/types";
import {UsersActionsType} from "./reducers/usersReducer/types";
import {AuthActionsType, authReducer} from "./reducers/authReducer";
import {AppActionsType, appReducer} from "./reducers/appReducer";


let rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
//types
export type AppStateType = ReturnType<typeof rootReducer>;
//AppState type
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionType>;
//thunks type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>
//actions type
type AppActionType = AppActionsType | AuthActionsType | ProfileActionsType | DialogsActionsType | UsersActionsType;

//@ts-ignore
window.state = store.getState();
