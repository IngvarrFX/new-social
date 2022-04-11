import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,} from "react-router-dom";
import App from "./App";
import {DialogsType, PostType} from "./types";


const dialogs: DialogsType[] = [
    {
        id: 1,
        name: "Igor",
        messages: [
            "Hello", "My name is Igor", "How are you feel?",
        ]
    },
    {
        id: 2,
        name: "Oxi",
        messages: [
            "Hi", "My name is Oxi", "I am so happy!",
        ]
    },
    {
        id: 3,
        name: "Marcy",
        messages: [
            "Meow", "I am hungry", "Let's go play",
        ]
    },

];

const posts:PostType[] = [
    {message: "Hello world!", likes: 3},
    {message: "My first post!", likes: 5},
]
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>);
