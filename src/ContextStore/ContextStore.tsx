import React, {createContext} from "react";
import {AppStateType} from "../redux/redux-store";


export const StoreContext = createContext<AppStateType | null>(null);

type ProviderPropsType = {
    store: any
    children: JSX.Element
}

export const Provider = (props: ProviderPropsType) => {
    const {store, children} = props;
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}

