import React from "react";
import "./App.css";
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Main} from "./Main";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <Main/>
        </div>
    );
}

export default App;
