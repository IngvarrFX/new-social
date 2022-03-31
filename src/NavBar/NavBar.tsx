import React from "react";
import styles from "NavBar.module.css";

export const NavBar = () => {

    const query = window.location.href;

    console.log(query)
    return (<nav className="NavBar">
            <div className="Links">
                <a href="Profile">Profile</a>
                <a href="Messages">Messages</a>
                <a href="Dialogs">Dialogs</a>
                <a href="News">News</a>
                <a href="Settings">Settings</a>
            </div>
        </nav>
    );
};
