import React from "react";
import {Routes, Route, useParams} from "react-router-dom";
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Profile} from "./Main";
import {Dialogs} from "./Dialogs";
import {Messages} from "./Messages";
import {News} from "./News";
import {Settings} from "./Settings";
import "./App.css";

function App() {
    const obj = useParams()

    console.log(obj)


    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
