import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Profile} from "./Profile";
import {Dialogs} from "./Dialogs";
import {Messages} from "./Messages";
import {News} from "./News";
import {Settings} from "./Settings";
import "./App.css";
import {DialogsType, PostType} from "./types";


type AppPropsType = {
    dialogs: DialogsType[]
    posts: PostType[]
}

function App(props: AppPropsType) {
    const {dialogs, posts} = props;


    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile posts={posts}/>}/>
                    <Route path="/profile" element={<Profile posts={posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs}/>}/>
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
