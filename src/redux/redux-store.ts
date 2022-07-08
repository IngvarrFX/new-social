import {createStore, combineReducers, Store, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {ProfileActionsType} from "./reducers/profileReducer/types";
import {DialogsActionsType} from "./reducers/dialogsReducer/types";
import {UsersActionsType} from "./reducers/usersReducer/types";
import {authReducer} from "./reducers/authReducer";
import {appReducer} from "./reducers/appReducer";


let rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export let store: Store<AppStateType, AppActionType> & { dispatch: DispatchType } = createStore(rootReducer, applyMiddleware(thunk));
type AppActionType = ProfileActionsType | DialogsActionsType | UsersActionsType
export type DispatchType = (args: AppActionType) => AppActionType;

//@ts-ignore
window.state = store.getState();
