import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,} from "react-router-dom";
import App from "./App";
import {state} from "./redux/state"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </React.StrictMode>);
