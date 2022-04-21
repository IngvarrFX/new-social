import {stateType, store} from "../src/redux/state";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

export const rerenderEntireTree = (state: stateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>);
};


rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);
