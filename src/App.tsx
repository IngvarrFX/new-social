import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {News} from "./components/News";
import {Settings} from "./components/Settings";
import UsersConnect from "./components/UsersPage/UsersContainer";
import ProfileConnect from "./components/Profile/ProfileContainer";
import DialogsConnect from "./components/Containers/DialogsContainer/DialogsContainer";
import "./App.css";


function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/" element={<ProfileConnect/>}/>
                    <Route path="/profile/*" element={<ProfileConnect/>}/>
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
