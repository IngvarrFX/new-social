import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Profile} from "./Profile";
import {News} from "./News";
import {Settings} from "./Settings";
import UsersConnect from './UsersPage/UsersContainer';
import "./App.css";
import DialogsConnect from "./Containers/DialogsContainer/DialogsContainer";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages/*" element={<DialogsConnect/>}/>
                    <Route path="users" element={<UsersConnect/>}/>
                    <Route path="/music" element={<h1>Music</h1>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
