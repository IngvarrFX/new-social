import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {Message} from "./Message";

import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem";

type DialogsType = {
    id: number
    name: string
    messages: Array<string>
}

export const Dialogs = () => {

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

    ]

    return (
        <div className={styles.Dialogs}>
            <div className={styles.DialogsItem}>
                {
                    dialogs.map((dialog, index) =>
                        <div className={styles.Dialog} key={index}>
                            <DialogItem id={dialog.id} name={dialog.name}/>
                        </div>)
                }
            </div>
            <div className={styles.Messages}>
                <Routes>
                    {
                        dialogs.map((dialog, index) => <Route key={index} path={`/${dialog.id}`}
                                                              element={<Message messages={dialog.messages}/>}/>)
                    }
                </Routes>
            </div>
        </div>
    );
};
