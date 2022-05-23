import {store} from "./redux/redux-store";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>);
