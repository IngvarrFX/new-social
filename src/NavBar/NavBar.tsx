import React from "react";
import styles from "NavBar.module.css"

export const NavBar = () => {
    return (<nav className="NavBar">
            <div className="Links">
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">Dialogs</a>
                <a href="#">News</a>
                <a href="#">Settings</a>
            </div>

        </nav>
    );
};
