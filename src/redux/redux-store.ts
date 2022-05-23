import {createStore, combineReducers, Store} from "redux"
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {usersReducer} from "./reducers/usersReducer";
import {ProfileActionsType} from "./reducers/profileReducer/types";
import {DialogsActionsType} from "./reducers/dialogsReducer/types";
import {UsersActionsType} from "./reducers/usersReducer/types";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export let store: Store<AppStateType, AppActionType> & { dispatch: DispatchType } = createStore(rootReducer);
type AppActionType = ProfileActionsType | DialogsActionsType | UsersActionsType
export type DispatchType = (args: AppActionType) => AppActionType;

//@ts-ignore
window.state = store.getState();
