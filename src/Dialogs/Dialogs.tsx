import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {Dialog} from "./Dialog";

import styles from "./Dialogs.module.css";

type DialogsType = {
    name: string
    dialogs: Array<string>
}

export const Dialogs = () => {

    const dialogs: DialogsType[] = [
        {
            name: "Igor", dialogs: [
                "Hello", "My name is Igor", "How are you feel?",
            ]
        },
        {
            name: "Oxi", dialogs: [
                "Hi", "My name is Oxi", "I am so happy!",
            ]
        },
        {
            name: "Marcy", dialogs: [
                "Meow", "I am hungry", "Let's go play",
            ]
        },

    ]

    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogsItem}>
                {
                    dialogs.map((dialog, index) =>
                        <div className={styles.Dialog} key={index}>
                            <NavLink
                                to={`/dialogs/${dialog.name.toLowerCase()}`}
                                className={(navData) => navData.isActive ? styles["Active"] : ""}
                            >{dialog.name}</NavLink>
                        </div>)
                }
            </div>
            <div className={styles.Messages}>
                <Routes>
                    {
                        dialogs.map((dialog, index) => <Route key={index} path={`/${dialog.name.toLowerCase()}`}
                                                              element={<Dialog messages={dialog.dialogs}/>}/>)
                    }
                </Routes>
            </div>
        </div>
    );
};
