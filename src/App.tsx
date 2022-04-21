import React from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./Header";
import {NavBar} from "./NavBar";
import {Profile} from "./Profile";
import {Dialogs} from "./Dialogs";
import {News} from "./News";
import {Settings} from "./Settings";
import "./App.css";
import {stateType} from "./redux/state";


type AppPropsType = {
    state: stateType
    dispatch:(action: {type: string, payload: any})=> void
}

function App(props: AppPropsType) {
    const {profilePage, messagePage} = props.state;
    const {dispatch} = props;


    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/"
                           element={<Profile
                               posts={profilePage.posts}
                               dispatch={dispatch}
                               value={profilePage.newPostText}/>}/>
                    <Route path="/profile"
                           element={<Profile
                               posts={profilePage.posts}
                               dispatch={dispatch}
                               value={profilePage.newPostText}/>}/>
                    <Route path="/messages/*" element={<Dialogs dialogs={messagePage.dialogs} dispatch={dispatch} value={messagePage.newMessage}/>}/>
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
